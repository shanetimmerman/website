import React from 'react';
import Anime from 'react-anime'

function FadeIn({children, delay, duration=800}) {
  return (
    <Anime 
      className='animation'
      opacity={[0, 1]}
      duration={duration}
      delay={delay}
      easing='easeInOutQuad'
    >
      {children}
    </Anime>
  );
}


export default FadeIn;
