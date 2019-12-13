import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

import skillData from './data/skills.json'

function Skills() {
  return (
    <div>
      <Header textAlign='center' as='h2'>Skills</Header>
      {skillData.map(domain => <Domain key={domain} data={domain} />)}
    </div>
  )
}

function Domain(props) {
  let {data} = props
  let skills
  if ('proficient' in data) {
    skills = <div>
        <p><i>Proficient with: </i>{data.proficient.join(', ')}</p>
        <p><i>Familiar with: </i>{data.familiar.join(', ')}</p>
      </div>
  } else {
    skills = <div>
        <p>{data.skills.join(', ')}</p>
      </div>
  }

  return (
    <Segment rasied>
      <Header as='h3'>{data.domain}</Header>
      {skills}
    </Segment>
  )
}


export default Skills