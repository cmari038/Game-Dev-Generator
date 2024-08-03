import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";

const MakeAccount = () => {

const [email, getemail] = useState('');
const [password, getPassword] = useState('');

const setemail = (email) => {
    getemail(email);
}

const setPassword = (pwd) => {
    getPassword(pwd);
}

const auth = getAuth();

const createAccount = async(auth, email, password) => {
createUserWithEmailAndPassword(auth, email, password)
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

            <button onClick={createAccount(auth, email, password)}>
                Create Account
            </button>

        </div>

    );
   
};

export default MakeAccount;