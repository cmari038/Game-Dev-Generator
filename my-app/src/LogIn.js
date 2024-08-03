import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";

const LogIn = () => {

const [email, getEmail] = useState('');
const [password, getPassword] = useState('');

const setEmail = (email) => {
    getEmail(email);
};

const setPassword = (pwd) => {
    getPassword(pwd);
};

const signIn = async (auth, email, password) => {

await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

};


return (
        <div style={{textAlign: "center"}}>

            <h1>Log In</h1>

            <label>
           <h2>Email</h2>
                <input
                    type="text"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                >
                </input>

            </label>
            

            <label>
            <h3>Password</h3>
                <input
                    type="text"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                >
                </input>

            </label>

            <button onClick={signIn(auth, email, password)} style={{textAlign: "center"}}>
                            Log in
            </button>

        <Link to="/makeAccount">
        <button>
            Sign Up
        </button>
        </Link>


        </div>

    ); 
   
};

export default LogIn;

//<Link to= "/">
//<button>Games To Make</button>
//</Link>