import React from 'react';
import '../App.css';
import Jobs from './jobs.js'
import Skills from './skills.js'
import Education from './education.js'
import CourseWork from './coursework.js'

function Resume() {
  return (
    <div className="App">
      <header className="App-header">
        <Jobs />
        <Skills />
        <Education />
        <CourseWork />

      </header>
    </div>
  );
}

export default Resume;
