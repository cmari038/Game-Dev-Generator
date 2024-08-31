import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "./Firebase";

const SavedGames = () => {

    const [gameCollection, addCollection] = useState([]);

   useEffect(() => {

        const getData = async() => {
            const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
            const docData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                Game: doc.data().Game
            }));
            addCollection(docData);
           /* querySnapshot.forEach( (doc) => {
                const holder = doc.data();
                addCollection([...gameCollection, holder.Game]);
            }); */
        }

        const UserCheck = async () => {
            auth.onAuthStateChanged(user => {
                if(user) {
                    //console.log(auth.currentUser.email);
                    getData();
                }
    
                else {
                    console.log("No user");
                }
            })
        }
    
   //console.log(index); 
    UserCheck();
    
    }, [])  

    return (
        <div style={{whiteSpace: "pre-wrap", backgroundColor: 'black', color: 'white', minHeight: '100vH'}}>
            <h1 style={{textAlign: 'center'}}>Saved Games</h1>

            <ul>
                {gameCollection.map(game => (<li key={game.id}>{game.Game}  <br></br> <hr></hr>
                    <br></br> </li>))}

            </ul>

            <div style={{textAlign: 'center'}}>
                <Link to= "/genre"> 
                    <button style={{padding: '10px 20px', textAlign: 'center', marginRight: '10px'}}>
                        Select Parameters
                    </button>
                </Link>

                <Link to= "/"> 
                    <button style={{padding: '10px 20px', textAlign: 'center'}}>
                        Home
                    </button>
                </Link>
            </div>
            
        </div>
    )
}

export default SavedGames;