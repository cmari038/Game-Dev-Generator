import React from "react";
//import Genre from "./Genre";
//import Platform from "./Platform";
import { Link } from 'react-router-dom';

const HomePage = () => {
   return ( 
         
            <div style={{textAlign: "center"}}>
                <h1 style={{textAlign: "center"}}>Welcome to Game Dev Generator</h1>
                <p> This website uses Google's Gemini AI to creates new ideas for games that developers can design </p>

                <br></br>
               

                <Link to= "/genre">
                    <button>Generate a Game</button>
                </Link>

                <br></br>
                <br></br>

                <Link to= "/savedGames">
                    <button>Saved Games</button>
                </Link>

            </div>

    ); 
};

export default HomePage;