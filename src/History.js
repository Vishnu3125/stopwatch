import React from 'react';
import { Link } from "react-router-dom";

class History extends React.Component {
        //calling render function
        render(){

                //declaring some variables and storing the previously stored session value back to a variable
                let time = sessionStorage.getItem("Value");
                let time_arr = []
                let timeHistory
                if (time === 'null') {
                        timeHistory = () => {return(<h4>Values Reset</h4>)}
                }else if(time !== null ){
                        time_arr = time.split(',');//values in time valiable are stored in string format,so converting it onto array

                        // this function converts the milliseconds to minutes, hours and milli itself and 
                        // all individual values are passed to the function with the help of map function
                        timeHistory = time_arr.map(time => {
                                let minutes = Math.floor(time/60000);
                                let seconds = Math.floor(time/1000 - (minutes * 60));
                                let milli = Math.floor(time - (seconds * 1000) - (minutes * 60000))/10;
                                
                                //this part converts all single digit values to 2 digit value ex.9->09, 3->03
                                // this is used just make the digits look good after render and same was done in stopwatch.js.
                                milli = milli.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})
                                seconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})
                                minutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})
        
                                return(
                                        <p>{minutes}:{seconds}:{milli}</p>
                                );
                        })
                }
                        
                //returning the values will will get rendered on the app
                return(
                        <div>
                                <Link to="/Stopwatch" className="link">
                                Stopwatch
                                </Link>
                                <p className="timer-history">{timeHistory}</p>
                        </div> 
                ) } }

export default History; 