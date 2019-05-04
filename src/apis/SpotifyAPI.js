import axios from 'axios';
const CLIENT_ID = "70358d9ae7f84e6a83754104c6a91319";
const REDIRECT_URI = "http://localhost:3000";

const SpotifyAPI = axios.get('https://accounts.spotify.com/authorize', {
  params: {
    "client_id": CLIENT_ID,
    "response_type": "token",
    "redirect_uri": REDIRECT_URI
  }
});

/*
axios.create({
  baseURL: 'https://api.spotify.com/v1/search',
  headers: {  
    "Accept": "application/json", 
    "Content-Type": "application/json", 
    "token_type": "Bearer",
    "access_token": getToken()
  }
});

const getToken = () => {
  return axios({
    method: 'post',
    url:'https://accounts.spotify.com/api/token',
    params: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      response_type: "code",
      grant_type :'authorization_code',
      redirect_uri: REDIRECT_URI
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(token => {
    return token;
  }).catch(e=> {
    return e.response.data;
  });
};
*/

export default SpotifyAPI;
  