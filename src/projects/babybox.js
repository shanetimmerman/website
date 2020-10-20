import React from 'react'

import { Header, Container, Image } from 'semantic-ui-react'
const map = require('./assets/babybox_images/map.png')


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
        src="https://northeastern-my.sharepoint.com/personal/timmerman_sh_northeastern_edu/_layouts/15/Doc.aspx?sourcedoc={09f67932-1620-4825-9b06-5f2a1abd7e00}&amp;action=embedview&amp;wdAr=1.7777777777777777" frameborder="0">
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
