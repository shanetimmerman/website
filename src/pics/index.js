import React from 'react'

import constructionBear from './assets/construction_bear.png'
import { Image, Header } from 'semantic-ui-react'
import PageContainer from '../components/page_container'

function Pics() {
  return (
    <PageContainer textAlign='center'>
      <Header as='h1'>This page is under construction</Header>
      <Image src={constructionBear} centered />
      <Header as='h1'>Please bear with us</Header>
    </PageContainer>
  )
}

export default Pics