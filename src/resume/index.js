import React from 'react'
import { Header, Grid } from 'semantic-ui-react'
import PageContainer from '../components/page_container'

import Jobs from './jobs.js'
import Skills from './skills.js'
import Education from './education.js'
import CourseWork from './coursework.js'

function Resume() {
  return (
    <PageContainer>
      <Header textAlign='center' as='h1'>Resume</Header>
      <Grid divided="vertically" relaxed="very" stackable columns={2} even>
        <Grid.Column className='resumeColumn'>
            <Jobs delay={0}/>
        </Grid.Column>
        <Grid.Column  className='resumeColumn'>
          <Education delay={100} />
          <CourseWork delay={500} />
          <Skills delay={700}/>
        </Grid.Column>
      </Grid>
    </PageContainer>
  );
}

export default Resume;
