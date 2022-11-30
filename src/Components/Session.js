import React from 'react';

class Session extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        if (event.target.innerHTML == 'Decrease'){
            if (this.props.sessionLength[0] > 1){
                this.props.dec()
            }
            
        }
        else{
            if(this.props.sessionLength[0] < 60){
            this.props.inc()   
            }
        }
    }
    render(){
        return <div >
            <h3 id={'session-label'}>{'Session Length'}</h3>
            <div className={'row container-fluid'}>
                <h4 id={'session-length'}>{this.props.sessionLength[0]}</h4>
                <div className={'col-xs-2'}>
                    <div>
                        <button id={'session-decrement'} onClick={this.handleClick}>
                            {'Decrease'}
                        </button>
                    </div>
                </div>
                <div className={'col-xs-2'}>
                    <button id={'session-increment'}onClick={this.handleClick}>
                        {'Increase'}
                    </button>
                </div>
            </div>
        </div>
    }
};

export default Session;
