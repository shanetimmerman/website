import React from 'react';

import {Container, Header, Item, Segment, Label} from 'semantic-ui-react'

import projectData from './data/projects.json'

let assets = require.context('./assets', true)

function Projects() {
  return (
    <Container >
      <Header textAlign='center' as='h1'>Projects</Header>
      <Container as='p' text>
        Here's some of the things I've made in recent years. Some of it's good, 
        some of it's wavy, all of it is made with love and blood and sweat and 
        tears. The source code can be found in my Github!
      </Container>
      {projectData.map(project => <Project key={project.title} data={project} />)}
    </Container>
  );
}

// MAYBE USE MODALS TO READ MORE
function Project(props) {
  let {data} = props
  let abandoned = data.abandoned? <Label as='h2'>Abandoned</Label> : ""
  return (
    <Segment raised>
      <Item>
        <Item.Image src={assets(data.image)}size='medium' circular bordered />
        <Item.Header as='h2'>{data.title} {abandoned}</Item.Header>
        <Item.Meta href={data.git} target='_blank' rel='noopener noreferrer'>Project Link</Item.Meta>
        <Item.Description>{data.summary}</Item.Description>
        <Container textAlign='center'>
          <Header color='grey' as='h5'>- Click to find out more - </Header>
        </Container>
      </Item>
    </Segment>
  )
}

export default Projects;
