import './App.css';
import React, {Component} from 'react';
import Navigator from './Navigator';

let stop_timer = true;
let time = 0;
let minutes, seconds, milli = 0;
let time_flags = [];
let interval;


class Stopwatch extends Component {

    constructor() {
      super()
        this.state = {
          hour: "00",
          minute: "00",
          second: "00",
          start: "Start"
        }
        this.handleClickStart = this.handleClickStart.bind(this);
        this.handleClickStop = this.handleClickStop.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
        this.getTimer = this.getTimer.bind(this);

    }

    getTimer(){

      time = time + 10;
      //let hours = Math.floor(time / 3600);
      //let minutes = Math.floor((time - hours * 3600) / 60);
      //let seconds = time - (hours * 3600) - (minutes * 60);
      minutes = Math.floor(time/60000);
      seconds = Math.floor(time/1000 - (minutes * 60));
      milli = Math.floor(time - (seconds * 1000) - (minutes * 60000))/10;

        milli = milli.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})
        seconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})
        minutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})

      if (stop_timer) {
        clearInterval(interval);
      }else
      {
        this.setState({
          second : milli,
          minute : seconds,
          hour : minutes
        })
      }
    }

    handleClickStart() {
      stop_timer = false;
      this.setState(
          {
              start : "Start"
          }
      )
      interval = setInterval(this.getTimer ,10);
      
      
      //setInterval(setTimer, 1000)
      //this.setState({second: new_val})
    }

    handleClickStop(){
      stop_timer = true;
      time_flags.push(time);
      console.log(time_flags)
      sessionStorage.setItem("Value", time_flags);
      this.setState(
          {
            start : "Resume"
          }
      )
    }

    handleClickReset(){
        stop_timer = true;
      time = 0
      this.setState({
        second : "00",
        minute : "00",
        hour : "00",
        start : "Start"
      })
    }

    render() {
    
      return (
        <div className = "App">
        <Navigator></Navigator>
        <p> 
            <div style = {{display : "inline"}}>{this.state.hour}</div>:
            <div style = {{display : "inline"}}>{this.state.minute}</div>:
            <div style = {{display : "inline"}}>{this.state.second}</div>  
        </p> 
        <button onClick={this.handleClickStart} style = {{}}>{this.state.start}</button>
        <button onClick={this.handleClickStop} style = {{}}>Stop!</button>
        <button onClick={this.handleClickReset} style = {{}}>Reset!</button>
        </div>
      )
    }
}

export default Stopwatch;