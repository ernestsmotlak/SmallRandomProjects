import './App.css';
import Urnik from './Projects/Urnik';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useState } from 'react';
import MainRouter from './MainRouter';

function App() {


  return (
    <BrowserRouter >
      <div className="App">
        <Routes>
          <Route path='/' element={<MainRouter />} />
          <Route path='/TimetableClean' element={<Urnik />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
