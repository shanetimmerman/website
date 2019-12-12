import React from 'react'
import courseData from './data/courses.json'

function CourseWork() {
  return <div>
    <div>
      {courseData.relevant.map(course => <p key={course}>{course}</p>)}
    </div>
    <h2>Additional Courses</h2>
    <div>
      {courseData.additional.map(course => <p key={course}>{course}</p>)}
    </div>
  </div>
}

export default CourseWork