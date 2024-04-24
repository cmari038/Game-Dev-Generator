import React, { useState } from 'react';

function Genre() {
   const [buttonClick, setClick] = useState(false) 
   const Click = () => {
        setClick(!buttonClick);
   };

   return (
        <div>
            <h1>Choose your Genre</h1>
             <button onClick={Click}>
                        Indie
                    </button>

                     <button onClick={Click}>
                        Fighter
                    </button>

                     <button onClick={Click}>
                        FPS
                    </button>

                     <button onClick={Click}>
                        Battle Royale
                    </button>

                     <button onClick={Click}>
                        RPG
                    </button>

                     <button onClick={Click}>
                        Survival Horror
                    </button>

                     <button onClick={Click}>
                        Metroidvania
                    </button>

                     <button onClick={Click}>
                        Battle Royale
                    </button>

                     <button onClick={Click}>
                        Extraction
                    </button>

                     <button onClick={Click}>
                       Soulslike
                    </button>

                     <button onClick={Click}>
                        Sports
                    </button>

                     <button onClick={Click}>
                        Racing
                    </button>

                     <button onClick={Click}>
                        VR
                    </button>

                     <button onClick={Click}>
                        Platformer
                    </button>

                     <button onClick={Click}>
                        Free-to-Play
                    </button>
        </div> 
    );

   };

   export default Genre;