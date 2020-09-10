import React from 'react';
import { Container, Header, Grid, Image, Segment, Icon } from 'semantic-ui-react';

import profilePhoto from './assets/profile_photo.jpg'
// import {ReactComponent as Signature} from './assets/name.svg'
import Signature from './signature'
import FadeIn from '../components/animations/fade_in';
import FadeUp from '../components/animations/fade_up';

function Home() {
  return (
    <Container className='homeBackground' fluid style={{overflow: 'hidden'}}>
      <Background />

      <Container className='homeContainer' text textAlign='center'>
        <Signature /> 
          <FadeIn delay={500} duration={2000}>
            <Segment raised>
              <Grid columns={2} stackable relaxed>
                  <Grid.Column>
                    <Image src={profilePhoto} />
                    <p>This is me ^</p>
                  </Grid.Column>
                  <Grid.Column textAlign='justified'>
                    <p>
                      I'm a tinkerer interested in exploring how software can help
                      enable people!
                      <br />
                      <br />
                      Current interests include photography, cooking, breadbaking,
                      piano, yoga, and film!
                      <br />
                      <br />
                      This site is very much in progress, so please mind the 
                      appearance and watch out for new updates!
                    </p>
                  </Grid.Column>
                </Grid>
            </Segment>
          </FadeIn>
        <Segment basic>
          <FadeUp delay={1500} duration={2000}>
            <Header className='myLink' floated='left' href='https://www.linkedin.com/in/shanetimmerman/' target='_blank' rel='noopener noreferrer' as='a'>
              <Icon name='linkedin' />
              shanetimmerman
            </Header>
          </FadeUp>
          <FadeUp delay={1700} duration={2000}>
            <Header className='myLink' floated='right' href='https://github.com/shanetimmerman' target='_blank' rel='noopener noreferrer' as='a'>
              <Icon name='github square' />
              shanetimmerman
            </Header>
          </FadeUp>
        </Segment>
      </Container>
    </Container>
  );
}

function Background() {
  return <div className='background'>hello</div>

}

export default Home;
