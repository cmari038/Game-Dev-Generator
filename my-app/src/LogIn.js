import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const [error, getError] = useState('');

const setError = (issue) => {
    getError(issue);
}

const navigate = useNavigate();

const signIn = async (e) => {
    e.preventDefault();
    
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setError(errorMessage);
    });
}

return (
    <form>
        <div style={{textAlign: "center"}}>

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
                    type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                >
                </input>

            </label>

            <br></br>
            <br></br>

            <button type="submit" onClick={signIn} style={{textAlign: "center", backgroundColor: 'blue', color: 'white', width: '150px'}}>
                            Log in
            </button>

            <br></br>
            <br></br>

        <label>
            {error}
        </label>


        </div>
        </form>

    ); 
   
};

export default LogIn;