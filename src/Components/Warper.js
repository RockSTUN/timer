import React from 'react';
import { Provider, connect } from 'react-redux';
import {createStore} from 'redux';
//Components
import Displayer from './Displayer';
import BreakSession from './BreakSession';
import Session from './Session';
//Bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
//Redux maps
import { reducer, displayerMap, sessionMap, breakMap } from './ReduxFunctions';

//Create Store:
const store = createStore(reducer);
//connect
const BreakSessionC = connect(breakMap.mapStateToProps,breakMap.mapDispatchToProps)(BreakSession)
const DisplayerC = connect(displayerMap.mapStateToProps,displayerMap.mapDispatchToProps)(Displayer)
const SessionC = connect(sessionMap.mapStateToProps, sessionMap.mapDispatchToProps)(Session)

class Warper extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <Provider store={store}>
            <div className={'container-fluid'} id={'title'}>
                <h1>{'25+5 Clock'}</h1>
            </div>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col-xs-2'}>
                        <BreakSessionC />
                    </div>
                    <div className={'col-xs-2'}>
                        <SessionC />
                    </div>
                </div>
                <div className={'container-fluid'}>
                    <DisplayerC />
                </div>
            </div>
        </Provider>
    }
}

export default Warper;
