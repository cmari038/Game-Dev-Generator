import axios from 'axios';

const backendURL_post = "http://127.0.0.1:8000/gameIdea/"
const backendURL_get = "http://127.0.0.1:8000/sendGame/"

/*export const jsonData = {
    //platform: [],
    Genres: []
};

export function setPlatform(platform) {
    jsonData["platform"].push(platform);
}; */

/*export function setGenre(jsonData, genre) {
    jsonData["Genres"].push(genre);
}; */

export function sendData(data) {
    
    axios.post(backendURL_post, data)
        .then(function (response) {
            console.log(response);
        }) 

        .catch(function (error) {
            console.log(error);
        })
}

export function getData() {
    axios.get(backendURL_get)
    .then(function (response) {
        console.log(response);
    }) 

    .catch(function (error) {
        console.log(error);
    })
}