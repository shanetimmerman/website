import jobData from './data/jobs.json'
import React from 'react'

function Jobs() {
  return <div>
    {jobData.map(job => <Job key={job} data={job} />)}
  </div>

}

function Job(props) {
  let { data } = props
  return <div>
    <h2>{data.company}</h2>
    <h3>{data.location}</h3>
    <div>
      {data.roles.map(position => <Position key={position} data={position} />)}
    </div>
  </div>
}

function Position(props) {
  let { data } = props
  return <div>
    <h4>{data.title}</h4>
    <h5>{data.dates}</h5>
    <ul>
      {data.bullets.map(bullet => <Bullet key={bullet} data={bullet}/>)}
    </ul>
  </div>
}

function Bullet(props) {
  let { data } = props
  return <li>{data}</li>
}

export default Jobs