import jobData from './data/jobs.json'
import React from 'react'
import { Header, List, Segment } from 'semantic-ui-react'

function Jobs() {
  return <div>
    <Header textAlign='center' as='h2'>Work Experience</Header>
    {jobData.map(job => <Job key={job} data={job} />)}
  </div>

}

function Job(props) {
  let { data } = props
  return <Segment raised>
    <Header as='h2'>{data.company}</Header>
    <Header as='h3'>{data.location}</Header>
    <div>
      {data.roles.map(position => <Position key={position} data={position} />)}
    </div>
  </Segment>
}

function Position(props) {
  let { data } = props
  return <div>
    <Header as='h4'>{data.title}</Header>
    <Header as='h5'>{data.dates}</Header>
    <List>
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