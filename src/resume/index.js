import React from 'react'
import { Header } from 'semantic-ui-react'

import Jobs from './jobs.js'
import Skills from './skills.js'
import Education from './education.js'
import CourseWork from './coursework.js'

import { Grid } from 'semantic-ui-react'

function Resume() {
  return (
    <div container>
      <Header textAlign='center' as='h1'>Resume</Header>
      <Grid container divided="vertically" relaxed="very" columns={2}>
        <Grid.Column>
          <Jobs />
        </Grid.Column>
        <Grid.Column>

          <Skills />
          <Education />
          <CourseWork />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Resume;
