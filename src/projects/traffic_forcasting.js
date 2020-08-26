import React from 'react'
import { Container, Image, } from 'semantic-ui-react'

import originalFlowImage from './assets/traffic_forcasting/original_flow.png'
import udpatedFlowImage from './assets/traffic_forcasting/updated_flow.png'

function TrafficForcasting() {
  return (
    <Container text>
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
      <p>
        While this approach was very good at predicting traffic at 15 and 30 
        minutes ahead, it struggled at 1 to 2 hour ahead prediction. Our project 
        aimed to see if the inclusion of additional data could be used to 
        improve this future accuracy, and allow the model to predict what is 
        otherwise a non-
      </p>
      <Image src={udpatedFlowImage} />
    </Container>
  )
}

export default TrafficForcasting
