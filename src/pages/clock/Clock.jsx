import React, {useState} from 'react';
import './Clock.css'
import { Link } from "react-router-dom";

const Clock = () => {
    const [currentTime, setcurrentTime] = useState(0);

    setInterval(showTime, 1000);

    function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let am_pm, hr
        am_pm = "AM";
    
        if (hour > 12) {
            hour -= 12;
            am_pm = "PM";
        }
        if (hour == 0) {
            hr = 12;
            am_pm = "AM";
        }
    
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
    
        let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
        // let currentTime = '${hour} : ${min} : ${sec} ${am_pm}';
        setcurrentTime(currentTime)
    }

    return (
        <div>
            <div>
                <Link to="/" className="link green-link" style={{margin:"2%"}}>
                Home
                </Link>
            </div>
            <div className="clock">
                {currentTime ? currentTime : "Loading..."}
            </div>
        </div>
    );
}

export default Clock;