import React from 'react'
import { Header, List, Segment, Item, Grid } from 'semantic-ui-react'

import educationData from './data/education.json'
import FadeIn from '../components/animations/fade_in.js'
import FadeUp from '../components/animations/fade_up.js'

let assets = require.context('./assets', true)

function Education(props) {
  return (
    <div>
      <FadeIn delay={props.delay} >
        <Header textAlign='center' as='h2'>Education</Header>
        <Item.Group>
          <FadeUp
            delay={props.delay}>
            <School data={educationData.college} />
          </FadeUp>
          <FadeUp delay={props.delay + 200} >
            <School data={educationData.highschool} />
          </FadeUp>
        </Item.Group>
      </FadeIn>
    </div>
  )
}

function School({data}) {
  return (
    <Segment raised >
      <Item>
        <Segment basic clearing className='resumeItemTop'>
          <Item.Image src={assets(data.image)} floated='left' size='small' circular bordered />
          <Item.Header as='h1'>{data.school}</Item.Header>
          <Item.Meta as='h3'>{data.location}</Item.Meta>
        </Segment>
        <Item className='resumeItemBottom'>
          { data.college ? (<Item.Content as='h3'>{data.college}</Item.Content>): null }
          <Item.Header as='h5' style={{marginTop: '-5px'}}>{data.degree}</Item.Header>
          <Item.Header as='h4' style={{marginTop: '-5px'}}>{data.graduationDate}</Item.Header>
          <Grid columns={2}>
            <Grid.Column width={5}>
              { data.GPA ? (<div>
                <Item.Meta as='h5'>GPA:</Item.Meta>
                <p style={{marginTop: '-12px'}}>{data.GPA}</p>
                </div>): null }
            </Grid.Column>
            <Grid.Column width={11}>
              { data.honors ? (
                <div>
                  <List.Header as='h5'>Honors:</List.Header>
                  <List bulleted style={{marginTop: '-12px'}}>
                    {data.honors.map(honor => <List.Item key={honor}>{honor}</List.Item>)}
                  </List>
                </div>) : null }
            </Grid.Column>
          </Grid>
        </Item>
      </Item>
    </Segment>
  )
}

export default Education