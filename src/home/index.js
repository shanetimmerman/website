import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Header, Grid, Image, List, Segment, Icon } from 'semantic-ui-react';

import profilePhoto from './assets/profile_photo.jpeg'

function Home() {
  return (
    <Container text textAlign='center'>
      <Header as='h1'>Hello There!</Header>
      <Segment raised>
        <Grid columns={2} relaxed>
            <Grid.Column>
              <Image src={profilePhoto} />
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
            <Grid.Column>
              <p>
                Who is Shane? Why did he make this website?
                Great questions.
              </p>
              <p>
                Wanna see my qualifications? Weird but ok. Check it out 
                <Link to="/resume">here</Link>
              </p>
              <p>
                You mahy be asking yourself: can this kid even code? Well:
                <List ordered>
                  <List.Item>
                    I have a website so I at least can do some basic HTML.
                  </List.Item>
                  <List.Item>
                    This website is in React because I actually don't know HTML so 
                    this is easier.
                  </List.Item>
                  <List.Item>
                    Yes! Don't believe me? We trust is important, but you can also 
                    check out some things I've done 
                    <Link to="/projects">here</Link>
                  </List.Item>
                </List> 
              </p>
              <p>
                I also take pictures! If you wanna check them out, you can find them <Link to="/pics">here</Link>
              </p>
            </Grid.Column>
          </Grid>
      </Segment>
    </Container>
  );
}

export default Home;
