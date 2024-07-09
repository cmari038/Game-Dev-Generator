import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendData } from './DjangoConnect';

const Genre = () => {
   /*const [buttonClick, setClick] = useState(false) 
   const Click = () => {
        setClick(!buttonClick);
   }; */

/*   const Checkbox = ({label, value, onChange}) => {
    return (
        <label>
             {label}
            <input 
            type="checkbox"
            checked={value}
            id = {label}
            onChange={onChange}
            > </input>
        </label>
    )
} */

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

 const [checked, setChecked] = useState(new Array(29).fill(false));

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

 const [theme, addTheme] = useState('');

 const setTheme = (themeChoice) => {
    addTheme(themeChoice);
 };
 
 const [topic, addTopic] = useState('');

 const setTopic = (topicChoice) => {
    addTopic(topicChoice);
 }; 

   return (
        <div>
            <h1>OPTIONAL: Choose your Genre</h1>

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
                        FPS
                            <input
                            type="checkbox"
                            checked={checked[2]}
                            id = "FPS"
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
                        Hero Shooter
                            <input
                            type="checkbox"
                            checked={checked[5]}
                            id = "Hero Shooter"
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
                        Looter Shooter
                            <input
                            type="checkbox"
                            checked={checked[8]}
                            id = "Looter Shooter"
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
                        Deck Building
                            <input
                            type="checkbox"
                            checked={checked[13]}
                            id = "Deck Building"
                            onChange={e=>changeCheckbox(e.target.id, 13)}>
                            </input>
                    </label>

                    <label>
                        Action Adventure RPG
                            <input
                            type="checkbox"
                            checked={checked[14]}
                            id = "Action Adventure RPG"
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
                        Dungeon Crawler
                            <input
                            type="checkbox"
                            checked={checked[17]}
                            id = "Dungeon Crawler"
                            onChange={e=>changeCheckbox(e.target.id, 17)}>
                            </input>
                    </label>

                    <label>
                        Extraction
                            <input
                            type="checkbox"
                            checked={checked[18]}
                            id = "Extraction"
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
                    <p>OPTIONAL: Enter a theme:</p>
                        <input
                        type="text"
                        value={theme}
                        onChange={e=>setTheme(e.target.value)}>
                        </input>
                    </label>

                    <label>
                    <p>OPTIONAL: Enter a topic:</p>
                        <input
                        type="text"
                        value={topic}
                        onChange={e=>setTopic(e.target.value)}>
                        </input>
                    </label>

                    <p>

                    <Link to= "http://127.0.0.1:8000/gameIdea/">
                        <button onClick={sendData(genreList, theme, topic)}>
                            Generate a new Game Idea
                        </button>
                    </Link>

                    </p>
         </div>  
    );

   };

   export default Genre;

   /*
   <Link to= "http://127.0.0.1:8000/gameIdea/">
   <button onClick={sendData(genreList, theme, topic)}>
       Generate a new Game Idea
   </button>
</Link> */

//  <a href="http://127.0.0.1:8000/gameIdea/"> Generate a new Game Idea</a>