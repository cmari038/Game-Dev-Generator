import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import CSRFToken from './csrftoken';

const Genre = () => {

//const backendURL_post = "http://127.0.0.1:8000/gameIdea/";
//const backendURL_post = process.env.REACT_APP_BACKEND_URL;
const [genreList, addGenre] = useState([]);

 const setGenre = (genre, numBool) => {
    if(numBool === 1) {    
        if(!genreList.includes(genre)) {
            addGenre([...genreList, genre]);
            console.log('Added genre to list'); 
        }
    }

    else if(numBool === 0) {
        if(genreList.includes(genre)) {
            const filteredList = genreList.filter((word) => word !== genre);
            addGenre(filteredList);
            console.log('Removed genre from list');
        }
    }
 };

 // checkboxes

 const [checked, setChecked] = useState(new Array(34).fill(false));

 const changeCheckbox = (genre, position) => {
    const updatedCheckedState = checked.map((item, index) => index === position ? !item : item);

    setChecked(updatedCheckedState);
    if(document.getElementById(genre).checked) {
        setGenre(genre, 1);
    }

    else if(!document.getElementById(genre).checked){
        setGenre(genre, 0);
    }
 };

 // theme textbox

 const [theme, addTheme] = useState('');

 const setTheme = (themeChoice) => {
    addTheme(themeChoice);
 };
 
 // topic textbox

 const [topic, addTopic] = useState('');

 const setTopic = (topicChoice) => {
    addTopic(topicChoice);
 }; 


 const [click, changeClick] = useState(false);

 const navigate = useNavigate();

 const setClick = () => {
    changeClick(true);
   }

   useEffect(() => {

    const sendData = async (genres, theme, topic) => {

        //addCSRF(document.getElementById('csrf').value);
        const csrftoken = document.getElementById('csrf').value;
        const backendURL_post = process.env.REACT_APP_BACKEND_URL;

        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.withXSRFToken = true;

       // console.log(csrftoken);

        await axios.post(backendURL_post, {genreList: genres, Theme: theme, Topic: topic}, {headers: {'X-CSRFToken':csrftoken, 'Content-Type': 'application/json'}, withCredentials: true})
                .then(function (response) {
                    console.log(response);
                }) 
        
                .catch(function (error) {
                    console.log(error);
                })
            
            navigate("/response");
            changeClick(false);
    }

    if(click) {
        sendData(genreList,theme,topic);
    }

}, [navigate, click, genreList, theme, topic]);

   return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '7px', justifyItems: 'center', textAlign: "center", backgroundColor: 'black', color: 'white', minHeight: '100vH'}}>
            <h1 style={{textAlign: "center", fontSize: '20px'}}>Choose your Gameplay Style</h1>

            <CSRFToken/>

                    <label>
                        Fighter
                            <input
                            type="checkbox"
                            checked={checked[0]}
                            id = "Fighter"
                            onChange={e=>changeCheckbox(e.target.id, 0)}>
                            </input>
                    </label>

                    <label>
                        Immersive Sim
                            <input
                            type="checkbox"
                            checked={checked[1]}
                            id = "Immersive Sim"
                            onChange={e=>changeCheckbox(e.target.id, 1)}>
                            </input>
                    </label>

                    <label>
                        Shooter
                            <input
                            type="checkbox"
                            checked={checked[2]}
                            id = "Shooter"
                            onChange={e=>changeCheckbox(e.target.id, 2)}>
                            </input>
                    </label>

                    <label>
                        PvP
                            <input
                            type="checkbox"
                            checked={checked[3]}
                            id = "PvP"
                            onChange={e=>changeCheckbox(e.target.id, 3)}>
                            </input>
                    </label>

                    <label>
                        Survival
                            <input
                            type="checkbox"
                            checked={checked[4]}
                            id = "Survival"
                            onChange={e=>changeCheckbox(e.target.id, 4)}>
                            </input>
                    </label>

                    <label>
                        Action
                            <input
                            type="checkbox"
                            checked={checked[5]}
                            id = "Action"
                            onChange={e=>changeCheckbox(e.target.id, 5)}>
                            </input>
                    </label>

                    <label>
                        Horde Mode
                            <input
                            type="checkbox"
                            checked={checked[6]}
                            id = "Horde Mode"
                            onChange={e=>changeCheckbox(e.target.id, 6)}>
                            </input>
                    </label>


                    <label>
                        Stealth
                            <input
                            type="checkbox"
                            checked={checked[7]}
                            id = "Stealth"
                            onChange={e=>changeCheckbox(e.target.id, 7)}>
                            </input>
                    </label>


                    <label>
                        Turn Based Strategy
                            <input
                            type="checkbox"
                            checked={checked[8]}
                            id = "Turn Based Strategy"
                            onChange={e=>changeCheckbox(e.target.id, 8)}>
                            </input>
                    </label>

                    <label>
                        Battle Royale
                            <input
                            type="checkbox"
                            checked={checked[9]}
                            id = "Battle Royale"
                            onChange={e=>changeCheckbox(e.target.id, 9)}>
                            </input>
                    </label>


                    <label>
                        Tower Defense
                            <input
                            type="checkbox"
                            checked={checked[10]}
                            id = "Tower Defense"
                            onChange={e=>changeCheckbox(e.target.id, 10)}>
                            </input>
                    </label>

                    <label>
                        Bullet Hell
                            <input
                            type="checkbox"
                            checked={checked[11]}
                            id = "Bullet Hell"
                            onChange={e=>changeCheckbox(e.target.id, 11)}>
                            </input>
                    </label>

                    <label>
                        Real Time Strategy
                            <input
                            type="checkbox"
                            checked={checked[12]}
                            id = "Real Time Strategy"
                            onChange={e=>changeCheckbox(e.target.id, 12)}>
                            </input>
                    </label>
                    
                    <label>
                       4X Strategy
                            <input
                            type="checkbox"
                            checked={checked[13]}
                            id = "4X Strategy"
                            onChange={e=>changeCheckbox(e.target.id, 13)}>
                            </input>
                    </label>

                    <label>
                        RPG
                            <input
                            type="checkbox"
                            checked={checked[14]}
                            id = "RPG"
                            onChange={e=>changeCheckbox(e.target.id, 14)}>
                            </input>
                    </label>

                    <label>
                        Survival Horror
                            <input
                            type="checkbox"
                            checked={checked[15]}
                            id = "Survival Horror"
                            onChange={e=>changeCheckbox(e.target.id, 15)}>
                            </input>
                    </label>


                    <label>
                        Metroidvania
                            <input
                            type="checkbox"
                            checked={checked[16]}
                            id = "Metroidvania"
                            onChange={e=>changeCheckbox(e.target.id, 16)}>
                            </input>
                    </label>

                    <label>
                        Adventure
                            <input
                            type="checkbox"
                            checked={checked[17]}
                            id = "Adventure"
                            onChange={e=>changeCheckbox(e.target.id, 17)}>
                            </input>
                    </label>

                    <label>
                        Extraction Shooter
                            <input
                            type="checkbox"
                            checked={checked[18]}
                            id = "Extraction Shooter"
                            onChange={e=>changeCheckbox(e.target.id, 18)}>
                            </input>
                    </label>

                    <label>
                        Soulslike
                            <input
                            type="checkbox"
                            checked={checked[19]}
                            id = "Soulslike"
                            onChange={e=>changeCheckbox(e.target.id, 19)}>
                            </input>
                    </label>

                    <label>
                        Sandbox
                            <input
                            type="checkbox"
                            checked={checked[20]}
                            id = "Sandbox"
                            onChange={e=>changeCheckbox(e.target.id, 20)}>
                            </input>
                    </label>

                    <label>
                        Roguelike
                            <input
                            type="checkbox"
                            checked={checked[21]}
                            id = "Roguelike"
                            onChange={e=>changeCheckbox(e.target.id, 21)}>
                            </input>
                    </label>

                    <label>
                        Co-op
                            <input
                            type="checkbox"
                            checked={checked[22]}
                            id = "Co-op"
                            onChange={e=>changeCheckbox(e.target.id, 22)}>
                            </input>
                    </label>

                    <label>
                        MMORPG
                            <input
                            type="checkbox"
                            checked={checked[23]}
                            id = "MMORPG"
                            onChange={e=>changeCheckbox(e.target.id, 23)}>
                            </input>
                    </label>

                    <label>
                        MOBA
                            <input
                            type="checkbox"
                            checked={checked[24]}
                            id = "MOBA"
                            onChange={e=>changeCheckbox(e.target.id, 24)}>
                            </input>
                    </label>

                    <label>
                        VR
                            <input
                            type="checkbox"
                            checked={checked[25]}
                            id = "VR"
                            onChange={e=>changeCheckbox(e.target.id, 25)}>
                            </input>
                    </label>

                    <label>
                        AR
                            <input
                            type="checkbox"
                            checked={checked[26]}
                            id = "AR"
                            onChange={e=>changeCheckbox(e.target.id, 26)}>
                            </input>
                    </label>

                    <label>
                        Puzzle
                            <input
                            type="checkbox"
                            checked={checked[27]}
                            id = "Puzzle"
                            onChange={e=>changeCheckbox(e.target.id, 27)}>
                            </input>
                    </label>

                    <label>
                        Platformer
                            <input
                            type="checkbox"
                            checked={checked[28]}
                            id = "Platformer"
                            onChange={e=>changeCheckbox(e.target.id, 28)}>
                            </input>
                    </label>

                    <label>
                        Open World
                            <input
                            type="checkbox"
                            checked={checked[29]}
                            id = "Open World"
                            onChange={e=>changeCheckbox(e.target.id, 29)}>
                            </input>
                    </label>

                    <label>
                        Tactical RPG
                            <input
                            type="checkbox"
                            checked={checked[30]}
                            id = "Tactical RPG"
                            onChange={e=>changeCheckbox(e.target.id, 30)}>
                            </input>
                    </label>

                    <label>
                         CRPG
                            <input
                            type="checkbox"
                            checked={checked[31]}
                            id = "CRPG"
                            onChange={e=>changeCheckbox(e.target.id, 31)}>
                            </input>
                    </label>

                    <label>
                         Monster Tamer
                            <input
                            type="checkbox"
                            checked={checked[32]}
                            id = "Monster Tamer"
                            onChange={e=>changeCheckbox(e.target.id, 32)}>
                            </input>
                    </label>

                    <label>
                         Dungeon Crawler
                            <input
                            type="checkbox"
                            checked={checked[33]}
                            id = "Dungeon Crawler"
                            onChange={e=>changeCheckbox(e.target.id, 33)}>
                            </input>
                    </label>

                    <label>
                    <h2 style={{fontSize: '20px'}}>Enter a Setting(Sci-fi, Steampunk, Horror, etc):</h2>
                        <input
                        type="text"
                        value={theme}
                        onChange={e=>setTheme(e.target.value)}>
                        </input>
                    </label>

                    <label>
                    <h3 style={{fontSize: '20px'}}>Enter a theme(spies, monsters, aliens, pirates, etc):</h3>
                        <input
                        type="text"
                        value={topic}
                        onChange={e=>setTopic(e.target.value)}>
                        </input>
                    </label>

                    <p>
                        <button onClick={setClick} style={{textAlign: "center", padding: '10px 20px'}}>
                            Generate a new Game Idea
                        </button>

                        <br></br>
                        <br></br>

                        <ClipLoader loading={click} color={'white'}/>


                    </p>
         </div>  
    );

   };

   export default Genre;