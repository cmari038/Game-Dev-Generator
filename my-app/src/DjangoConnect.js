import axios from 'axios';

const backendURL = "http://127.0.0.1:8000/"

const jsonData = {
    //platform: [],
    Genres: []
};

/*export function setPlatform(platform) {
    jsonData["platform"].push(platform);
}; */

export function setGenre(genre) {
    jsonData["Genres"].push(genre);
};

export function sendData(data) {
    
    axios.post(backendURL, data)
        .then(function (response) {
            console.log(response);
        }) 

        .catch(function (error) {
            console.log(error);
        })
}