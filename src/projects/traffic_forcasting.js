import React from 'react'
import { Container, Image, Header, } from 'semantic-ui-react'

import originalFlowImage from './assets/traffic_forcasting/original_flow.png'
import udpatedFlowImage from './assets/traffic_forcasting/updated_flow.png'

function TrafficForcasting() {
  return (
    <Container text>
      <Header>Paper Overview</Header>
      <p>
        The idea behind this project was to improve upon some existing research 
        within the machine learning space. The paper we chose was by Li et al.
        The idea for that paper was to forcast traffic patterns based on current
        conditions from traffic sensors, such as traffic volume and speed. The 
        model represented streets as a as a graph, where each node presented a 
        sensor, and the edges were the road between them. The model took prior 
        traffic data, and fed it though a diffuse convolutional neural network, 
        to create a decoder, which would then be used to predict traffic at 
        future points in time.
      </p>
      <Image src={originalFlowImage} />
      <Header>Our Modifications</Header>
      <p>
        While this approach was very good at predicting traffic at 15 and 30 
        minutes ahead, it struggled at 1 to 2 hour ahead prediction. Our project 
        aimed to see if the inclusion of additional data could be used to 
        improve this future accuracy, and allow the model to respond to more 
        non-static traffic events. Theoretically, in times of rapid weather shift,
        one might see a predictable change in traffic. For instance, sudden 
        onsets of rain might cause individuals to drive at a reduced speed. 
        Weather is also a good candiate to test with as it relatively slow to 
        change: that is, we are more likely to see changes in traffic due to 
        weather on the scale of hours, rather than minutes. 
      </p>
      <Image src={udpatedFlowImage} />
      <p>
        We modified the existing pytorch model to be able to take in temporal 
        weather data in parallel with the traffic data. This included information
        on wind speed, cloud coverage, precipitation, humidity, etc. We also 
        modified the decoder to recieve weather predictions, which could then be 
        used to make better traffic predictions.
      </p>
      <Header>Results</Header>
      <p>
        Unfortunately, since this was for a 1-credit seminar, we were unable to 
        complete and test our model in time. 
      </p>
      <Header>Slide Deck</Header>
      <Container 
        style={{
          position: 'relative',
          width:'100%',
          paddingTop: '60%',
          overflow: 'hidden'
        }}
      >
        <iframe 
          src="https://docs.google.com/presentation/d/e/2PACX-1vRMgsJrDDTTUtI28F5DU70Vjb3Q9E6VDQnlw3VH8d4pvTh2a898VT7S96KguV-l1gv-D5xQjxnny_uw/embed?start=false&loop=false&delayms=15000" 
          frameborder="0" 
          title='traffic_slide_deck'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" />
      </Container>
    </Container>
  )
}

export default TrafficForcasting
