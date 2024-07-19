/*
import axios from 'axios';

const backendURL_post = "http://127.0.0.1:8000/gameIdea/"
//const backendURL_get = "http://127.0.0.1:8000/sendGame/"

//axios.defaults.headers.common['x-csrftoken'] = window.csrftoken;

axios.defaults.timeout = 10000;

export const sendData = async(genres, theme, topic) => {
    
   let sender = await axios.post(backendURL_post, {genreList: genres, Theme: theme, Topic: topic})
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