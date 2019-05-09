import axios from 'axios';
const authorizeURL = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "70358d9ae7f84e6a83754104c6a91319";
const href = window.location.href;
const ACTUAL_URL = href.substr(0, href.length-1);

const SpotifyAPI = () => {
  const ACCESS_TOKEN = getToken();
  return axios.create({
    baseURL: "https://api.spotify.com/v1",
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
  window.location = `${authorizeURL}?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${ACTUAL_URL}`;
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

export const renewToken = () => {
  window.location.hash = "";
  getToken();
}

export default SpotifyAPI;
  