import React from 'react'
import { Header, List, Segment, Item } from 'semantic-ui-react'

import educationData from './data/education.json'

let assets = require.context('./assets', true)

function Education() {
  return (
    <div>
      <Header textAlign='center' as='h2'>Education</Header>
      <Item.Group>
        <School data={educationData.college} />
        <School data={educationData.highschool} />
      </Item.Group>
    </div>
  )
}

function School({data}) {
  return (
    <Segment raised>
      <Item>
        <Segment basic clearing>
          <Item.Image src={assets(data.image)} floated='left' size='small' circular bordered />
          <Item.Header as='h1'>{data.school}</Item.Header>
          <Item.Meta as='h3'>{data.location}</Item.Meta>
        </Segment>
        <Item>
          { data.college ? (<Item.Content as='h3'>{data.college}</Item.Content>): null }
          <Item.Header as='h5'>{data.degree}</Item.Header>
          <Item.Header as='h4'>{data.graduationDate}</Item.Header>
          { data.GPA ? (<Item.Meta as='h5'>GPA: <p>{data.GPA}</p></Item.Meta>): null }
          { data.honors ? (
            <div>
              <List.Header as='h5'>Honors:</List.Header>
              <List bulleted>
                {data.honors.map(honor => <List.Item key={honor}>{honor}</List.Item>)}
              </List>
            </div>) : null }
        </Item>
      </Item>
    </Segment>
  )
}

export default Education