import React from 'react'

import { Header, Container } from 'semantic-ui-react'


function Recursion() {
  return (
    <Container textAlign='center'>
      <Header as='h2'>Wireframing currently in progress</Header>
      <Header as='h3'>Prototype</Header>
      <Container 
        style={{
          position: 'relative',
          width:'80%',
          paddingTop: '60%',
          overflow: 'hidden'
        }}
      >
        <iframe style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }} 
        title='BabyBox Prototype'
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsHNBLanN1LQEzUohBW9WFc%2FBaby-Box-App%3Fnode-id%3D8%253A5%26viewport%3D611%252C241%252C0.15889151394367218%26scaling%3Dscale-down&chrome=DOCUMENTATION"
        allowfullscreen></iframe>
      </Container>
      <Header as='h3'>Source File</Header>
      <Container 
        style={{
          position: 'relative',
          width:'80%',
          paddingTop: '60%',
          overflow: 'hidden'
        }}
      >
        <iframe style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }} 
        title='BabyBox Source'
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FsHNBLanN1LQEzUohBW9WFc%2FBaby-Box-App%3Fnode-id%3D15%253A168&chrome=DOCUMENTATION" 
        allowfullscreen></iframe>
      </Container>
    </Container>
  )
}

export default Recursion
