import React from 'react'
import { Container, Image, Header } from 'semantic-ui-react'

import stutorHome from './assets/stutor_images/stutorhome.png'
import stutorBoard from './assets/stutor_images/stutorboard.png'
import stutorLogin from './assets/stutor_images/stutorlogin.png'
import stutorProfile from './assets/stutor_images/stutorprofile.png'
import stutorRequest from './assets/stutor_images/stutorrequest.png'
import stutorSessions from './assets/stutor_images/stutorsessions.png'


function Stutor() {
  return (
    <Container text>
      <Header as='h2'>Overview</Header>
      <p>
        Studor was created by Raquel, Joe, and I from one of Joe's business friend's request. The idea was simple: create a webapp allowing for online interactive tutoring. The project was developed using React, the Phoenix framework, and Bootstrap. We decided to make the app a single page application as well, and used ajax for all our requests.
      </p>
      <Header as='h2'>Basic Flow</Header>
      <p>
        Initially, users are presented with a login screen. They can create an account here as either a student or a tutor. Fundamenetally, students can look for and schedule sessions with tutors, and tutors can post availabilty and host sessions.
      </p>
      <Image src={stutorLogin} />
      <p>
        There is also paypal integration, so tutors can actually get paid for their work, and set rates for their sessions.
      </p>
      <Image src={stutorProfile} />
      <p>
        All available sessions are listed. Students can drill down based on subject, college, course, and popularity. All listings have some information about the tutor, including reviews, to help the student find the best tutor for their needs.
      </p>
      <Image src={stutorHome} />
      <p>
        After picking a tutor, students can then request a session, and provide any more information to the tutor. For instance, what topic they are struggling with and want to spend the session on. Tutors are notified of session requests, and can approve or deny them.
      </p>
      <Image src={stutorRequest} />
      <p>
        Approved sessions show up in the user's session list.
      </p>
      <Image src={stutorSessions} />
      <p>
        Once a session begins, the tutor and student will gain access to the tutoring space. Here, they will find a virtual whiteboard they can both interact with, along with at chat box and optional voice chat to help improve the session.
      </p>
      <Image src={stutorBoard} />
    </Container>
  )
}

export default Stutor
