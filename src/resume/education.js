import React from 'react'
import { Header, List, Segment, Item } from 'semantic-ui-react'

import educationData from './data/education.json'

let assets = require.context('./assets', true)

function Education() {
  return (
    <div>
      <Header textAlign='center' as='h2'>Education</Header>
      <Item.Group>
        <College data={educationData.college} />
        <HighSchool data={educationData.highschool} />
      </Item.Group>
    </div>
  )
}

function College({data}) {
  return (
    <Segment raised>
      <Item>
        <Segment basic clearing>
          <Item.Image src={assets(data.image)} floated='left' size='small' circular bordered />
          <Item.Header as='h1'>{data.school}</Item.Header>
          <Item.Meta as='h3'>{data.college}</Item.Meta>
        </Segment>
        <Item>
          <Item.Header as='h4'>{data.graduationDate}</Item.Header>
          <Item.Header as='h5'>{data.degree}</Item.Header>
          <Item.Meta as='h5'>GPA: <p>{data.GPA}</p></Item.Meta>
          <List.Header as='h5'>Honors:</List.Header>
          <List bulleted>
            {data.honors.map(honor => <List.Item key={honor}>{honor}</List.Item>)}
          </List>
        </Item>
      </Item>
    </Segment>
  )
}

function HighSchool({data}) {
  return (
    <Segment raised>
      <Item>
        <Segment basic clearing>
          <Item.Image src={assets(data.image)} floated='left' size='small' circular bordered />
          <Item.Header as='h1'>{data.school}</Item.Header>
        </Segment>
        <Item>
          <Item.Header as='h4'>{data.graduationDate}</Item.Header>
          <Item.Header as='h5'>{data.degree}</Item.Header>
        </Item>
      </Item>
    </Segment>
  )
}

export default Education