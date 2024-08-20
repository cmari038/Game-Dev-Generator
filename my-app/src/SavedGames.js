import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "./Firebase";

const SavedGames = () => {

    const [gameCollection, addCollection] = useState([]);
    const [index, getIndex] = useState(0);

    const setIndex = (val) => {
        if(val === index + 1 && val < gameCollection.length) {
            getIndex(val);
            //setCurrGame(gameCollection[val]);
        }

        else if(val === index - 1 && val > 0) {
            getIndex(val);
            //setCurrGame(gameCollection[val]); 
        } 
       
    } 


    /*const getData = async() => {
        const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
        querySnapshot.forEach( (doc) => {
            const holder = doc.data();
            addCollection([...gameCollection, holder.Game]);
            //console.log(holder.Game);
            });
        //setCurrGame(gameCollection[0]);
        //console.log(gameCollection[0])
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

    const [index, getIndex] = useState(0);

    const setIndex = (val) => {
        if(val === index + 1 && val < gameCollection.length) {
            getIndex(val);
            //setCurrGame(gameCollection[val]);
        }

        else if(val === index - 1 && val > 0) {
            getIndex(val);
            //setCurrGame(gameCollection[val]); 
        } 
       
    } 



   const [currentGame, getCurrGame] = useState('');
    
    const setCurrGame = (input) => {
        getCurrGame(input);
    }

    const [index, getIndex] = useState(0);

    const [click, changeClick] = useState(false);

    const setClick = (boolean) => {
        changeClick(boolean);
    } */

   useEffect(() => {

       /* const setIndex = (val) => {
            if(val === index + 1 && val < gameCollection.length) {
                getIndex(val);
                setCurrGame(gameCollection[val]);
            }
    
            else if(val === index - 1 && val > 0) {
                getIndex(val);
                setCurrGame(gameCollection[val]); 
            } 
           
        } */

        const getData = async() => {
            const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
            querySnapshot.forEach( (doc) => {
                const holder = doc.data();
                addCollection([...gameCollection, holder.Game]);
               // console.log("check");
                //console.log(holder.Game);
                });
            //setCurrGame(gameCollection[0]);
            //console.log(gameCollection[0])
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
       
    UserCheck();
    
    }, [gameCollection])  

    return (
        <div style={{whiteSpace: "pre-wrap"}}>
            <h1>Saved Games</h1>

            <p>{gameCollection[index]}</p>

            <button>
                Prev
            </button>

            <button>
                Next
            </button>
        </div>
    )
}

export default SavedGames;