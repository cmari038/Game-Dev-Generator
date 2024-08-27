import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { email } from "./LogIn";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./Firebase";
import Popups from "./Popup";

const Response = () => {

    const backendURL_post = "http://127.0.0.1:8000/gameIdea/";

    const [output, getOutput] = useState('');

    const setOutput = (text) => {
        getOutput(text);
    }

   useEffect(() => {

    const games = async () => { 

        //axios.defaults.xsrfCookieName = 'csrftoken';
        //axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"; 
        
       await axios.get(backendURL_post)
        .then( response => {
            setOutput(response.data)
            //axios.defaults.headers.common['x-csrftoken'] = response.data.CSRFToken;
            console.log(response.data);
        }) 

        .catch(function (error) {
            console.log(error);
        })

    }

    games();

}, []);

/*const saveData = async() => {
    const collectionRef = collection(db, auth.currentUser.email); 
    console.log(output)
    await addDoc(collectionRef, {"Game": output});
}*/

const [click, setClick] = useState(false);

const addClick = () => {
    setClick(true);
}

const [error, setError] = useState('');

    const addError = () => {
        setError("Login or make an account")
    }

useEffect(()=> {

    const saveData = async() => {
        const collectionRef = collection(db, auth.currentUser.email); 
        console.log(output)
        await addDoc(collectionRef, {"Game": output});
    }

    auth.onAuthStateChanged(user => {
        if(user && click) {
        //  console.log(user.email);
            saveData();
        }

        else if(!user && click) {
            addError();
        }

        //console.log(user.email);
    })
}, [click, output])

    return (

        <div style={{whiteSpace: "pre-wrap", textAlign: "center"}}>
            <h1 style={{textAlign: "center"}}>Game Idea</h1>
            <p style={{textAlign: "center"}}>
                {output}

                <br></br>
                <br></br>
            </p>

            <Link to= "/genre"> 
                <button style={{padding: '10px 20px'}}>
                    Select Parameters
                </button>
            </Link>

            <Link to= "/"> 
                <button style={{padding: '10px 20px'}}>
                    Home
                </button>
            </Link>

            <button onClick={addClick} style={{padding: '10px 20px'}}>
                Save Game
            </button>

            <br></br>
            <br></br>

            <Popups/>

            {error}

        </div>

    );

};

export default Response;