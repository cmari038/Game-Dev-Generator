import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "./Firebase";

const SavedGames = () => {

    const [gameCollection, addCollection] = useState([]);

    const [currentGame, getCurrGame] = useState('');
    
    const setCurrGame = (input) => {
        getCurrGame(input);
    }


/*
    const [clickNext, changeClickNext] = useState(false);

    const setClickNext = (clicked) => {
        changeClickNext(clicked);
    }

    /*const [clickPrev, changeClickPrev] = useState(false);

    const setClickPrev = () => {
        changeClickPrev(true);
    } 

    const [index, setIndex] = useState(0);
    
    const getIndex = (val) => {
        setIndex(val);
    }

    const [gameCollection, addCollection] = useState([]);

    const [currentGame, getCurrGame] = useState('');
    
    const setCurrGame = (input) => {
        getCurrGame(input);
    }
        
    const setCollection = () => {
            querySnapshot.forEach( (doc) => {
            addCollection([...gameCollection, doc.data()]);
            });
    }
        
    
    */

    useEffect(() => {

        const getData = async() => {
            const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
            querySnapshot.forEach( (doc) => {
                const holder = doc.data();
                addCollection([...gameCollection, holder.Game]);
                //console.log(holder.Game);
                });
            setCurrGame(gameCollection[0]);
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
        <div>
            <h1>Saved Games</h1>

            <p>{currentGame}</p>

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