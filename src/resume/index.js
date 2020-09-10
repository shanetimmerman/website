import React from 'react'
import Anime from 'react-anime'
import { Container, Header, Grid } from 'semantic-ui-react'

import Jobs from './jobs.js'
import Skills from './skills.js'
import Education from './education.js'
import CourseWork from './coursework.js'

function Resume() {
  return (
    <Container>
      <Header textAlign='center' as='h1'>Resume</Header>
      <Grid divided="vertically" relaxed="very" stackable columns={2}>
        <Grid.Column className='resumeColumn' width={8}>
            <Jobs delay={0}/>
        </Grid.Column>
        <Grid.Column  className='resumeColumn' width={8}>
          <Education delay={100} />
          <CourseWork style={{ paddingTop: '20px' }} delay={500} />
          <Skills style={{ paddingTop: '20px' }} delay={700}/>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Resume;
