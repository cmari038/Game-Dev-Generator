import React from "react";
//import Genre from "./Genre";
//import Platform from "./Platform";
import { Link } from 'react-router-dom';

//<Link to="/platform"><button>Games To Play</button></Link>

const HomePage = () => {
   return ( 
         
            <div>
                <h1>Welcome to Game Recommendations.</h1>
                <p>This website uses Google AI to creates new ideas for games that developers can design </p>

                <Link to= "/genre">
                    <button>Games To Make</button>
                </Link>

            </div>

    ); 
};

export default HomePage;