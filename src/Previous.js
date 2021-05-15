import React from 'react';
import { Link } from "react-router-dom";

class Previous extends React.Component {
        render(){
                let time = sessionStorage.getItem("Value");
                let time_arr = []
                if (time !== null) {
                        time_arr = time.split(',');
                }
                

                        let ret = time_arr.map(time => {
                        let minutes = Math.floor(time/60000);
                        let seconds = Math.floor(time/1000 - (minutes * 60));
                        let milli = Math.floor(time - (seconds * 1000) - (minutes * 60000))/10;

                        milli = milli.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})
                        seconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})
                        minutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})

                        return(
                                <p>{minutes}:{seconds}:{milli}</p>
                        );
                })
        
                return(
                        <div>
                                <Link to="/Stopwatch" className="link">
                                Stopwatch
                                </Link>
                                <p className="timer-history">{ret}</p>
                        </div>
                        
                         
                )
        }
}

export default Previous; 