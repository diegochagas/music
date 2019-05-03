import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.spotify.com/v1/search',
  headers: {  
    "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer BQCdNyn90QraP7__xIZ-nmbzWNuIqCl5n1M9Za9o0xDJ8z-y-msHDlsMAO2sAch41dBMBFXVOtL7Bu-fcvoZOH-fYRv2xK3d9NXluzN3m0j5cBlONgWHuJyt0yDVhy9ZkKCLy_HceNtR0QrerMDOE4xsPslQssXlCpnryg"
  }
});