import React from 'react';

import {Container, Header, Item, Segment} from 'semantic-ui-react'

import projectData from './data/projects.json'

let assets = require.context('./assets', true)

function Projects() {
  return (
    <Container >
      <Header textAlign='center' as='h1'>Projects</Header>
      {projectData.map(project => <Project key={project.title} data={project} />)}
    </Container>
  );
}

// MAYBE USE MODALS TO READ MORE
// TODO: CHANGE TO ITEMS
function Project(props) {
  let {data} = props
  return (
    <Segment raised>
      <Item>
        <Item.Image src={assets(data.image)} size='medium' circular bordered />
        <Item.Header as='h2'>{data.title}</Item.Header>
        <Item.Meta href={data.git} target='_blank' rel='noopener noreferrer'>Project Link</Item.Meta>
        <Item.Description>{data.summary}</Item.Description>
      </Item>
    </Segment>
  )
}

export default Projects;
