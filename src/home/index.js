import React from 'react';
import { Container, Header, Grid, Image, Segment, Icon } from 'semantic-ui-react';

import profilePhoto from './assets/profile_photo.jpg'

function Home() {
  return (
    <div className='homeBackground'>
      <Container className='homeContainer' text textAlign='center'>
        <Header as='h1'>Hello There!</Header>
        <Segment raised>
          <Grid columns={2} relaxed>
              <Grid.Column>
                <Image src={profilePhoto} />
                <p>This is me ^</p>
              </Grid.Column>
              <Grid.Column textAlign='justified'>
                <p>
                  I'm a tinkerer interested in exploring how software can enable 
                  people!
                  <br />
                  <br />
                  Current interests include cooking, breadbaking, piano, 
                  photography, yoga, and film!
                  <br />
                  <br />
                  This site is very much in progress, so please mind the 
                  appearance and watch out for new updates!
                </p>
              </Grid.Column>
            </Grid>
        </Segment>
        <Segment basic>
          <Header floated='left' href='https://www.linkedin.com/in/shanetimmerman/' target='_blank' rel='noopener noreferrer' as='a'>
            <Icon name='linkedin' />
            shanetimmerman
          </Header>
          <Header floated='right' href='https://github.com/shanetimmerman' target='_blank' rel='noopener noreferrer' as='a'>
            <Icon name='github square' />
            shanetimmerman
          </Header>
        </Segment>
      </Container>
    </div>
  );
}

export default Home;
