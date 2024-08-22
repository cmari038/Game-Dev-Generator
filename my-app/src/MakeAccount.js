import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";


const MakeAccount = () => {

const [email,getEmail] = useState('');
const [password, getPassword] = useState('');

const setEmail = (email) => {
   getEmail(email);
}

const setPassword = (pwd) => {
    getPassword(pwd);
}

const [error, getError] = useState('');

const setError = (issue) => {
    getError(issue);
}

const navigate = useNavigate();

const createAccount = async(e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        navigate("/")

        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setError(errorMessage);
        // ..
    });
}

    return (
        <form>
        <div style={{textAlign: "center"}}>

            <h1>Make an Account</h1>

            <label>
           <h2>Enter an Email</h2>
                <input
                    type="text"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                >
                </input>

            </label>

            <label>
            <h3>Enter a password</h3>
                <input
                    type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                >
                </input>

            </label>

            <br></br>
            <br></br>

            <button type="submit" onClick={createAccount}>
                Create Account
            </button>
            
            <label>
                {error}
            </label>

        </div>
    </form>
    );
   
};

export default MakeAccount;