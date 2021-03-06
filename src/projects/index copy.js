import React, { createRef } from 'react';

import { Container, Header, Item, Segment, Label, Modal, Grid, Sticky, Ref, Rail } from 'semantic-ui-react'

import FadeUpList from '../components/animations/fade_up_list'

import projectData from './projects'
import HoverRaisedSegment from '../components/HoverRaisedSegment'
import PageContainer from '../components/page_container'

import animejs from 'animejs'

let assets = require.context('./assets', true)

class Projects extends React.Component {
  contextRef = createRef()

  render() {
    return (
      <PageContainer >
        <Grid columns={2} stackable>
          <Grid.Column  width={5}>
            <Ref innerRef={this.contextRef}>
              <Rail >
                <Sticky context={this.contextRef}  offset={200}>
                  <Header textAlign='center' as='h1' className='light'>Projects</Header>
                  <p className='light'>
                    Here's some of the things I've made in recent years. Some of it's good, 
                    some of it's less good, all of it is made with love and blood and sweat and 
                    tears. 
                    <br /> 
                    Click on the ear tab on any project to see the source code on Github!
                  </p>
                </Sticky>
              </ Rail>
            </Ref>
          </Grid.Column>
          <Grid.Column width={11}>
            <Item.Group>
              <FadeUpList duration={800}>
                {projectData.map(project => <Project key={project.title} data={project} />)}
              </FadeUpList>
            </Item.Group>
          </Grid.Column>
        </Grid>      
      </PageContainer>
    );
  }
}

class Project extends React.Component {
  onMouseEnter() {
    animejs({
      targets: '.project',
      height: [100, 200],
      duration: 500,
      elasticity: 30
    })
  }

  render() {
    const { data } = this.props;
    const clickToSeeMore = data.more ? (
      <Container textAlign='center' style={{marginTop: '20px'}}>
        <Header as='h5' className='muted' color='grey'>- Click to find out more - </Header>
      </Container>
    ) : ""

    const content = (
      <Item className='project'>
        <Grid columns={2} verticalAlign='middle' >
          <Grid.Column width={2}>
            <Item.Image src={assets(data.image)} size='tiny' circular bordered floated='left'/>
          </Grid.Column>
          <Grid.Column width={14} >
            <Item.Header as='h2' style={{marginLeft: '20px'}}>{data.title} </Item.Header> 
          </Grid.Column>
        </Grid>
        <Item.Content>
          <Segment basic>
            <Item.Description content={data.summary}/>
            { clickToSeeMore }
          </Segment>
        </Item.Content>
      </Item>
    )
    
    return data.more ? (
      <HoverRaisedSegment clearing className='clickable' >
        {data.git ? <Label as='a' href={data.git} target='_blank' rel='noopener noreferrer' corner='right' icon='github' size='big' /> : null }
        <Label as='a' href={data.git} target='_blank' rel='noopener noreferrer' corner='right' icon='github' size='big' />
        <Modal 
            trigger={content}
            header={data.title}
            content={data.more}
          />
      </HoverRaisedSegment>
    ) : (
      <Segment clearing >
        { data.git ? <Label as='a' href={data.git} target='_blank' rel='noopener noreferrer' corner='right' icon='github' size='big' /> : null }
        {content}
      </Segment>
    )
  }
}

export default Projects;
