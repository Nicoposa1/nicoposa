import React from 'react';

import {BrowserRouter} from 'react-router-dom'


import Navbar from './components/Navbar/index'
import Home from './components/Home/index'
import Description from './components/Description/index'
import Skills from './components/Skills/index'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Description />
      <Skills />
    </BrowserRouter>
  );
}

export default App;
