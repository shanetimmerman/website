import jobData from './data/jobs.json'
import React from 'react'
import { Header, Item, List, Segment, Grid } from 'semantic-ui-react'
import FadeIn from '../components/animations/fade_in.js'
import FadeUpList from '../components/animations/fade_up_list'

let assets = require.context('./assets', true)

function Jobs(props) {
  return (
    <div {...props}>
      <FadeIn
        delay={props.delay}
      >
        <Header textAlign='center' as='h2'>Work Experience</Header>
        <Item.Group>
          <FadeUpList>
            {jobData.map(job => <Job key={job.company} data={job} />)}
          </FadeUpList>
        </Item.Group>
      </FadeIn>
    </div>
  )
}

function Job(props) {
  let { data } = props
  return (
    <Segment raised >
      <Item>
        <Segment basic clearing className='resumeItemTop'>
          <Item.Image src={assets(data.image)} floated='left' size='small' circular bordered />
          <Item.Header as='h1'>{data.company}</Item.Header>
          <Item.Meta as='h3'>{data.location}</Item.Meta>
        </Segment>
        <Item.Group divided className='resumeItemBottom'>
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