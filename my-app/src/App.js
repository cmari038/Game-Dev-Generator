import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Genre from './Genre';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MakeAccount from './MakeAccount';
import Response from './Response';

//axios.defaults.headers.common['x-csrftoken'] = window.csrftoken;

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element = {<LogIn/>} />
          <Route path="/genre" element = {<Genre/>}/>
          <Route path="/response" element = {<Response/>}/>
          <Route path="/home" element = {<HomePage/>}/>
          <Route path="/makeAccount" element = {<MakeAccount/>}/>
        </Routes>
      </Router>
    </div>
  ); 

/*  return (
    <HomePage />
  ); */
}

export default App;
