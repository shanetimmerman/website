import React from 'react'

import { Header, Container, Image } from 'semantic-ui-react'
const map = require('./assets/babybot_images/map.png')


function Recursion() {
  return (
    <Container textAlign='center'>
      <p>
        Designing a mobile health application to solve the absence of prenatal 
        health services in the middle of the united states. The application is
        paired with an at-home testing kit to provide comprehensive prenatal
        from the comfort of one's own home.
      </p>
      <Image src={map} />
    <p className='imageSource'>Image from <a href='https://www.marchofdimes.org/materials/2020-Maternity-Care-Report-eng.pdf' target='_' >https://www.marchofdimes.org/materials/2020-Maternity-Care-Report-eng.pdf</a></p>
     <Header as='h2'>Slide Deck</Header>
     <Header as='h5'>(Contains NABC, ideation, etc.)</Header>
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
        title='BabyBot Slide Deck'
        src="https://onedrive.live.com/embed?cid=7B2D2806CD622F20&amp;resid=7B2D2806CD622F20%2161751&amp;authkey=ALh2UJZlTSswZ6w&amp;em=2&amp;wdAr=1.7777777777777777" frameborder="0">
      </iframe>
    </Container>
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
        title='BabyBot Prototype'
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTHOnEVXZ8gNZKWGsJfLnX0%2FBaby-Bot%3Fnode-id%3D1%253A225%26viewport%3D52%252C572%252C0.06955469399690628%26scaling%3Dscale-down"
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
        title='BabyBot Source'
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTHOnEVXZ8gNZKWGsJfLnX0%2FBaby-Bot%3Fnode-id%3D1%253A40" 
        allowfullscreen></iframe>
      </Container>
    </Container>
  )
}

export default Recursion
