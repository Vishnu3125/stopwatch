import React from "react";
import { Link } from "react-router-dom";

const Header = {
    display: "inline-flex"
}

const Links = {
    margin: "20px 30px",
}


// this navigator file is just to make the navigation from timer page to 
//view history page and vice versa possible
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
                    <Link to="/History" className="link">
                    View History
                    </Link>
                </div>
            </div>
        )}}

export default Navigator