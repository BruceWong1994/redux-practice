import React from 'react';
import store from '../store/index';

class switchBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: store.getState().checked,
        }
    }

    componentDidMount() {
        store.subscribe(this.getColor)
    }

    getColor = () => {
        // console.log(store.getState());
        this.setState({
            checked: store.getState().checked
        })
    }

    handleChange = () => {
        store.dispatch({type:'color'})
    }

    render() {
        const { checked } = this.state;
        return (
            <div>
                {checked ?
                    <div style={{ width: 100, height: 50, background: 'lightblue' }}></div>
                    : <div style={{ width: 100, height: 50, background: 'black' }}></div>}
                <p><button onClick={this.handleChange}>change color</button></p>
            </div>
        )
    }

}

export default switchBlock;