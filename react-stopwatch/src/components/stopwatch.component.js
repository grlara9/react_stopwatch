import React , {Component} from 'react'

class Stopwatch extends Component{
    constructor(){
        super();
        this.state = {
            isRunning: false,
            timerStart:0,
            timerTime:0
        }
    }
        handleStartStop = () => 
        {
            if(this.state.isRunning){
                this.setState({isRunning: false});
                clearInterval(this.timer);
            } 
            else{
                this.setState({
                    isRunning: true,
                    timerTime: this.state.timerTime,
                    timerStart: Date.now() - this.state.timerTime
                })
                this.timer = setInterval(()=> {
                    this.setState({
                        timerTime: Date.now() - this.state.timerStart
                    })
                }, 10)
            }        
        }
        
        
        
        render() {
            return (
                <div>
                <button onClick={this.handleStartStop}>{this.state.isRunning?"Stop":"Start"}</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;

