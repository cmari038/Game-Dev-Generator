import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CSRFToken = () => {
    const [csrftoken, setCSRFToken] = useState('');
    //const DjangoCookie = "http://127.0.0.1:8000/cookie/";
    //const DjangoCookie = process.env.REACT_APP_COOKIE;

    useEffect(() => {
   
        const getToken = async () => {

            const DjangoCookie = process.env.REACT_APP_COOKIE;

              await axios.get(DjangoCookie, {withCredentials: true})
              .then(response => {
                setCSRFToken(response.data);
               // console.log(csrftoken);
              });

        }; 

         getToken();
}, [] );

  
       return (
            <input type='hidden' name='csrfmiddlewaretoken' id='csrf' value={csrftoken}>
            </input>
        );  
  
};

export default CSRFToken;