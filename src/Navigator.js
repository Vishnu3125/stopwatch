import React from "react";
import { Link } from "react-router-dom";

class Navigator extends React.Component {

    render(){

        return(
            <div>
            <Link to="/Stopwatch">
            Stopwatch
            </Link>
            <Link to="/Previous">
            Previous
            </Link>
            </div>
        )
    }
}

export default Navigator