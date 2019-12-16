import React from 'react'
import { Container, Image, } from 'semantic-ui-react'

import originalFlowImage from './assets/traffic_forcasting/original_flow.png'
import udpatedFlowImage from './assets/traffic_forcasting/updated_flow.png'

function TrafficForcasting() {
  return (
    <Container text>
      <Image src={originalFlowImage} />
      <Image src={udpatedFlowImage} />
    </Container>
  )
}

export default TrafficForcasting
