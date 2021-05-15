import React from "react";
import { Link } from "react-router-dom";

const Header = {
    // height: "40px",
    // marginTop: "00px"
    display: "inline-flex"
}


const Links = {
    margin: "20px 30px",
    
}

class Navigator extends React.Component {

    render(){

        return(
            <div style={Header}>
                <div style= {Links}>
                    <Link to="/Stopwatch" className="link">
                    Stopwatch
                    </Link>
                </div>
                <div style= {Links}>
                    <Link to="/Previous" className="link">
                    View History
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navigator