import jobData from './data/jobs.json'
import React from 'react'
import Anime from 'react-anime'
import animejs from 'animejs'
import { Header, Item, List, Segment, Grid } from 'semantic-ui-react'

let assets = require.context('./assets', true)

function Jobs(props) {
  return (
    <div {...props}>
      <Anime
        opacity={[0, 1]}
        duration={800}
        easing='easeInOutQuad'
        delay={props.delay}
      >
        <Header textAlign='center' as='h2'>Work Experience</Header>
        <Item.Group>
          <Anime
            translateY={[100, 0]}
            opacity={[0, 1]}
            delay={animejs.stagger(200)}
            duration={800}
            easing='easeInOutQuad'
          >
            {jobData.map(job => <Job key={job.company} data={job} />)}
          </Anime>
        </Item.Group>
      </Anime>
    </div>
  )
}

function Job(props) {
  let { data } = props
  return (
    <Segment raised style={{marginTop: '20px'}}>
      <Item>
        <Segment basic clearing>
          <Item.Image src={assets(data.image)} floated='left' size='small' circular bordered />
          <Item.Header as='h1'>{data.company}</Item.Header>
          <Item.Meta as='h3'>{data.location}</Item.Meta>
        </Segment>
        <Item.Group divided>
          {data.roles.map(position => <Position key={position.title} data={position} className='resumeJobsPosition'/>)}
        </Item.Group>
      </Item>
    </Segment>
  )
}

function Position(props) {
  let { data } = props
  return (
    <Item>
      <Grid columns={2} stackable>
        <Grid.Column width={6}>
          <Item.Header as='h4'>{data.title}</Item.Header>
          <Item.Header as='h5'>{data.dates}</Item.Header>
        </Grid.Column>
        <Grid.Column width={10}>
          <List bulleted>
            {data.bullets.map(bullet => <List.Item>{bullet}</List.Item>)}
          </List>
        </Grid.Column>    
      </Grid>
    </Item>
  )
}

export default Jobs