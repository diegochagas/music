import SpotifyAPI from './apis/SpotifyAPI';

export const FETCH_ARTIST = "FETCH_ARTIST";
export const FETCH_ALBUM = "FETCH_ALBUM";
export const FETCH_TRACK = "FETCH_TRACK";

export const fetchArtists = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, {
    params: {
      type: "artist"
    }
  });
  dispatch({artists: response.data.artists.items});
}

export const fetchAlbums = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, {
    params: {
      type: "album"
    }
  });
  dispatch({albums: response.data.albums.items});
}

export const fetchTracks = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, {
    params: {
      type: "track"
    }
  });
  dispatch({tracks: response.data.tracks.items});
}
