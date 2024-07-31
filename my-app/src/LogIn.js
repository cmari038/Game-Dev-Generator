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

            <h1>Log In</h1>

            <label>
            Username
                <input
                    type="text"
                    value={userName}
                    onChange={setUserName}
                >
                </input>

            </label>

            <label>
            Password
                <input
                    type="text"
                    value={password}
                    onChange={setPassword}
                >
                </input>

            </label>

            <button style={{textAlign: "center"}}>
                            Log in
                        </button>

        </div>

    );
   
};

export default MakeAccount;