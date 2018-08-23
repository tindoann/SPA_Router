import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;

/* The way React Router works is by defining what I call a routing region. 
Inside this region, you will have two things: Nav links and container */

/* This URL value (defined by the to prop) acts as an identifier to ensure 
the right content gets loaded. The way we match the URL with the content is 
by using a Route component. Go ahead and add the following highlighted lines: */

/*  The value you specify for the path determines when this route is going to be 
active. When a route is active, the component specified by the component prop gets 
rendered. */

/* The exact prop ensures the Route is active only if the path is an exact match for what is being loaded. */
