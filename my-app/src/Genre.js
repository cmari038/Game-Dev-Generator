import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendData } from './DjangoConnect';

const Genre = () => {
   /*const [buttonClick, setClick] = useState(false) 
   const Click = () => {
        setClick(!buttonClick);
   }; */

 const [genreList, addGenre] = useState([]);
 
 const setGenre = (genre) => {
    addGenre([...genreList, genre]);
    console.log('Added genre to list');
 };

   return (
        <div>
            <h1>OPTIONAL: Choose your Genre</h1>

                     <button onClick={() => setGenre("Fighter")}>
                        Fighter
                    </button>

                    <button onClick={() => setGenre("Immersive Sim")}>
                        Immersive Sim
                    </button>

                     <button onClick={() => setGenre("FPS")}>
                        FPS
                    </button>

                    <button onClick={() => setGenre("PvP")}>
                       PvP
                    </button>

                    <button onClick={() => setGenre("Survival")}>
                        Survival
                    </button>

                    <button onClick={() => setGenre("Hero Shooter")}>
                        Hero Shooter
                    </button>

                    <button onClick={() => setGenre("Horde Mode")}>
                        Horde Mode
                    </button>

                    <button onClick={() => setGenre("Stealth")}>
                       Stealth
                    </button>

                    <button onClick={() => setGenre("Looter Shooter")}>
                        Looter Shooter
                    </button>

                     <button onClick={() => setGenre("Battle Royale")}>
                        Battle Royale
                    </button>

                    <button onClick={() => setGenre("Tower Defense")}>
                        Tower Defense
                    </button>

                    <button onClick={() => setGenre("Bullet Hell")}>
                        Bullet Hell
                    </button>

                    <button onClick={() => setGenre("Real Time Strategy")}>
                        Real Time Strategy
                    </button>

                    <button onClick={() => setGenre("Deck Building")}>
                        Deck Building
                    </button>

                     <button onClick={() => setGenre("Action Adventure RPG")}>
                        Action Adventure RPG
                    </button>

                     <button onClick={() => setGenre("Survival Horror")}>
                        Survival Horror
                    </button>

                     <button onClick={() => setGenre("Metroidvania")}>
                        Metroidvania
                    </button>

                    <button onClick={() => setGenre("Dungeon-Crawler")}>
                        Dungeon Crawler
                    </button>

                     <button onClick={() => setGenre("Extraction")}>
                        Extraction
                    </button>

                     <button onClick={() => setGenre("Soulslike")}>
                       Soulslike
                    </button>

                    <button onClick={() => setGenre("Roguelike")}>
                        Roguelike
                    </button>

                    <button onClick={() => setGenre("Co-op")}>
                        Co-op
                    </button>

                    <button onClick={() => setGenre("MMORPG")}>
                        MMORPG
                    </button>

                    <button onClick={() => setGenre("MOBA")}>
                        MOBA
                    </button>

                     <button onClick={() => setGenre("VR")}>
                        VR
                    </button>

                    <button onClick={() => setGenre("AR")}>
                        AR
                    </button>

                     <button onClick={() => setGenre("Platformer")}>
                        Platformer
                    </button>

                    <button onClick={() => setGenre("Puzzle")}>
                        Puzzle
                    </button>

                    <Link to= "/response">
                        <button onClick={sendData(genreList)}>
                            Generate a new Game Idea
                        </button>
                    </Link>
        </div> 
    );

   };

   export default Genre;