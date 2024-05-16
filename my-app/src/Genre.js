import React, { useState } from 'react';
import { setGenre } from './DjangoConnect';

const Genre = () => {
   const [buttonClick, setClick] = useState(false) 
   const Click = () => {
        setClick(!buttonClick);
   };

   return (
        <div>
            <h1>Choose your Genre</h1>
             <button onClick={setGenre("Indie")}>
                        Indie
                    </button>

                     <button onClick={setGenre("Fighter")}>
                        Fighter
                    </button>

                     <button onClick={setGenre("FPS")}>
                        FPS
                    </button>

                     <button onClick={setGenre("Battle Royale")}>
                        Battle Royale
                    </button>

                     <button onClick={setGenre("RPG")}>
                        RPG
                    </button>

                     <button onClick={setGenre("Survival Horror")}>
                        Survival Horror
                    </button>

                     <button onClick={setGenre("Metroidvania")}>
                        Metroidvania
                    </button>

                     <button onClick={setGenre("Extraction")}>
                        Extraction
                    </button>

                     <button onClick={setGenre("Soulslike")}>
                       Soulslike
                    </button>

                    <button onClick={setGenre("Roguelike")}>
                        Roguelike
                    </button>

                     <button onClick={setGenre("Sports")}>
                        Sports
                    </button>

                    <button onClick={setGenre("MMORPG")}>
                        MMORPG
                    </button>

                     <button onClick={setGenre("Racing")}>
                        Racing
                    </button>

                     <button onClick={setGenre("VR/AR")}>
                        VR/AR
                    </button>

                     <button onClick={setGenre("Platformer")}>
                        Platformer
                    </button>

                    <button onClick={setGenre("Puzzle")}>
                        Puzzle
                    </button>

                     <button onClick={setGenre("Free-to-Play")}>
                        Free-to-Play
                    </button>

                    <button onClick={Click}>
                        Submit
                    </button>
        </div> 
    );

   };

   export default Genre;