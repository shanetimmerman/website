import React from 'react'
import skillData from './data/skills.json'

function Skills() {
  return <div>
      {skillData.map(domain => <Domain key={domain} data={domain} />)}
    </div>
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
  return <div>
    <h2>{data.domain}</h2>
    {skills}
  </div>
}


export default Skills