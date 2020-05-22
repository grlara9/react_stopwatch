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
         reset = ()=> {
             this.setState({
                 timerTime:0,
                 timerStart:0
             })
         }
        
        
    render() {
        return (
            <div>
                <button  className={this.state.isRunning? "btn btn-danger btn-block": "btn btn-success btn-block"}
                 onClick={this.handleStartStop}>{this.state.isRunning? "Stop":"Start"}
                 </button>
                <button className="btn btn-warning btn-block" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
export default Stopwatch;

