import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Menu } from 'semantic-ui-react'

import Resume from './resume/index.js'
import Home from './home/index.js'
import Projects from './projects/index.js'

let navBar = [
  { name:'Home', key:'home', as:Link, to:'/'},
  { name:'Resume', key:'resume', as:Link, to:'/resume'},
  { name:'Projects', key:'projects', as:Link, to:'/projects'},
]


function WebRouter() {
  return (
    <Router>
      <div>
        <Menu items={navBar} />
        <Switch>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default WebRouter;
