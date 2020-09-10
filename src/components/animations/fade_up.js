import React from 'react';
import Anime from 'react-anime'

function FadeUp({children, delay=0, duration=800, distance=100}) {
  return (
    <Anime
      className='animation'
      opacity={[0, 1]}
      duration={duration}
      delay={delay}
      translateY={[distance, 0]}
      easing='easeInOutQuad'
    >
      {children}
    </Anime>
  );
}


export default FadeUp;
