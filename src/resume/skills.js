import React from 'react'
import { Header, Segment, Item, List, Grid } from 'semantic-ui-react'

import skillData from './data/skills.json'

function Skills(props) {
  return (
    <div className='resumeContent' {...props}>
      <Header textAlign='center' as='h2'>Skills</Header>
      <Segment raised>
        {skillData.map(domain => <Domain key={domain.domain} data={domain} />)}
      </Segment>
    </div>
  )
}

function Domain(props) {
  let {data} = props
  let skills
  if ('proficient' in data) {
    skills = (
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <Segment basic vertical>
            <Header as='h4'><i>Proficient with</i></Header>
            <List bulleted>
              {data.proficient.map(skill => <List.Item key={skill}>{skill}</List.Item>)}
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment basic vertical>
            <Header as='h4'><i>Familiar with</i></Header>
            <List bulleted>
              {data.familiar.map(skill => <List.Item key={skill}>{skill}</List.Item>)}
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  } else {
    const skillList = data.skills.map(skill => (
      <List.Item key={skill}>{skill}</List.Item>
    ))
    const half = Math.ceil(skillList.length / 2);  
    skills = (
      <Item.Content>        
        <Grid columns={2} relaxed='very' equal>
          <Grid.Column>
            <List bulleted>
              {skillList.splice(0, half)}
            </List>
          </Grid.Column>
          <Grid.Column>
            <List bulleted>
              {skillList.splice(-half)}
            </List>
          </Grid.Column>
        </Grid>
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