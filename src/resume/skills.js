import React from 'react'
import { Header, Segment, Item, List } from 'semantic-ui-react'

import skillData from './data/skills.json'

function Skills() {
  return (
    <div>
      <Header textAlign='center' as='h2'>Skills</Header>
      <Segment raised>
        <Item.Group divided>
          {skillData.map(domain => <Domain key={domain.domain} data={domain} />)}
        </Item.Group>
      </Segment>
    </div>
  )
}

function Domain(props) {
  let {data} = props
  let skills
  if ('proficient' in data) {
    skills = (
      <div>
        <Item.Content>
          <Header as='h4'><i>Proficient with</i></Header>
          <List>
            {data.proficient.map(skill => <List.Item key={skill}>{skill}</List.Item>)}
          </List>
        </Item.Content>
        <Item.Content>
          <Header as='h4'><i>Proficient with</i></Header>
          <List>
            {data.familiar.map(skill => <List.Item key={skill}>{skill}</List.Item>)}
          </List>
        </Item.Content>
      </div>
    )
  } else {
    skills = (
      <div>
        <Item.Content>
          <List>
            {data.skills.map(skill => <List.Item key={skill}>{skill}</List.Item>)}
          </List>
        </Item.Content>
      </div>
    )
  }

  return (
    <Item>
      <Item.Header as='h3'>{data.domain}</Item.Header>
      {skills}
    </Item>
  )
}


export default Skills