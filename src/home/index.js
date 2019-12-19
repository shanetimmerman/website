import React from 'react';
import { Container, Header, Grid, Image, Segment, Icon } from 'semantic-ui-react';

import profilePhoto from './assets/profile_photo.jpeg'

function Home() {
  return (
    <Container text textAlign='center'>
      <Header as='h1'>Hello There!</Header>
      <Segment raised>
        <Grid columns={2} relaxed>
            <Grid.Column>
              <Image src={profilePhoto} />
              <p>This is me ^</p>
            </Grid.Column>
            <Grid.Column>
              <p>
                I'm a tinkerer interested in exploring how software can enable human
                activities!
                <br />
                Mainly I'm interested in music, film, photography and moleculuar 
                and cellular biology!
              </p>
              <Header>
                <Header.Content href='https://www.linkedin.com/in/shanetimmerman/' target='_blank' rel='noopener noreferrer' as='a'>
                  <Icon name='linkedin' />
                  shanetimmerman
                </Header.Content>
                <Header.Content href='https://github.com/shanetimmerman' target='_blank' rel='noopener noreferrer' as='a'>
                  <Icon name='github square' />
                  shanetimmerman
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid>
      </Segment>
    </Container>
  );
}

export default Home;
