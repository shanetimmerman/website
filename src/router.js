import React, {createRef} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Sticky, } from 'semantic-ui-react'

import Home from './home/index.js'
// import Projects from './projects/index.js'
import Gallery from './gallery/index.js'
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
            <Route path='/gallery/'>
              <Gallery />
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
