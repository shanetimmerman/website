import React, {createRef} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Sticky, } from 'semantic-ui-react'

import Resume from './resume/index.js'
import Home from './home/index.js'
import Projects from './projects/index.js'
import Pics from './pics/index.js'
import NavMenu from './nav_menu/index.js'

class WebRouter extends React.Component {
  contextRef = createRef()

  render() {
    return (
      <Router >
        <div ref={this.contextRef}>
          <Sticky context={this.contextRef}>
            <NavMenu />
          </Sticky>
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
}

export default WebRouter;
