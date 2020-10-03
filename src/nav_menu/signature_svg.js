import React, {} from 'react';
import animejs from 'animejs';
import { Link } from 'react-router-dom'
import {ReactComponent as SignatureSVG} from './adobe-test.svg';

class Signature extends React.Component {
  componentDidMount = () => {
    animejs({
      targets: '.cls-1',
      strokeDashoffset: [animejs.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: animejs.stagger(100, { start: 300 }),
    });
    animejs({
      targets: '.cls-2',
      strokeDashoffset: [animejs.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: animejs.stagger(100, { start: 1200 }),
    })
  }

  render = () =>  (
    <Link to='/'>
      <SignatureSVG />
    </Link>
  )
}

export default Signature;
