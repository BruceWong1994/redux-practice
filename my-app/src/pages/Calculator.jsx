import React from 'react';
import store from '../store/index';
import './calculator.css';

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            num: store.getState().num || 0,
        }
    }

    componentDidMount() {
        store.subscribe(this.freshNumber)
    }

    freshNumber = () => {
        // console.log(store.getState());
        this.setState({
            num: store.getState().num
        })
    }

    handleClick = () => {
        store.dispatch({ type: 'plus', act: 2 })
    }

    render() {
        return (
            <div>
                <p>Calculator 组件</p>
                <p>{this.state.num}</p>
                <div className='btn-block'>
                    <button className='normal' onClick={this.handleClick}>+2</button>
                    <button className='normal' onClick={() => store.dispatch({ type: 'return' })}>归零</button>
                </div>
            </div>
        )

    }
}

export default Calculator;