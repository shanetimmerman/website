import React from 'react';
import Anime from 'react-anime'
import animejs from 'animejs'

function FadeUpGrid(props) {
  return (
    <Anime
      className={'animation ' + props.className ? props.className : ''}
      opacity={[0, 1]}
      duration={props.duration ? props.duration : 800}
      delay={animejs.stagger(props.stagger ? props.stagger : 200)}
      translateY={[props.distance ? props.distance: 100, 0]}
      easing='easeInOutQuad'
      {...props}
    />
  );
}


export default FadeUpGrid;
