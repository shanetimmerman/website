import React from 'react';
import { Container, Header, Grid, Image, Segment, Icon } from 'semantic-ui-react';

import profilePhoto from './assets/profile_photo.jpeg'
import Background from './assets/background.gif'

function Home() {
  return (
    <div className='homeBackground'>
      <Container className='homeContainer' text textAlign='center'>
        <Header as='h1' color='inverted grey'>Hello There!</Header>
        <Segment raised>
          <Grid columns={2} relaxed>
              <Grid.Column>
                <Image src={profilePhoto} />
                <p>This is me ^</p>
              </Grid.Column>
              <Grid.Column textAlign='justified'>
                <p>
                  I'm a tinkerer interested in exploring how software can enable 
                  human activities!
                  <br />
                  <br />
                  Mainly I'm interested in music, film, photography and cellular 
                  and moleculuar biology!
                  <br />
                  <br />
                  This site is very much a work in progress, so please mind our 
                  appearnace and watch out for new updates!
                </p>
              </Grid.Column>
            </Grid>
        </Segment>
        <Segment basic>
          <Header floated='left' color='inverted grey' href='https://www.linkedin.com/in/shanetimmerman/' target='_blank' rel='noopener noreferrer' as='a'>
            <Icon name='linkedin' />
            shanetimmerman
          </Header>
          <Header floated='right' color='inverted grey' href='https://github.com/shanetimmerman' target='_blank' rel='noopener noreferrer' as='a'>
            <Icon name='github square' />
            shanetimmerman
          </Header>
        </Segment>
      </Container>
    </div>
  );
}

export default Home;
