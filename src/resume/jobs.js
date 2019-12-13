import jobData from './data/jobs.json'
import React from 'react'
import { Header, Item, List, Segment } from 'semantic-ui-react'

let assets = require.context('./assets', true)

function Jobs() {
  return <div>
    <Header textAlign='center' as='h2'>Work Experience</Header>
    {jobData.map(job => <Job key={job.company} data={job} />)}
  </div>

}

// TODO: CHANGE TO ITEMS
function Job(props) {
  let { data } = props
  return <Segment raised>
    <Item>
      <Item.Image src={assets(data.image)} size='medium' circular bordered />
      <Item.Content>
        <Item.Header as='h2'>{data.company}</Item.Header>
        <Item.Meta as='h3'>{data.location}</Item.Meta>
        <Item.Content>
          {data.roles.map(position => <Position key={position.title} data={position} />)}
        </Item.Content>
      </Item.Content>
    </Item>
  </Segment>
}

function Position(props) {
  let { data } = props
  return <div>
    <Header as='h4'>{data.title}</Header>
    <Header as='h5'>{data.dates}</Header>
    <List bulleted>
      {data.bullets.map(bullet => <Bullet key={bullet} data={bullet}/>)}
    </List>
  </div>
}

function Bullet(props) {
  let { data } = props
  return (
    <List.Item>{data}</List.Item>
  )
}

export default Jobs