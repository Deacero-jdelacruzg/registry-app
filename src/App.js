import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Registry from './routes/Registry';
import './App.css';

//C:\Users\jdelacruzg\Desktop\registry-app>npm install rect-router-dom

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/registry' element={<Registry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
