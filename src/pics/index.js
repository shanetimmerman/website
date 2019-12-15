import React from 'react'

import constructionBear from './assets/construction_bear.png'
import { Container, Image, Header } from 'semantic-ui-react'

function Pics() {
  return (
    <Container textAlign='center'>
      <Header as='h1'>This page is under construction</Header>
      <Image src={constructionBear} centered />
      <Header as='h1'>Please bear with us</Header>
    </Container>
  )
}

export default Pics