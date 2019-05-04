import SpotifyAPI from '../apis/SpotifyAPI';

export const FETCH_ARTISTS = "FETCH_ARTISTS";
export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_TRACKS = "FETCH_TRACKS";

export const TYPE_ARTISTS = "artist";
export const TYPE_ALBUMS = "album";
export const TYPE_TRACKS = "track";

export const fetchArtists = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, {
    params: {
      type: TYPE_ARTISTS
    }
  });
  dispatch({type: FETCH_ARTISTS, payload: response.data});
}

export const fetchAlbums = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, {
    params: {
      type: TYPE_ALBUMS
    }
  });
  dispatch({type: FETCH_ALBUMS, payload: response.data.albums.items});
}

export const fetchTracks = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, {
    params: {
      type: TYPE_TRACKS
    }
  });
  dispatch({type: FETCH_TRACKS, payload: response.data.tracks.items});
}
