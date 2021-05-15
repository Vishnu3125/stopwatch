//import Main from './Main';
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stopwatch from './Stopwatch';
import Previous from './Previous';
import Navigator from './Navigator';

class App extends Component {
    render() {
      return (
        <div className = "App">
        
        <Router>
          <Switch>
            <Route path="/Previous" exact component={() => <Previous />} />
            <Route path="/Stopwatch" exact component={() => <Stopwatch />} />
            <Navigator></Navigator>
          </Switch>
        </Router>
        </div>
      )
      }
}

export default App;