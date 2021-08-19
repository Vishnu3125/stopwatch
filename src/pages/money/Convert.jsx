import React, { useEffect } from 'react';
import './Convert.css'
import { Link } from "react-router-dom";
const Convert = require('unit-converter-pro');

const Money = () => {
    useEffect(() => {
        
    }, []);

    function convert(){
        let length = new Convert.Length();
        var e = document.getElementById("units1")
        var convertfrom = e.options[e.selectedIndex].value;
        e = document.getElementById("units2")
        var convertto = e.options[e.selectedIndex].value;
        var convertinput = document.getElementById("convertinput")
        var convertoutput = document.getElementById("convertoutput")
        
        console.log(length.convertfrom(convertinput).convertto());
    }

    return (
        <div>
            <div className="App">
                <Link to="/" className="link red-link">
                Home
                </Link>
                <div>
                    <input type="text" name="" id="convertinput" className="convert-text" style={{marginTop: "8%"}}/>
                    <select name="Unit1" id="units1" className="convert-input">
                        <option value="kilometer">Kilometer</option>
                        <option value="meter">meter</option>
                        <option value="centimeters">centimeters</option>
                        <option value="millimeters">millimeters</option>
                    </select>
                </div>
                <span>TO</span>
                <div>
                    <input type="text" name="" id="convertoutput" className="convert-text" readOnly/>
                    <select name="Unit2" id="units2" onChange={convert} className="convert-input">
                        <option value="kilometer">Kilometer</option>
                        <option value="meter">meter</option>
                        <option value="centimeters">centimeters</option>
                        <option value="millimeters">millimeters</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Money;
