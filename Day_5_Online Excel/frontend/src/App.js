import logo from './logo.svg';
import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './components/LandingPage'
import Canvas from './components/Canvas';
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route  path='/' element = {<LandingPage/>}></Route>
          </Routes>

          <Routes>
            <Route  path='/canvas' element = {<Canvas/>}></Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>

    </div>
  );
}

export default App;
