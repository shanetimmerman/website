import React from 'react'
import courseData from './data/courses.json'
import { Header, Segment} from 'semantic-ui-react'

function CourseWork() {
  return (
  <div>
    <Header textAlign='center' as='h2'>Coursework</Header>
    <Segment raised>
      <Header as='h3'>Computer Science Courses</Header>
      <div>
        {courseData.relevant.map(course => <p key={course}>{course}</p>)}
      </div>
      <Header as='h3'>Additional Courses</Header>
      <div>
        {courseData.additional.map(course => <p key={course}>{course}</p>)}
      </div>
      </Segment>
  </div>
  )
}

export default CourseWork