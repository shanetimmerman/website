import React from 'react';
import {
  Link,
  useLocation
} from 'react-router-dom';
import { Menu, Container, Grid } from 'semantic-ui-react'

import Signature from './signature_svg'

let navBar = [
  { name: 'ABOUT', key:'home', as:Link, to:'/'},
  { name: 'GALLERY', key:'gallery', as:Link, to:'/gallery'},
]

function NavMenu() {
  const location = useLocation()
  return (
    <div id='navContainer'>
      <Container>
        <Grid columns={2} stackable>
          <Grid.Column width={8}>
            <Signature/>
          </Grid.Column>
          <Grid.Column width={8} verticalAlign='middle'>
            <Menu className='navMenu' text>
              <Menu.Menu items={navBar} position='right'>
                {navBar.map(props => (
                  <Menu.Item as={Link} to={props.to} className='epilogueLight' 
                      key={`menu_${props.name}_item`} 
                      active={location.pathname === props.to}>
                    {props.name}
                  </Menu.Item>
                ))}
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid> 
      </Container>
    </div>
  )
}

export default NavMenu;
