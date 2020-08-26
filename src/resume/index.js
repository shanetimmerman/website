import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'

import Jobs from './jobs.js'
import Skills from './skills.js'
import Education from './education.js'
import CourseWork from './coursework.js'

function Resume() {
  return (
    <Container>
      <Header textAlign='center' as='h1'>Resume</Header>
      <Grid divided="vertically" relaxed="very" columns={2}>
        <Grid.Column className='resumeColumn' width={9}>
          <Jobs />
        </Grid.Column>
        <Grid.Column  className='resumeColumn' width={7}>
          <Education />
          <CourseWork style={{ 'padding-top': '20px' }}/>
          <Skills style={{ 'padding-top': '20px' }}/>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Resume;
