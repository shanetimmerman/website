import React from 'react';
import { Container, Grid, Image, Icon } from 'semantic-ui-react';

import profilePhoto from './assets/thats me.jpg'

import PageContainer from '../components/page_container'

const Home = () => (
  <PageContainer fluid style={{ paddingBottom: 0 }}>
    <Container className='homeContainer' textAlign='center'>
      <Grid columns={2} stackable relaxed>
          <Grid.Column>
            <Image src={profilePhoto} size='large'/>
            <p>This is me ^</p>
          </Grid.Column>
          <Grid.Column textAlign='justified'>
            <h2 className='epilogueLight'> Hey there friend</h2>
            <p>
              My name is Shane Timmerman. I work for Twitter.com building 
              out the {' '}
              <a className='myLink' href='https://developer.twitter.com/en' target='_blank' rel='noopener noreferrer'>
                <p class='myLinkText'>developer portal</p>
              </a>!
              I'm interested in exploring how 
              software can help enable people. Whether it be increasing 
              access to healthcare information, allowing people to digest 
              data more efficiently, or really just being able to so 
              anything they otherwise couldn't.
              <br />
              <br />
              I am a hot beverage enthusiast, amatuer breadbaker, 
              and resident of beautiful San Francisco California.
              <br />
              <br />
              You can also find me on any of the places here: 
            </p>
            <div className='homeLinkMargin'>
              <a className='myLink' href='https://twitter.com/merman_tim' target='_blank' rel='noopener noreferrer'>
                <Icon name='twitter square' size='large'  />
                <p className='myLinkText'>
                  twitter
                </p>
              </a>
            </div> 
            <div className='homeLinkMargin'>
              <a className='myLink' href='https://www.linkedin.com/in/shanetimmerman/' target='_blank' rel='noopener noreferrer'>
                <Icon name='linkedin' size='large'  />
                <p className='myLinkText'>
                  linkedin
                </p>
              </a>
            </div>
            <div className='homeLinkMargin'>
              <a className='myLink' href='https://github.com/shanetimmerman' target='_blank' rel='noopener noreferrer'>
                <Icon name='github square' size='large' />
                <p className='myLinkText'>
                  github
                </p>
              </a>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
  </PageContainer>
);

export default Home;
