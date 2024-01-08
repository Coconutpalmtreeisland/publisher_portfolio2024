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

  useEffect(() => {
    // 스크롤 막기
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      // 스크롤 허용
      document.body.style.overflow = 'auto';
    }, 6000);  // 6초 후 실행

    // 컴포넌트 unmount 시 타이머를 제거합니다.
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App