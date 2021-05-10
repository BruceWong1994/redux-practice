import React from 'react';
import Calculator from './Calculator';
import Setting from './Setting';
import store from '../store';

export default class Index extends React.Component {

    clearAll = () => {
        store.dispatch({type:'clearAll'})
        console.log(store.getState());
    }

    render(){
        return(
            <>
                <h1>首页</h1>
                <Calculator />
                <Setting />
                <p style={{position:'fixed',bottom: 100}}><button onClick={this.clearAll}>重置所有</button></p>
            </>
        )
    }
}