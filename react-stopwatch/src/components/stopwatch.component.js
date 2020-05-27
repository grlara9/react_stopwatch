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
        const {timerTime} = this.state;
        let milliseconds = ("0" + (Math.floor(timerTime / 10)% 100)).slice(-2)
        let seconds = ("0" + (Math.floor(timerTime /1000)% 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        
        return (
            <div>
                <div className="counter">
                    <div className="time">
                        <p>StopWatch</p>
                        <div className="time-value">
                            {hours}
                        </div>
                        <div className="time-value">
                            {minutes}
                        </div>
                        <div className="time-value">
                           {seconds}
                        </div>
                        <div className="time-value">
                            {milliseconds}
                        </div>
                    </div> 
                <button  className={this.state.isRunning? "btn btn-outline-danger btn-lg btn-block": "btn btn-outline-primary btn-lg btn-block"}
                 onClick={this.handleStartStop}>{this.state.isRunning? "Stop":"Start"}
                 </button>
                <button className="btn btn-outline-warning btn-sm btn-block" onClick={this.reset}>Reset</button>
                  </div>
            </div>
        )
    }
}
export default Stopwatch;
 
