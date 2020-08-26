import React from 'react'

import { Header, Container } from 'semantic-ui-react'
import Home from '../router'


function Recursion() {
  return (
    <Container textAlign='center'>
      <Header as='h1'>RECURSION!</Header>
      <Home />
    </Container>
  )
}

export default Recursion
