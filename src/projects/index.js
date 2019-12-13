import React from 'react';

import {Container, Grid, Header, Image, Segment} from 'semantic-ui-react'

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

function Project(props) {
  let {data} = props
  return (
    <Segment raised>
      <Grid columns={2}>
        <Grid.Column width={3}>
          <Image src={assets(data.image)} size='medium' circular bordered />
        </Grid.Column>
        <Grid.Column width={13}>
          <Header as='h2'>{data.title}</Header>
          <a href={data.git} target='_blank' rel='noopener noreferrer'>Project Link</a>
          <p>{data.summary}</p>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default Projects;
