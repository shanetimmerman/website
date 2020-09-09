import React from 'react';

import { Container, Header, Item, Segment, Label, Modal } from 'semantic-ui-react'

import Anime from 'react-anime'
import anime from 'animejs'

import projectData from './projects'
import HoverRaisedSegment from '../components/HoverRaisedSegment'

let assets = require.context('./assets', true)

function Projects() {
  return (
    <Container >
      <Header textAlign='center' as='h1'>Projects</Header>
      <Container as='p' text>
        Here's some of the things I've made in recent years. Some of it's good, 
        some of it's less good, all of it is made with love and blood and sweat and 
        tears. Click on the ear tab on any project to see the source code on Github!
      </Container>
      <Item.Group>
      <Anime
          translateY={[100, 0]}
          opacity={[0, 1]}
          delay={anime.stagger(200)}
          duration={800}
          easing='easeInOutQuad'
      >
        {projectData.map(project => <Project key={project.title} data={project} />)}
      </Anime>
      </Item.Group>
    </Container>
  );
}

function Project(props) {
  let {data} = props
  let abandoned = data.abandoned ? <Label>Abandoned</Label> : ""
  let clickToSeeMore = data.more ? (
    <Segment basic textAlign='center' style={{marginTop: '-5px'}}>
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
    <HoverRaisedSegment clearing style={{marginBottom: '20px'}}>
      <Label as='a' href={data.git} target='_blank' rel='noopener noreferrer' corner='right' icon='github' size='big' />
      <Modal 
          trigger={content}
          header={data.title}
          content={data.more}
        />
    </HoverRaisedSegment>
  ) : (
    <Segment clearing style={{marginBottom: '20px'}}>
      <Label as='a' href={data.git} target='_blank' rel='noopener noreferrer' corner='right' icon='github' size='big' />
      {content}
    </Segment>
  )
}

export default Projects;
