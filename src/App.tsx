import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import TrailerComponent from './components/trailer/trailer';
import { Button } from './components/buttons/button';
import Nav from './layouts/nav/nav';

import TrailerContext from './components/trailer/trailerContext';


function App() {
  
  return (
    
    <div className="App">
      
      {/* <div id='#trailer' ref={trailer}></div> */}
      <section>
        {/* <Nav /> */}
      </section>
      <section>
        {/* <Home /> */}
        <Projects />
      </section>

    </div>
    
  );
}

export default App;
