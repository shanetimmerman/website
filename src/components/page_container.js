import React from "react";
import { Container } from 'semantic-ui-react'
import ScrollToTop from './scroll_to_top'

export default function PageContainer(props) {
  return (
    <div>
      <ScrollToTop />
      <Container className='pageContainer' {...props} />
    </div>
  )
}
