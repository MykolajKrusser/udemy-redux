import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionsTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>
                    Store Result
                </button>
                <ul>
                    {this.props.storedResults.map(strResult=> (
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ctr: state.counter,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: ()=> dispatch({type: actionsTypes.INCREMENT}),
        onDecrementCounter: ()=> dispatch({type: actionsTypes.DECREMENT}),
        onAddCounter: ()=> dispatch({type: actionsTypes.ADD, value: 5}),
        onSubCounter: ()=> dispatch({type: actionsTypes.SUB, value: 5}),
        onStoreResult: ()=>dispatch({type: actionsTypes.STORE_RESULT}),
        onDeleteResult: (id)=>dispatch({type: actionsTypes.DELETE_RESULT, resulElementId: id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);