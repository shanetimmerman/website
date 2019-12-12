import React from 'react'
import educationData from './data/education.json'

function Education() {
  return <div>
    <College data={educationData.college} />
    <HighSchool data={educationData.highschool} />
  </div>
}

function College(props) {
  let {data} = props
  return <div>
    <h2>{data.school}</h2>
    <h3>{data.college}</h3>
    <p>{data.gradeuationDate}</p>
    <p>{data.degree}</p>
    <p>GPA: {data.GPA}</p>
    <ul>Honors:
      {data.honors.map(honor => <li key='honor'>{honor}</li>)}
    </ul>
  </div>

}

function HighSchool(props) {
  let {data} = props
  return <div>
    <h2>{data.school}</h2>
    <p>{data.gradeuationDate}</p>
    <p>{data.degree}</p>
  </div>
}

export default Education