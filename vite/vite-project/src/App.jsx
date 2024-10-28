import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Header from './pages/home/Header';
import Content from './pages/home/Content';
import Footer from './pages/home/Footer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/header' element={<Header />} />
        <Route path ='/content' element={<Content/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
