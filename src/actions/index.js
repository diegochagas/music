import SpotifyAPI from './apis/SpotifyAPI';

export const FETCH_ARTISTS = "FETCH_ARTISTS";
export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_TRACKS = "FETCH_TRACKS";

export const fetchArtists = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, {
    params: {
      type: "artist"
    }
  });
  dispatch({type: FETCH_ARTISTS, payload: response.data.artists.items});
}

export const fetchAlbums = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, {
    params: {
      type: "album"
    }
  });
  dispatch({type: FETCH_ALBUMS, payload: response.data.albums.items});
}

export const fetchTracks = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, {
    params: {
      type: "track"
    }
  });
  dispatch({type: FETCH_TRACKS, payload: response.data.tracks.items});
}
