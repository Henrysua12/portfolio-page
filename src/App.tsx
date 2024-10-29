import React from 'react';
import logo from './logo.svg';
import { Intro } from './components/HeadingPage/intro';
import { AboutMe } from './components/AboutMe/test';
import { Projects } from './components/ProjectsPage/project';
import { Contact } from './components/ContactMe/contact';
function App() {
  return (
    <div className="App">
      <Intro name='Josue'/>
      <AboutMe aboutMe=''/>
      <Projects projects='' />
      <Contact contact='' />
    </div>
  );
}

export default App;
