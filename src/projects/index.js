import React from 'react';

import { Container, Header, Item, Segment, Label, Modal } from 'semantic-ui-react'

import projectData from './projects'
import HoverRaisedSegment from '../components/HoverRaisedSegment'

let assets = require.context('./assets', true)

function Projects() {
  return (
    <Container style={{ paddingBottom: '50px' }}>
      <Header textAlign='center' as='h1'>Projects</Header>
      <Container as='p' text>
        Here's some of the things I've made in recent years. Some of it's good, 
        some of it's less good, all of it is made with love and blood and sweat and 
        tears. Click on the ear tab on any project to see the source code on Github!
      </Container>
      <Item.Group>
        {projectData.map(project => <Project key={project.title} data={project} />)}
      </Item.Group>
    </Container>
  );
}

function Project(props) {
  let {data} = props
  let abandoned = data.abandoned ? <Label>Abandoned</Label> : ""
  let clickToSeeMore = data.more ? (
    <Segment basic textAlign='center'>
      <Header color='grey' as='h5'>- Click to find out more - </Header>
    </Segment>
  ) : ""

  let content = (
    <Item>
      <Item.Image src={assets(data.image)} size='small' circular bordered floated='left'/>
      <Item.Content>
        <Item.Header as='h2'>{data.title} {abandoned}</Item.Header>
        <Item.Description content={data.summary}/>
        { clickToSeeMore }
      </Item.Content>
    </Item>
  )
  
  return data.more ? (
    <HoverRaisedSegment clearing>
      <Label as='a' href={data.git} target='_blank' rel='noopener noreferrer' corner='right' icon='github' size='big' />
      <Modal 
          trigger={content}
          header={data.title}
          content={data.more}
        />
    </HoverRaisedSegment>
  ) : (
    <Segment clearing>
      <Label as='a' href={data.git} target='_blank' rel='noopener noreferrer' corner='right' icon='github' size='big' />
      {content}
    </Segment>
  )
}

export default Projects;
