import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";

const MakeAccount = () => {

const [email, getemail] = useState('');
const [password, getPassword] = useState('');

const setemail = (email) => {
    getemail(email);
}

const setPassword = (pwd) => {
    getPassword(pwd);
}

const [click, addClick] = useState(false);
const setClick = () => {
    addClick(true);
}

useEffect(() => {
const createAccount = async(auth, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}

if(click) {
    createAccount(auth,email,password);
} 

}, [click, email, password] );

    return (
        <div style={{textAlign: "center"}}>

            <h1>Make an Account</h1>

            <label>
           <h2>Enter an Email</h2>
                <input
                    type="text"
                    value={email}
                    onChange={setemail}
                >
                </input>

            </label>

            <label>
            <h3>Enter a password</h3>
                <input
                    type="text"
                    value={password}
                    onChange={setPassword}
                >
                </input>

            </label>

            <button onClick={setClick}>
                Create Account
            </button>

        </div>

    );
   
};

export default MakeAccount;