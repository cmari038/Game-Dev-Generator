import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

        </div>
   );
};

export default Platform;