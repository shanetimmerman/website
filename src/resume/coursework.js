import React from 'react'
import Anime from 'react-anime'
import courseData from './data/courses.json'
import { Header, Segment} from 'semantic-ui-react'

function CourseWork(props) {
  return (
    <div {...props}>
      <Anime
        opacity={[0, 1]}
        duration={800}
        easing='easeInOutQuad'
        delay={props.delay}
      >
        <Header textAlign='center' as='h2'>Coursework</Header>
        <Anime
          translateY={[100, 0]}
          delay={props.delay}
          duration={800}
          easing='easeInOutQuad'
        >
          <Segment raised style={{marginTop: '20px'}}>
            <Header as='h3'>Computer Science Courses</Header>
            {courseData.relevant.map(course => <p key={course}>{course}</p>)}
            <Header as='h3'>Additional Courses</Header>
          {courseData.additional.map(course => <p key={course}>{course}</p>)}
          </Segment>
        </Anime>
      </Anime>
    </div>
  )
}

export default CourseWork