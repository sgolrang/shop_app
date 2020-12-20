export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const signup = (email, password) => {
return async dispatch => {
const response = await fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyA5tfvbS_7uaOsBKkpINTtv-rCw33m82rU',
 {
     method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
    })
}
)
if(!response.ok){
    throw new Error('Something went wrong');
}
const resData = await response.json();
console.log(resData);
dispatch({ type: LOGIN})
}
}
