import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './components/login'; 
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import Privacy from './components/Privacy';
import FAQ from './components/Faq';
import Projects from './components/Projects';
import TeamMembers from './components/TeamMembers';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Signup/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/homepage" element={<HomePage/>}></Route>
          <Route path="/Privacy" element={<Privacy/>}></Route>
          <Route path="/Faq" element={<FAQ/>}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
          <Route path="/teammembers" element={<TeamMembers/>}></Route>
          <Route path="/task" element={<Task/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
