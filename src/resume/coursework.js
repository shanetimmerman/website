import React from 'react'
import courseData from './data/courses.json'
import { Header, Segment} from 'semantic-ui-react'

function CourseWork() {
  return (
    <div>
      <Header textAlign='center' as='h2'>Coursework</Header>
      <Segment raised>
        <Header as='h3'>Computer Science Courses</Header>
        {courseData.relevant.map(course => <p key={course}>{course}</p>)}
        <Header as='h3'>Additional Courses</Header>
        {courseData.additional.map(course => <p key={course}>{course}</p>)}
        </Segment>
    </div>
  )
}

export default CourseWork