import * as ActionTypes from "./ActionTypes";
import { baseUrl } from '../shared/baseUrl';



/////////////////////////////////////////////Send a feedback
export const postFeedback = (firstname, lastname, email, telnum,agree,contactType,message) => (dispatch) => {

    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        telnum: telnum,
        agree: agree,
        contactType:contactType,
        message:message
    };
    newFeedback.date = new Date().toISOString();
    
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};
