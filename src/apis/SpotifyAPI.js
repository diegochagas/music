import axios from 'axios';
const authorizeURL = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "70358d9ae7f84e6a83754104c6a91319";
const localURL = "http://localhost:3000";
// const productionURL = "https://diegochagas.github.io/music";

const SpotifyAPI = () => {
  const ACCESS_TOKEN = getToken();
  return axios.create({
    baseURL: "https://api.spotify.com/v1/search",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${ACCESS_TOKEN}`
    }
  });
}

const getToken = () => {
  const hashURL = window.location.hash;
  if(hashURL !== "") {
    const hashs = getHashParams(hashURL.replace("#", ""));
    const hash = hashs.find(hash => hash.access_token !== undefined);
    return hash.access_token;
  }
  window.location = `${authorizeURL}?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${localURL}`;
}

const getHashParams = hash => {
  const params = hash.split("&");
  return params.map(param => {
    let keyValue = param.split("=");
    let key = keyValue[0];
    let value = keyValue[1];
    let hash = {};
    hash[key] = value;
    return hash;
  });
}

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
  