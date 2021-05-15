import React from 'react';
import Navigator from './Navigator';

class Previous extends React.Component {
        render(){
                let time = sessionStorage.getItem("Value");
                let time_arr = time.split(',');

                let ret = time_arr.map(time => {
                        let minutes = Math.floor(time/60000);
                        let seconds = Math.floor(time/1000 - (minutes * 60));
                        let milli = Math.floor(time - (seconds * 1000) - (minutes * 60000))/10;

                        return(
                                <p>{minutes}:{seconds}:{milli}</p>
                        );
                })
        
                return(
                        <div>
                                <Navigator></Navigator>
                                <p>{ret}</p>
                        </div>
                        
                         
                )
        }
}

export default Previous; 