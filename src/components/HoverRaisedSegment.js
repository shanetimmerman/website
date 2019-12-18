import React, { useState } from 'react'

import { Segment } from 'semantic-ui-react'

function HoverRaisedSegment(props) {
  let [hover, setHover] = useState(false)
  let mouseEntered = () => setHover(true)
  let mouseLeft = ()=> setHover(false)
  return (
    <Segment raised={hover} onMouseEnter={mouseEntered} onMouseLeave={mouseLeft} {...props} />
  )
}

export default HoverRaisedSegment