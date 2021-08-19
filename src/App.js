import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//importing all the components 
import Stopwatch from './pages/stopwatch/Stopwatch';
import History from './pages/stopwatch/History';
import Clock from './pages/clock/Clock'
import Calculator from './pages/calculator/Calculator'
import Convert from './pages/money/Convert'
import Navigator from './Navigator';

// _______________________IMPORTANT_____________________
// As react is a single page (index.html) app we cannot use multipage attributes,
// React deals with components instead of pages.
// so to use multiple pages in same app we used react-routers
// so this app.js contains the routing logic of our app, so that we can navigate to history and timer
// within the app

class App extends Component {
    render() {
      return (
        <div className = "App">

        {/* calling router  */}
        <Router>
          <Switch>
            {/* giving paths to the component */}
            <Route path="/Stopwatch" exact component={() => <Stopwatch />} />
            <Route path="/History" exact component={() => <History />} />
            <Route path="/Clock" exact component={() => <Clock />} />
            <Route path="/Calculator" exact component={() => <Calculator />} />
            <Route path="/Convert" exact component={() => <Convert />} />
            <Navigator></Navigator>
          </Switch>
        </Router>
        </div>
      )
    }
}

export default App;