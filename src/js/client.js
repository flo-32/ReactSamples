import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  NavLink
} from "react-router-dom";

import Archive from "./pages/Archive";
import Layout from "./components/Layout";
import Start from "./pages/Start";

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <div class="container">
      <Layout />
      <ul class="nav nav-pills">
        <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/archive">Archive</NavLink></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Start}/>
      <Route path="/archive" component={Archive}/>
    </div>
  </BrowserRouter>,
  app);
