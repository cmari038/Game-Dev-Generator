import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Genre from './Genre';

function Platform() {
   const [buttonClick, setClick] = useState(false) 
   const Click = () => {
        setClick(!buttonClick);
   };

   return (
    <Router>
        <div>
            <h1>
                Choose your Platform
            </h1>
            
            <button onClick={Click}>
                Playstation
            </button>

            <button onClick={Click}>
                PC
            </button>

            <button onClick={Click}>
                Xbox
            </button>

            <button onClick={Click}>
                Nintendo Switch
            </button>

            <button onClick={Click}>
                Mobile
            </button>

            <Link to='/genre'>   
                <button onClick={Click}>
                    Submit
                </button>
            </Link>

            <Route path="/genre" exact component = {Genre}/>

        </div>
    </Router>
   );
};

export default Platform;