import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Who is Shane? Why did he make this website?
          Great questions.
          <br/>
          I'm a tinkerer interested in exploring how software can enable human
          activities!
          Mainly I'm interested in music, film, biology, and the hiddent stories
          in everyday life.
          Did you know there are community driven cat infrastructure in 
          Switzerland? That's incredible.
        </p>
        <p>
          Wanna see my qualifications? Weird but ok. Check it out 
          <Link to="/resume">here</Link>
        </p>
        <p>
          You mahy be asking yourself: can this kid even code? Well 
          (1) I have a website so I at least can do some basic HTML.
          (2) This website is in React because I actually don't know HTML so 
          this is easier.
          (3) Yes! Don't believe me? We trust is important, but you can also 
          check out some things I've done <Link to="/projects">here</Link></p>
      </header>
    </div>
  );
}

export default Home;
