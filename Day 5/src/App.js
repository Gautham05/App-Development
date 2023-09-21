import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './login'; 
import Signup from './Signup'; 

function App() {
  return (
    <div className="App">
      <title>Tickets New</title>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
