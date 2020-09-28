import React, { createRef } from 'react';

import { Image, Grid, Header, Modal, Label, Container } from 'semantic-ui-react'

import projectData from './projects'
import PageContainer from '../components/page_container'

import animejs from 'animejs'

let assets = require.context('./assets', true)

class Projects extends React.Component {
  contextRef = createRef()

  componentDidMount = () => {
    animejs({
      targets: '.projectGrid .projectContainer',
      opacity: [0, 1],
      duration: 500,
      delay: animejs.stagger(250, { grid: [3, 3]}),
      translateY:[50, 0],
      easing:'easeInOutQuad',
    });
  };

  render() {
    return (
      <PageContainer >
        <div className='projectGrid'>
            {projectData.map(project => <Project key={project.title} data={project} />)}
        </div>
      </PageContainer>
    );
  }
}

class Project extends React.Component {
  onMouseEnter() {
    animejs({
      targets: '.project',
      height: [100, 200],
      duration: 500,
      elasticity: 30
    })
  }

  render() {
    const { data } = this.props;
    const content = (
      <div className='projectContainer clickable'>
        <Image className='projectImage' src={assets(data.image)} />
        <p className='projectTitle epilogueLight'>{data.title}</p>
      </div>
    );
    const header =  (
      <div>
        {data.git ? <Label as='a' href={data.git} target='_blank' rel='noopener noreferrer' corner='right' icon='github' size='big' /> : null }
        <Container className='projectModalHeader' text>
          <Grid columns={2} verticalAlign='middle' >
            <Grid.Column width={2}>
              <Image src={assets(data.image)} size='tiny' circular bordered floated='left'/>
            </Grid.Column>
            <Grid.Column width={14} >
              <Header as='h2' style={{marginLeft: '20px'}}>{data.title} </Header> 
            </Grid.Column>
          </Grid>
        </Container>
      </div>
      
    )
    return (
      <Modal 
          trigger={content}
          header={header}
          content={data.more ? data.more : data.summary}
        />
    )
  }
}

export default Projects;
