import React, { useState } from 'react';
import './Calculator.css'
import { Link } from "react-router-dom";

const Calculator = () => {
    const [inputset, setinputset] = useState(0);

    function calc(input) {
        if(input == "=")
        {
            let oldvalue = document.getElementById("screen").value
            document.getElementById("screen").value = eval(oldvalue)
        }
        else if(input == "clear"){
            document.getElementById("screen").value = ""
        }
        else if(input == "delete"){
            let oldvalue = document.getElementById("screen").value 
            document.getElementById("screen").value = oldvalue.slice(0,-1)
        }
        else{
            let oldvalue = document.getElementById("screen").value
            document.getElementById("screen").value = oldvalue + input
        }
        
    }

    return (
        <div>
            <Link to="/" className="link orange-link">
            Home
            </Link>
            <form action="">
                <input type="text" name="screen" id="screen" className="claculator-text" readOnly/>
                <div>
                    <input type="button" value="1" className="calculator-button" onClick={() => calc("1")}/>
                    <input type="button" value="2" className="calculator-button" onClick={() => calc("2")}/>
                    <input type="button" value="3" className="calculator-button" onClick={() => calc("3")}/>
                    <input type="button" value="-" className="calculator-button" onClick={() => calc("-")}/>
                </div>
                <div>
                    <input type="button" value="4" className="calculator-button" onClick={() => calc("4")}/>
                    <input type="button" value="5" className="calculator-button" onClick={() => calc("5")}/>
                    <input type="button" value="6" className="calculator-button" onClick={() => calc("6")}/>
                    <input type="button" value="*" className="calculator-button" onClick={() => calc("*")}/>
                </div>
                <div>
                    <input type="button" value="7" className="calculator-button" onClick={() => calc("7")}/>
                    <input type="button" value="8" className="calculator-button" onClick={() => calc("8")}/>
                    <input type="button" value="9" className="calculator-button" onClick={() => calc("9")}/>
                    <input type="button" value="+" className="calculator-button" onClick={() => calc("+")}/>
                </div>
                <div>
                    <input type="button" value="/" className="calculator-button" onClick={() => calc("/")}/>
                    <input type="button" value="0" className="calculator-button" onClick={() => calc("0")}/>
                    <input type="button" value="." className="calculator-button" onClick={() => calc(".")}/>
                    <input type="button" value="=" className="calculator-button" onClick={() => calc("=")}/>
                </div>
                <div>
                    <input type="button" value="Delete" className="calculator-button-big" onClick={() => calc("delete")}/>
                    <input type="button" value="Clear" className="calculator-button-big" onClick={() => calc("clear")}/>
                </div>
            </form>
        </div>
    );
}

export default Calculator;
