import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Menu, } from 'semantic-ui-react'

import Resume from './resume/index.js'
import Home from './home/index.js'
import Projects from './projects/index.js'
import Pics from './pics/index.js'

let navBar = [
  { name:'Home', key:'home', as:Link, to:'/'},
  { name:'Resume', key:'resume', as:Link, to:'/resume'},
  { name:'Projects', key:'projects', as:Link, to:'/projects'},
  { name: 'Pics', key:'pics', as:Link, to:'/pics'}
]


function WebRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Menu items={navBar} widths={navBar.length} />
        <Switch>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/pics/'>
            <Pics />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default WebRouter;
