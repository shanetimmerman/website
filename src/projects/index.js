import React from 'react';

import { Container, Header, Item, Segment, Label, Modal, Image} from 'semantic-ui-react'

import projectData from './projects'
import gitLogo from './assets/git_logo.png'

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
      <Item.Group>
        {projectData.map(project => <Project key={project.title} data={project} />)}
      </Item.Group>
    </Container>
  );
}

// MAYBE USE MODALS TO READ MORE
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
        <Item.Meta href={data.git} target='_blank' rel='noopener noreferrer'>Project Link</Item.Meta>
        <Item.Description content={data.summary}/>
        { clickToSeeMore }
      </Item.Content>
    </Item>
  )
  
  let item = data.more ? (
    <Modal 
          trigger={content}
          header={data.title}
          content={data.more}
        />
  ) : content

  return (
    <Segment raised clearing>
      <Label as='a' href={data.git} target='_blank' rel='noopener noreferrer' corner='right' image>
        <Image src={ gitLogo } fluid />
      </Label>
      {item}
    </Segment>
  )

}

export default Projects;
