import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setPlatform } from './DjangoConnect';

const Platform = () => {
   const [buttonClick, setClick] = useState(false) 
   const Click = () => {
        setClick(!buttonClick);
   };

   return (
        <div>
            <h1>
                Choose your Platform
            </h1>
            
            <button onClick={setPlatform("Playstation")}>
                Playstation
            </button>

            <button onClick={setPlatform("PC")}>
                PC
            </button>

            <button onClick={setPlatform("Xbox")}>
                Xbox
            </button>

            <button onClick={setPlatform("Nintendo Switch")}>
                Nintendo Switch
            </button>

            <button onClick={setPlatform("Mobile")}>
                Mobile
            </button>

            <Link to='/genre'>   
                <button onClick={Click}>
                    Submit
                </button>
            </Link>
        </div>
   );
};

export default Platform;