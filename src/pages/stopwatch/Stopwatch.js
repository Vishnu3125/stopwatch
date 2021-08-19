import './Stopwatch.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";


//declaring variables 
let stop_timer = true;
let time = 0;
let minutes = "00";
let seconds = "00";
let milli = "00";
let time_flags = [];
let interval;

class Stopwatch extends Component {
    constructor() {
      super()
        this.state = {
          //init defaul values which will load on first randering 
          minute: minutes,
          second: seconds,
          millisec: milli,
          start: "Start"
        }
        //binding all the functions 
        this.handleClickStart = this.handleClickStart.bind(this);
        this.handleClickStop = this.handleClickStop.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
        this.timerFunction = this.timerFunction.bind(this);
    }

    //main timer function which converts the milliseconds to minutes, hours and milli itself
    timerFunction(){
      time = time + 10;
      minutes = Math.floor(time/60000);
      seconds = Math.floor(time/1000 - (minutes * 60));
      milli = Math.floor(time - (seconds * 1000) - (minutes * 60000))/10;

      //this part converts all single digit values to 2 digit value ex.9->09, 3->03
      // this is used just make the digits look good after render.
      milli = milli.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})
      seconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})
      minutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})

      if (stop_timer) {
        clearInterval(interval);
      }else
      {
        this.setState({
          millisec : milli,
          second : seconds,
          minute : minutes
        })
      }
    }

    // this function is called to start the timer and it calls another function (timerFunction) 
    //which contains the logic of timer
    //main purpose of this function is to check if stop timer is called or not and to call
    // the timerFunction every 10 millisecond
    handleClickStart() {
      stop_timer = false;
      this.setState(
          {
              start : "Start"
          }
      )
      interval = setInterval(this.timerFunction ,10);
    }

    //this function sets the stop_timer to true which will result into stoping the timer
    //this function sets the state of start variable to "Resume"
    //this function also stores the time value to session which 
    //will be retrived on the view history page later
    handleClickStop(){
      stop_timer = true;
      time_flags.push(time);
      sessionStorage.setItem("Value", time_flags);
      this.setState(
          {
            start : "Resume"
          }
      )
    }

    //the reset function deals with a lot of things such as, setting the main timer to 0
    //setting the time flag to 0, which stores the data of time in session for history view
    //it also stops the running timer
    //it sets all display values to 00
    //it also reset the state value
    handleClickReset(){
      sessionStorage.setItem("Value", null);
      time_flags = [];
      stop_timer = true;
      time = 0
      minutes = "00";
      seconds = "00";
      milli = "00";
      this.setState({
        minute: minutes,
        second: seconds,
        millisec: milli,
        start : "Start"
      })
    }

    //render function which is called in class to render the states to our app
    render() {
      return (
        <div className = "App">
        <Link to="/" className="link yellow-link" style={{margin:"2%"}}>
        Home
        </Link>

        {/* rendering all the values */}
        <p className = "timer" > 
            <div className="timer_text">{this.state.minute}</div>:
            <div className="timer_text">{this.state.second}</div>:
            <div className="timer_text">{this.state.millisec}</div>  
        </p>

        {/* calling all the buttons start stop and reset */}
        <button onMouseDown={this.handleClickStart} className = "timer-button">{this.state.start}</button>
        <button onMouseDown={this.handleClickStop} className = "timer-button">Stop</button>
        <button onClick={this.handleClickReset} className = "timer-button">Reset</button>

        <div style={{margin:"4%"}}>
        <Link to="/History" className="link yellow-link">
        View History
        </Link>
        </div>
        </div>
      )
    }
}

export default Stopwatch;