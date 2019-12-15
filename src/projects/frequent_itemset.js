import React from 'react'
import netflixRecommendations from './data/netflix_recomendations.json'
import { Carousel } from "react-responsive-carousel"
import { Item } from 'semantic-ui-react'
import _ from 'lodash'


function FrequencyItemset() {
  let recs = _.sampleSize(netflixRecommendations, 20)
  return (
    <Carousel autoPlay>
      { recs.map(rec => (
        <Item>
          <Item.Content>{rec.prob}</Item.Content>
          <Item.Content>{rec.rec.title}</Item.Content>
        </Item>
      )) }
    </Carousel>
  )
}

export default FrequencyItemset
