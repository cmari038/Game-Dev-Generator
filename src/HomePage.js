import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./Firebase";
import Popups from "./Popup";

const HomePage = () => {

    const [click, setClick] = useState(false);

    const addClick = () => {
        setClick(true);
    }

    const [error, setError] = useState('');

    const addError = () => {
        setError("Login or make an account")
    }

    const navigate = useNavigate();

    useEffect(()=> {
        auth.onAuthStateChanged(user => {
            if(user && click) {
            //  console.log(user.email);
                navigate("/savedGames");
            }

            else if(!user && click) {
                addError();
            }

            //console.log(user.email);
        })
    }, [click, navigate])



   return ( 
         
            <div style={{textAlign: "center", backgroundColor: 'black', color: 'white', minHeight: '100vH'}}>
                <h1 style={{textAlign: "center"}}>Welcome to Game Dev Generator</h1>
                <p> This website uses Google's Gemini AI to creates new ideas for games that developers can design </p>

                <Link to= "/genre">
                    <button style={{padding: '10px 20px'}}>Generate a Game</button>
                </Link>

                <br></br>
                <br></br>
                <br></br>

                <button onClick={addClick} style={{padding: '10px 20px'}}>Saved Games</button>
               
                <br></br>
                <br></br>

                <Popups/>

                <br></br>
                <br></br>

                {error}

            </div>

    ); 
};

export default HomePage;