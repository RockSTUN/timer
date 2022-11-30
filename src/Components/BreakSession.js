import React from 'react';

class BreakSession extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        if (event.target.innerHTML == 'Decrease'){
            if (this.props.breakLength[0] > 1) {
               this.props.dec() 
            }
        }
        
        else{
            if(this.props.breakLength[0] < 60){
            this.props.inc()   
            }
        }
    }
    render(){
        return <div >
            <h3 id={'break-label'}>{'Break Length'}</h3>
            <div className={'row container-fluid'}>
                <h4 id={'break-length'}>{this.props.breakLength[0]}</h4>
                <div className={'col-xs-2'}>
                    <div>
                        <button id={'break-decrement'} onClick={this.handleClick}>
                            {'Decrease'}
                        </button>
                    </div>
                </div>
                <div className={'col-xs-2'}>
                    <button id={'break-increment'}onClick={this.handleClick}>
                        {'Increase'}
                    </button>
                </div>
            </div>
        </div>
    }
};

export default BreakSession;
