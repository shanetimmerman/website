import React, {} from 'react';
import animejs from 'animejs';
import { Container } from 'semantic-ui-react';

class Signature extends React.Component {
  componentDidMount = () => {
    animejs({
      targets: '.signature',
      strokeDashoffset: [animejs.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 1500,
    });
    animejs({
      targets: '.fill',
      delay: 1500,
      fill: ['#eff0f1', '#000000'],
      easing: 'easeInOutQuad',
      duration: 1500
    })
  }

  render = () =>  (
    <p className='epilogueBlack myName'>SHANE TIMMERMAN</p>
    // <svg className='animation' width="472.095" height="56.876" viewBox="0 0 472.095 56.876" xmlns="http://www.w3.org/2000/svg">
    //   <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="none" style={{ stroke:'#000', strokeWidth: '0.25mm', fill: 'none' }}>
    //   <path className='signature fill' d="M 0 40.95 L 0 35.49 L 10.985 35.49 L 10.985 42.445 Q 10.985 45.341 12.277 46.221 A 2.381 2.381 0 0 0 13.65 46.605 Q 14.551 46.605 15.122 46.287 A 1.738 1.738 0 0 0 15.73 45.728 A 2.654 2.654 0 0 0 16.036 45.072 Q 16.315 44.209 16.315 42.77 A 18.974 18.974 0 0 0 16.231 40.93 Q 16.082 39.398 15.665 38.253 A 11.512 11.512 0 0 0 14.952 36.659 A 8.574 8.574 0 0 0 14.008 35.263 A 21.128 21.128 0 0 0 13.405 34.578 Q 12.462 33.548 10.802 31.918 A 156.157 156.157 0 0 0 10.4 31.525 L 5.59 26.715 Q 0 21.255 0 14.625 A 24.919 24.919 0 0 1 0.321 10.49 Q 0.694 8.276 1.502 6.514 A 11.336 11.336 0 0 1 3.283 3.738 A 10.545 10.545 0 0 1 8.729 0.483 Q 10.605 0 12.87 0 A 22.463 22.463 0 0 1 16.777 0.317 Q 21.343 1.125 23.725 3.998 A 12.2 12.2 0 0 1 25.778 7.721 Q 27.04 11.255 27.04 16.51 L 15.665 16.51 L 15.6 12.675 Q 15.6 11.57 14.983 10.92 A 2.024 2.024 0 0 0 13.935 10.341 A 3.052 3.052 0 0 0 13.26 10.27 A 3.756 3.756 0 0 0 12.511 10.34 Q 12.075 10.429 11.742 10.631 A 1.933 1.933 0 0 0 11.31 10.985 A 2.395 2.395 0 0 0 10.768 12.018 Q 10.66 12.434 10.66 12.935 A 5.525 5.525 0 0 0 11.252 15.351 Q 11.66 16.195 12.348 17.056 A 14.653 14.653 0 0 0 13.78 18.59 L 20.28 24.83 A 45.458 45.458 0 0 1 22.122 26.721 Q 23.21 27.908 24.05 29.023 Q 25.545 31.005 26.455 33.703 A 16.278 16.278 0 0 1 27.109 36.453 Q 27.365 38.137 27.365 40.105 A 36.223 36.223 0 0 1 27.099 44.655 Q 26.808 46.945 26.2 48.816 A 13.997 13.997 0 0 1 24.343 52.618 A 9.516 9.516 0 0 1 19.199 56.226 Q 17.082 56.875 14.365 56.875 A 24.248 24.248 0 0 1 10.422 56.577 Q 8.332 56.232 6.69 55.487 A 9.835 9.835 0 0 1 3.38 53.105 Q 0.13 49.48 0.005 41.588 A 40.301 40.301 0 0 1 0 40.95 Z" id="0" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 42.185 56.355 L 31.07 56.355 L 31.07 0.52 L 42.185 0.52 L 42.185 20.475 L 47.45 20.475 L 47.45 0.52 L 58.565 0.52 L 58.565 56.355 L 47.45 56.355 L 47.45 31.005 L 42.185 31.005 L 42.185 56.355 Z" id="1" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 72.865 56.355 L 62.01 56.355 L 67.405 0.52 L 86.32 0.52 L 91.65 56.355 L 81.055 56.355 L 80.275 47.32 L 73.515 47.32 L 72.865 56.355 Z M 76.44 10.01 L 74.36 38.415 L 79.43 38.415 L 76.96 10.01 L 76.44 10.01 Z" id="2" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 105.95 56.355 L 95.03 56.355 L 95.03 0.52 L 106.535 0.52 L 111.67 27.235 L 111.67 0.52 L 122.46 0.52 L 122.46 56.355 L 111.54 56.355 L 105.95 28.405 L 105.95 56.355 Z" id="3" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 150.475 56.355 L 127.4 56.355 L 127.4 0.52 L 149.76 0.52 L 149.76 11.31 L 138.775 11.31 L 138.775 22.165 L 149.305 22.165 L 149.305 32.695 L 138.775 32.695 L 138.775 45.5 L 150.475 45.5 L 150.475 56.355 Z" id="4" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 185.38 56.355 L 174.2 56.355 L 174.2 11.245 L 167.57 11.245 L 167.57 0.52 L 192.01 0.52 L 192.01 11.245 L 185.38 11.245 L 185.38 56.355 Z" id="6" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 205.4 56.355 L 194.61 56.355 L 194.61 0.52 L 205.4 0.52 L 205.4 56.355 Z" id="7" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 219.96 56.355 L 209.885 56.355 L 209.885 0.52 L 226.915 0.52 L 231.595 34.58 L 236.275 0.52 L 253.435 0.52 L 253.435 56.355 L 243.23 56.355 L 243.23 16.12 L 236.795 56.355 L 226.785 56.355 L 219.96 16.12 L 219.96 56.355 Z" id="8" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 268.45 56.355 L 258.375 56.355 L 258.375 0.52 L 275.405 0.52 L 280.085 34.58 L 284.765 0.52 L 301.925 0.52 L 301.925 56.355 L 291.72 56.355 L 291.72 16.12 L 285.285 56.355 L 275.275 56.355 L 268.45 16.12 L 268.45 56.355 Z" id="9" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 329.94 56.355 L 306.865 56.355 L 306.865 0.52 L 329.225 0.52 L 329.225 11.31 L 318.24 11.31 L 318.24 22.165 L 328.77 22.165 L 328.77 32.695 L 318.24 32.695 L 318.24 45.5 L 329.94 45.5 L 329.94 56.355 Z" id="10" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 333.645 56.355 L 333.645 0.52 L 350.805 0.52 A 14.549 14.549 0 0 1 353.266 0.715 Q 354.594 0.944 355.655 1.44 A 6.937 6.937 0 0 1 357.143 2.373 A 8.478 8.478 0 0 1 359.535 5.627 A 11.586 11.586 0 0 1 360.165 7.573 A 25.815 25.815 0 0 1 360.633 10.281 Q 360.945 12.83 360.945 16.12 A 29.534 29.534 0 0 1 360.825 18.883 Q 360.56 21.698 359.71 23.53 A 6.776 6.776 0 0 1 356.089 26.979 A 9.219 9.219 0 0 1 355.42 27.235 Q 357.955 27.755 359.093 29.77 Q 359.934 31.261 360.153 33.535 A 17.717 17.717 0 0 1 360.23 35.23 L 360.1 56.355 L 349.18 56.355 L 349.18 34.515 A 9.421 9.421 0 0 0 349.137 33.573 Q 349.037 32.585 348.709 32.022 A 1.569 1.569 0 0 0 348.27 31.525 Q 347.537 31.001 345.83 30.9 A 14.781 14.781 0 0 0 344.955 30.875 L 344.955 56.355 L 333.645 56.355 Z M 345.02 21.19 L 347.685 21.19 A 1.806 1.806 0 0 0 349.336 20.131 Q 349.83 19.23 349.97 17.56 A 17.299 17.299 0 0 0 350.025 16.12 A 41.24 41.24 0 0 0 350.013 15.085 Q 349.986 13.988 349.895 13.247 A 8.397 8.397 0 0 0 349.83 12.805 A 4.548 4.548 0 0 0 349.697 12.245 Q 349.511 11.648 349.187 11.341 A 1.26 1.26 0 0 0 349.115 11.278 A 1.703 1.703 0 0 0 348.552 10.982 Q 348.305 10.904 348.006 10.874 A 3.89 3.89 0 0 0 347.62 10.855 L 345.02 10.855 L 345.02 21.19 Z" id="11" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 374.725 56.355 L 364.65 56.355 L 364.65 0.52 L 381.68 0.52 L 386.36 34.58 L 391.04 0.52 L 408.2 0.52 L 408.2 56.355 L 397.995 56.355 L 397.995 16.12 L 391.56 56.355 L 381.55 56.355 L 374.725 16.12 L 374.725 56.355 Z" id="12" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 422.5 56.355 L 411.645 56.355 L 417.04 0.52 L 435.955 0.52 L 441.285 56.355 L 430.69 56.355 L 429.91 47.32 L 423.15 47.32 L 422.5 56.355 Z M 426.075 10.01 L 423.995 38.415 L 429.065 38.415 L 426.595 10.01 L 426.075 10.01 Z" id="13" vectorEffect="nonScalingStroke"/>
    //   <path className='signature fill' d="M 455.585 56.355 L 444.665 56.355 L 444.665 0.52 L 456.17 0.52 L 461.305 27.235 L 461.305 0.52 L 472.095 0.52 L 472.095 56.355 L 461.175 56.355 L 455.585 28.405 L 455.585 56.355 Z" id="14" vectorEffect="nonScalingStroke"/>
    //   </g>
    // </svg>
  )
}

export default Signature;