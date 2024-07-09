import axios from 'axios';

const backendURL_post = "http://127.0.0.1:8000/gameIdea/"
//const backendURL_get = "http://127.0.0.1:8000/sendGame/"

export function sendData(genres, theme, topic) {
    
    axios.post(backendURL_post, {genreList: genres, Theme: theme, Topic: topic})
        .then(function (response) {
            console.log(response);
        }) 

        .catch(function (error) {
            console.log(error);
        })
}

/*export function getData() {
    axios.get(backendURL_get)
    .then(function (response) {
        console.log(response);
    }) 

    .catch(function (error) {
        console.log(error);
    })
} */