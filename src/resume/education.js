import React from 'react'
import { Header, List } from 'semantic-ui-react'

import educationData from './data/education.json'

function Education() {
  return <div>
    <College data={educationData.college} />
    <HighSchool data={educationData.highschool} />
  </div>
}

function College(props) {
  let {data} = props
  return (
    <div>
      <Header as='h2'>{data.school}</Header>
      <Header as='h3'>{data.college}</Header>
      <p>{data.gradeuationDate}</p>
      <p>{data.degree}</p>
      <p>GPA: {data.GPA}</p>
      <List>Honors:
        {data.honors.map(honor => <List.Item key='honor'>{honor}</List.Item>)}
      </List>
    </div>
  )
}

function HighSchool(props) {
  let {data} = props
  return (
    <div>
      <Header as='h2'>{data.school}</Header>
      <p>{data.gradeuationDate}</p>
      <p>{data.degree}</p>
    </div>
  )
}

export default Education