import React from "react";
import { Link } from "react-router-dom";

class Navigator extends React.Component {

    render(){

        return(
            <div>
                <div style= {{margin: "20px 30px"}}>
                    <Link to="/Stopwatch">
                    Stopwatch
                    </Link>
                </div>
                <div>
                    <Link to="/Previous">
                    Previous
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navigator