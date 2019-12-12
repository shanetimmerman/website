import React from 'react'
import courseData from './data/courses.json'
import { Header} from 'semantic-ui-react'

function CourseWork() {
  return (
  <div>
    <div>
      {courseData.relevant.map(course => <p key={course}>{course}</p>)}
    </div>
    <Header as='h2'>Additional Courses</Header>
    <div>
      {courseData.additional.map(course => <p key={course}>{course}</p>)}
    </div>
  </div>
  )
}

export default CourseWork