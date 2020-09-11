import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { Container, List, Table, Header, Image, Segment, Grid, Icon } from 'semantic-ui-react'
import _ from 'lodash'

import netflixRecommendations from './data/netflix_recomendations.json'
import aprioriPruningImage from './assets/apriori_pruning_images/pruning_tree.png'
import workFlowImage from './assets/apriori_pruning_images/diagram.png'

import MOVIE_COVERS from './assets/movies/movie_covers'

import 'pure-react-carousel/dist/react-carousel.es.css';

function FrequencyItemset() {
  const recs = _.sampleSize(netflixRecommendations, 150)

  
  return (
    <Container text>
      <p>
        Early youtube utilized frequent itemset mining as a method for recommending videos. While they have advanced their algorithm significantly, we wanted to replicate this system with the 2009 netflix movie dataset.
      </p>
      <Segment raised>
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={recs.length}
        interval={2500}
        isPlaying={true}
        infinite={true}
        visibleSlides={3}
        orientation='vertical'
        >
          <Grid textAlign='center'>
            <Grid.Column width={8}>
              <h3>If you've seen:</h3>
            </Grid.Column>
            <Grid.Column width={2}/>
            <Grid.Column width={6}>
              <h3>We recommend:</h3>
            </Grid.Column>
          </Grid>
          <Slider>
            { recs.map((rec, index) => {
              let key = `${rec.rec.title}${rec.seen.map(movie => movie.title).join(',')}`
              return (
              <Slide key={`div${key}`} index={index}>
                <Grid verticalAlign='middle' >
                  <Grid.Column width={8}>
                    <div style={{
                      display: 'flex', 
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                      { rec.seen.map(movie => (
                        <Image src={MOVIE_COVERS[movie.title]} size='tiny'/>
                      )) }
                    </div>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Segment basic textAlign='center' >
                      <Icon name='arrow right' size='huge' />
                      <p>{(rec.prob * 100).toFixed(2)}%</p>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={4} style={{alignContent: 'center'}}>
                    <Image src={MOVIE_COVERS[rec.rec.title]} size='tiny'  style={{alignContent: 'center'}}/>
                  </Grid.Column>
                </Grid>
              </Slide>
              )
            })
          }
          </Slider>
        </CarouselProvider>
      </Segment>
      <p>
        The application was run over 5 iterations with a support threshold of 15%, meaning that if a review pattern was not supported by 15% of the total population, it would be pruned. For instance, if only 12% of individuals had reviewed both the movies Shrek and Saving Private Ryan, we would not analyse potential suggestions based on those 2 movies.
      </p>
      
      <Header as='h2'>Apriori Pruning</Header>
      <p>
        Apriori pruning is a two step process that is used to reduce the size of the dataset to prevent factorial growth of large datasets. The first step is to generate (k+1) size itemsets (in this case, movies) from the size (k) itemsets. The, the support, or number users who have watched all movies in the itemset, is calculated. If the number of users is above the defined threshold, then the association rule for that itemset are calculated and that itemset can be used to generate the next iteration itemsets.
      </p>
      <Image src={aprioriPruningImage} />
      <p>
        Each layer of the tree corresponds to a mapreduce job in our implmenentation. The algorithm terminates once there are 1 or 0 supported itemsets left. So, in the diagram above, there would be 4 iterations. Pruning from the itemset (k) has a cascading effect to all subsequent itemsets. No children of a pruned node can be generated.
      </p>
      <p>
        We translated this algorithm into a MapReduce implementation using the following approach:
      </p>
      <Image src={workFlowImage} />
      <p>
        The workflow can be broken up into 4 distinct tasks:
      </p>
      <List ordered>
        <List.Item>
          <b>Compute unique user count</b>. Since we decided to do a percetage based support threshold, we needed the total use count is determine the support for any given itemset.
        </List.Item>
        <List.Item>
          <b>Generate size 1 frequent itemset along with their probabilities</b>. The original dataset comes in the format of:
          <Segment>
            1:<br/>
            2000,5,2019<br/>
            2000,5,2019<br/>
              . . .<br/>
            <br/>
            2:<br/>
            2000,5,2019<br/>
            2000,5,2019<br/>              
          </Segment>
          This format is unwieldy for mapreduce, so this task also transformed the data into the format
          <Segment>
            1 (1,23,60,80)<br/>
            2 (1,23,60,80)<br/>
              . . .
          </Segment>
          makes the theta joins required to compute support of future itemsets much easier.
        </List.Item>
        <List.Item>
          <b>Generate size (k+1) candidate itemset</b>. A self theta join of size (k) frequent itemsets under the join condition: |set<sub>1</sub>&cup;set<sub>2</sub>|=iterationNumber.<br/>
          Essentially, this tests that the union of the two sets only differ by 1 element.
        </List.Item>
        <List.Item>
          <b>Generate size (k+1) candidate itemset</b>. A self theta join of size (k) frequent itemsets under the join condition: |set<sub>1</sub>&cup;set<sub>2</sub>|=iterationNumber.<br/>
          Essentially, this tests that the union of the two sets only differ by 1 element.
        </List.Item>
        <List.Item>
          Generate size k frequent itemset by pruning size k candidate itemset
          Generate conditional probabilities of the frequent itemset
        </List.Item>
      </List>
      <p>The performance of our implmentation was tested for speed up, which measures how well the appraoch parallelizes across more machines, scalability of the users, scalability of the movies, and scalability of the threshold</p>
      <Header as='h3'>SpeedUp</Header>
      <p>This experiment was performed on m4.large machines using the full dataset (all 20k movies and 480k user. A support threshold of 0.15 was chosen, as any more lenient proved to have a prohibitively large runtime for this project.)</p>
      <ResultsTable 
        header={['Machine Count', 'Run Time (Min)']}
        entries={[[5, 144],[10, 89]]}
      />
      <p>
        Doubling the machine count lead to a nearly 38% reduction in runtime. This is likely caused by the reduction of the initial theta join between users and unpruned itemsets.
      </p>
      <p>
        All subsequent experiments were ran on 5 m4.large machines, and only use a subset of the data to test the effects of each parameter in the experiment</p>
      <Header as='h3'>Scalability of Movies</Header>
      <p>
        The support cutoff for this experiment was 0.15 and only a subset of 20,000 users were used.
      </p>
      <ResultsTable 
        header={['Movie Count', 'Run Time (Min)']}
        entries={[['10,000', 10],['20,000', 15]]}
      />
      <Header as='h3'>Scalability of Users</Header>
      <p>
        The support cutoff for this experiment was 0.10 and only a subset of 10,000 movies were used.
      </p>
      <ResultsTable 
        header={['User Count', 'Run Time (Min)']}
        entries={[['20,000', 18],['40,000', 20]]}
      />
      <Header as='h3'>Effect of the Threshold</Header>
      <p>
        Only a subset of 20,000 users and 10,000 movies were used.
      </p>
      <ResultsTable 
        header={['Threshold Cutoff', 'Run Time (Min)']}
        entries={[['0.10', 10],['0.15', 18]]}
      />
    </Container>
    
  )
}

function ResultsTable(props) {
  let {header, entries} = props
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          { header.map(headerCell => <Table.HeaderCell key={headerCell}>{headerCell}</Table.HeaderCell>)}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        { entries.map((row, rowIndex) => (
          <Table.Row key={`tablerow${rowIndex}`}>
            { row.map((cell, cellIndex) => (
              <Table.Cell key={`tablerow${rowIndex}col${cellIndex}`}>{cell}</Table.Cell>
              ))
            }
          </Table.Row>
          )
        )}
      </Table.Body>
    </Table>
  )
}

export default FrequencyItemset
