import React from "react";
const MakeAccount = () => {
    
    const [userName, getUserName] = useState('');
    const [password, getPassword] = useState('');

    const setUserName = (username) => {
        getUserName(username);
    }

    const setPassword = (pwd) => {
        getPassword(pwd);
    }

    return (
        <div>

            <h1>Make an Account</h1>

            <label>
            Enter a username
                <input
                    type="text"
                    value={userName}
                    onChange={setUserName}
                >
                </input>

            </label>

            <label>
            Enter a password
                <input
                    type="text"
                    value={password}
                    onChange={setPassword}
                >
                </input>

            </label>

        </div>

    );
   
};

export default MakeAccount;