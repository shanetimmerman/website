import React, {createRef} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { Menu, Sticky, Container } from 'semantic-ui-react'

import Resume from './resume/index.js'
import Home from './home/index.js'
import Projects from './projects/index.js'
import Pics from './pics/index.js'
import Signature from './home/signature_sacramento'

let navBar = [
  { name: 'ABOUT', key:'home', as:Link, to:'/'},
  { name: 'PROJECTS', key:'projects', as:Link, to:'/projects'},
  { name: 'RESUME', key:'resume', as:Link, to:'/resume'},
  { name: 'PICS', key:'pics', as:Link, to:'/pics'}
]


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

function NavMenu() {
  const location = useLocation()
  return (
    <Menu className='navMenu' attached='top' text>
      <Container>
          <Signature/>
        </Container>
      <Menu.Menu items={navBar} position='right'>
          {navBar.map(props => (
            <Menu.Item as={Link} to={props.to} className='epilogueLight' key={`menu_${props.name}_item`} active={location.pathname === props.to}>
              {props.name}
            </Menu.Item>
          ))}
        </Menu.Menu>
      
     
    </Menu>
  )
}

export default WebRouter;
