import React from 'react';
import { Provider, connect } from 'react-redux';
import {createStore} from 'redux';
//Components

//Bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
//Redux maps
import { reducer } from './ReduxFunctions';

//Create Store:
const store = createStore(reducer);
//connect

class Warper extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <Provider store={store}>
        
        
        </Provider>
    }
}

export default Warper;
