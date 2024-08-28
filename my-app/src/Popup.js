import React from "react";
import Popup from 'reactjs-popup';
import LogIn from "./LogIn";
import MakeAccount from "./MakeAccount";

const Popups = () => {
    return (
        <div>
            <Popup trigger={<button style={{position: 'absolute', top: '25px', right: '50px', padding: '10px 20px'}}> Login </button>} style={{backgroundColor: 'black'}}> <LogIn/></Popup>
            <Popup trigger={<button style={{position: 'absolute', top: '25px', right: '150px', padding: '10px 20px'}}> Sign up </button>} style={{backgroundColor: 'black'}}> <MakeAccount/></Popup>
        </div>
    )
}

export default Popups;