import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CSRFToken = () => {
    const [csrftoken, setCSRFToken] = useState('');
    const DjangoCookie = "http://127.0.0.1:8000/cookie/";

    const getCookie = (name) => {
        
            let cookieValue = null;
            if (document.cookie && document.cookie !== "") {
              let cookies = document.cookie.split(";");
              for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === name + "=") {
                  cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                  );
                  break;
                }
              }
            }
            return cookieValue;
    }

    useEffect(() => {
   
        const getToken = async () => {
          
          /*axios.defaults.withCredentials = true;
            try {
                await axios.get(DjangoCookie, {withCredentials: true});
            }

            catch (err) {

            } */

          
              await axios.get(DjangoCookie, {withCredentials: true})
              .then(response => {
                setCSRFToken(getCookie('csrftoken'));
               // console.log(csrftoken);
              });

        }; 

         getToken();
         console.log(csrftoken);
        //setCSRFToken(getCookie('csrftoken'));
       // console.log(getCookie('csrftoken'));
}, [csrftoken] );

  
       return (
            <input type='hidden' name='csrf' value={csrftoken}>
            </input>
        ); 
  
        //return csrftoken;
};

export default CSRFToken;