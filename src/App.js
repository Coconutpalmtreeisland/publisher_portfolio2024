import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { smooth } from './utils/smooth'
import { headerImg } from './utils/headerImg';
import { line } from './utils/line';
import { fonts } from './utils/fonts';
import { polaroid } from './utils/polaroid';

import HomeView from './views/HomeView';
import { hideHeaderImg } from './utils/hideHeaderImg';

const App = () => {
  useEffect(() => {
    smooth();
    headerImg();
    hideHeaderImg();
    line();
    fonts();
    polaroid();
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App