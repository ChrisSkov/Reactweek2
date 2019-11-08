import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import data from "./data/data.json";
import Users from './Users';
import Details from './Details';
function Welcome() {
  return (
    <div>
      <h3>This is a page</h3>
      <Link to="/all">See all Users</Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/all" component={Users}>
          </Route>
          <Route path='/details/:personId' component={Details}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
