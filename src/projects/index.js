import React from 'react';
import logo from '../assets/logo.svg';

function Projects() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You made it!
        </p>
        <p>Wanna see my qualifications? Weird but ok. Check it out <a href="resume">here</a></p>
      </header>
    </div>
  );
}

export default Projects;
