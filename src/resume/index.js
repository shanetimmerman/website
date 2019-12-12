import React from 'react'
import { Header } from 'semantic-ui-react'

import Jobs from './jobs.js'
import Skills from './skills.js'
import Education from './education.js'
import CourseWork from './coursework.js'

import {  Divider, Grid, Segment } from 'semantic-ui-react'

function Resume() {
  return (
    <Segment>
      <Grid columns={2} relaxed='very' 
        container
        divided="vertically"
        >
        <Header as='h1'>Resume</Header>
        <Grid.Column>
          <Jobs />
        </Grid.Column>
        <Grid.Column>
          <Skills />
          <Education />
          <CourseWork />
        </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
    </Segment>
  );
}

export default Resume;
