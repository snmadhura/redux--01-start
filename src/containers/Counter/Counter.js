import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrementByFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementByFive}  />
                <hr />

                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.stroredResult.map(strResult => {
                        return <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>;
                    }
                    )}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        ctr : state.counter,
        stroredResult : state.results
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter : () => dispatch({ type : actionTypes.INCREMENT}),
        onDecrementCounter : () => dispatch({ type : actionTypes.DECREMENT}),
        onIncrementByFive : () => dispatch({type : actionTypes.INCREMENTBY5, value : 5}),
        onDecrementByFive : () => dispatch({type : actionTypes.DECREMENTBY5, value : 5}),
        onStoreResult : () => dispatch({type : actionTypes.STORE_RESULT}),        
        onDeleteResult : (id) => dispatch({type : actionTypes.DELETE_RESULT, resultELeId:id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);