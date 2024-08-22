import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
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
        <div style={{whiteSpace: "pre-wrap"}}>
            <h1>Saved Games</h1>

            <ul>
                {gameCollection.map(game => (<li key={game.id}>{game.Game}  <br></br>
                    <br></br> </li>))}
            </ul>
            
        </div>
    )
}

export default SavedGames;