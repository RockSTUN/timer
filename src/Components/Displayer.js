import React from 'react';
import B from './B.mp3'
const Beep = new Audio(B)
let anchor = null;

class Displayer extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleTime = this.handleTime.bind(this);
    }
    handleTime(){
        let timeAux = [...this.props.timeLeft];
                timeAux[1]-=1;
                 
            if (timeAux[1] < 0 && timeAux[0] == 0){
                        this.props.ticToc([0,0])
                        document.getElementById('beep').play();
                        this.props.changeTimer()
            }
                    
                
            
           
            else{
                    if (timeAux[1] < 0){    
                        timeAux[1] = 59;
                        timeAux[0] -= 1;
                    }
                this.props.ticToc(timeAux)
            }
        
    }
    
    handleClick(event){
        if (event.target.id == 'i1'){
                if (!this.props.paused){
                anchor = setInterval(this.handleTime, 1000);
                }
                else{
                    console.log(anchor)
                    clearInterval(anchor);
                    anchor = null
                }
            
        this.props.stst();
        }
        else{
            let bip = document.getElementById('beep')
            bip.pause();
            bip.currentTime = 0;
            this.props.reset();
            clearInterval(anchor)
        }
        
    };
    render(){
        return <div>
            <div className={'border border-primary'}>
                <audio id={'beep'} src={Beep.source} type={'mp3'}></audio>
                <h4 id={'timer-label'}>{this.props.timer}</h4>
                <h2 id={'time-left'}>{this.props.timeLeft.map((el) => (el == 0) ? '00' : el.toString()).join(':')}</h2>
                <div className={'container-fluid row'}>
                    <div>
                        <button id={'start_stop'} onClick={this.handleClick}><i id={'i1'} className={'carousel-control-next-icon'}></i></button>
                    </div>
                    <div>
                        <button id={'reset'} onClick={this.handleClick}><i id={'i2'} className={'carousel-control-next-icon'}></i></button>
                    </div>
                </div>
            </div>
        </div>
    }
};

export default Displayer;
