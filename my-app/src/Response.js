import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { email } from "./LogIn";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./Firebase";

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

const saveData = async() => {
  /*db.collection(auth.currentUser).add({
        "Game": output,
    }) */

    //await setDoc(doc(db, auth.currentUser), output);
   // const docRef = doc(collection(db, auth.currentUser));
   //console.log(output)
    const collectionRef = collection(db, auth.currentUser.email); 
    console.log(output)
    await addDoc(collectionRef, {"Game": output});
}

    return (

        <div style={{whiteSpace: "pre-wrap"}}>
            <h1 style={{textAlign: "center"}}>Game Ideas</h1>
            <p>
                {output}

                <Link to= "/genre"> 
                <button>
                    Select Parameters
                </button>
                </Link>

                <Link to= "/"> 
                <button>
                    Home
                </button>
                </Link>

                <button onClick={saveData}>
                   Save
                </button>

            </p>
        </div>

    );

};

export default Response;