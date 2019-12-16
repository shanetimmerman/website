import React from 'react'
import { Container, Image, } from 'semantic-ui-react'

import stutorHome from './assets/stutor_images/stutorhome.png'
import stutorBoard from './assets/stutor_images/stutorboard.png'
import stutorLogin from './assets/stutor_images/stutorlogin.png'
import stutorProfile from './assets/stutor_images/stutorprofile.png'
import stutorRequest from './assets/stutor_images/stutorrequest.png'
import stutorSessions from './assets/stutor_images/stutorsessions.png'





function Stutor() {
  return (
    <Container text>
      <Image src={stutorLogin} />
      <Image src={stutorProfile} />
      <Image src={stutorHome} />
      <Image src={stutorRequest} />
      <Image src={stutorSessions} />
      <Image src={stutorBoard} />
    </Container>
  )
}

export default Stutor
