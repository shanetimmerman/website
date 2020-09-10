import React from 'react'
import Anime from 'react-anime'
import { Header, List, Segment, Item, Grid } from 'semantic-ui-react'

import educationData from './data/education.json'

let assets = require.context('./assets', true)

function Education(props) {
  return (
    <div>
      <Anime
        opacity={[0, 1]}
        duration={800}
        easing='easeInOutQuad'
        delay={props.delay}
      >
        <Header textAlign='center' as='h2'>Education</Header>
        <Item.Group>
          <Anime
            translateY={[100, 0]}
            delay={props.delay}
            duration={800}
            easing='easeInOutQuad'
            opacity={[0, 1]}
            
          >
            <School data={educationData.college} />
          </Anime>
          <Anime
            translateY={[100, 0]}
            delay={props.delay + 200}
            duration={800}
            opacity={[0, 1]}
            easing='easeInOutQuad'
          >
            <School data={educationData.highschool} />
          </Anime>
        </Item.Group>
      </Anime>
    </div>
  )
}

function School({data}) {
  return (
    <Segment raised style={{marginTop: '20px'}}>
      <Item>
        <Segment basic clearing>
          <Item.Image src={assets(data.image)} floated='left' size='small' circular bordered />
          <Item.Header as='h1'>{data.school}</Item.Header>
          <Item.Meta as='h3'>{data.location}</Item.Meta>
        </Segment>
        <Item>
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