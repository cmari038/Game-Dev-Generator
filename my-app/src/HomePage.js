import React from "react";
//import Genre from "./Genre";
//import Platform from "./Platform";
import { Link } from 'react-router-dom';

//<Link to="/platform"><button>Games To Play</button></Link>

const HomePage = () => {
   return ( 
         
            <div>
                <h1 style={{textAlign: "center"}}>Welcome to Game Dev Generator</h1>
                <p> This website uses Google's Gemini AI to creates new ideas for games that developers can design </p>

                <Link to= "/genre">
                    <button>Games To Make</button>
                </Link>

                <Link to= "/savedGames">
                    <button>Saved Games</button>
                </Link>

            </div>

    ); 
};

export default HomePage;