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
      <Grid divided="vertically" relaxed="very" columns={3}>
        <Grid.Column width={8}>
          <Jobs />
        </Grid.Column>
        <Grid.Column width={4}>
          <Education />
          <CourseWork />
        </Grid.Column>
        <Grid.Column width={4}>
          {/* TODO MAYBE MAKE SKILLS STICKY */}
          <Skills />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Resume;
