import React from 'react';
import Anime from 'react-anime'
import animejs from 'animejs'

function FadeUpList({children, delay=0, stagger=200, duration=800, distance=100}) {
  return (
    <Anime
      className='animation'
      opacity={[0, 1]}
      duration={duration}
      delay={animejs.stagger(stagger)}
      translateY={[distance, 0]}
      easing='easeInOutQuad'
    >
      {children}
    </Anime>
  );
}


export default FadeUpList;
