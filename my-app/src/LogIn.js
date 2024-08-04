import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const [click, addClick] = useState(false);

const setClick = () => {
    addClick(true);
}

const navigate = useNavigate();

useEffect(() => {

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
}

if (click) {
    signIn(auth, email, password);
    navigate("/home");
}

}, [click, email, password, navigate]);


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

            <button onClick={setClick} style={{textAlign: "center"}}>
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