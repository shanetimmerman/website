import React from 'react'
import courseData from './data/courses.json'
import { Header, Segment} from 'semantic-ui-react'
import FadeIn from '../components/animations/fade_in.js'
import FadeUp from '../components/animations/fade_up.js'

function CourseWork(props) {
  return (
    <div {...props}>
      <FadeIn delay={props.delay}>
        <FadeUp distance={50} delay={props.delay} >
          <Header textAlign='center' as='h2'>Coursework</Header>
        </FadeUp>
        <FadeUp delay={props.delay}>
          <Segment raised >
            <Header as='h3'>Computer Science Courses</Header>
            {courseData.relevant.map(course => <p className='resumeCourseName' key={course}>{course}</p>)}
            <Header as='h3'>Additional Courses</Header>
          {courseData.additional.map(course => <p className='resumeCourseName' key={course}>{course}</p>)}
          </Segment>
        </FadeUp>
      </FadeIn>
    </div>
  )
}

export default CourseWork