import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Genre from './Genre';
import HomePage from './HomePage';
//import { Response } from './Response';
//  <Route path="/response" element = {<Response/>}/>

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element = {<HomePage />} />
          <Route path="/genre" element = {<Genre/>}/>
        </Routes>
      </Router>
    </div>
  ); 

/*  return (
    <HomePage />
  ); */
}

export default App;
