import React from 'react';
import logo from './logo.svg';
import { Intro } from './components/HeadingPage/intro';
import { AboutMe } from './components/AboutMe/test';
function App() {
  return (
    <div className="App">
      <Intro name='Josue'/>
      <AboutMe aboutMe=''/>
    </div>
  );
}

export default App;
