import React from 'react'
import { Header, Segment, Item, List } from 'semantic-ui-react'

import skillData from './data/skills.json'

function Skills(props) {
  return (
    <div className='resumeContent' {...props}>
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
      <Item.Content>
        <Segment basic vertical>
          <Header as='h4'><i>Proficient with</i></Header>
          <List bulleted>
            {data.proficient.map(skill => <List.Item key={skill}>{skill}</List.Item>)}
          </List>
        </Segment>
        <Segment basic vertical>
          <Header as='h4'><i>Familiar with</i></Header>
          <List bulleted>
            {data.familiar.map(skill => <List.Item key={skill}>{skill}</List.Item>)}
          </List>
        </Segment>
      </Item.Content>
    )
  } else {
    skills = (
      <Item.Content>
        <List bulleted>
          {data.skills.map(skill => <List.Item key={skill}>{skill}</List.Item>)}
        </List>
      </Item.Content>
    )
  }

  return (
    <Item>
      <Segment basic>
        <Item.Header as='h3'>{data.domain}</Item.Header>
        {skills}
      </Segment>
    </Item>
  )
}


export default Skills