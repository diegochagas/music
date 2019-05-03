import axios from 'axios';
const CLIENT_ID = "70358d9ae7f84e6a83754104c6a91319";
const CLIENT_SECRET = "68217e1cc4bd40b59da415cc977b5edb";
const REDIRECT_URI = "http://localhost:3000/";

const SpotifyAPI = async () => {
  const token = await getToken();
  return axios.create({
    baseURL: 'https://api.spotify.com/v1/search',
    headers: {  
      "Accept": "application/json", 
      "Content-Type": "application/json", 
      "Authorization": `Bearer ${token}`
    }
  });
}

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
  

export default SpotifyAPI;
  