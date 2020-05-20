import React , {Component} from 'react'

class Stopwatch extends Component{
    constructor(){
        super();
        this.state = {
            isRunning = false,
            timerStart:0,
            timerTime
        }
        handleStartStop = () => {

        }

        reset = () => {

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

