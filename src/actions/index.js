import SpotifyAPI from '../apis/SpotifyAPI';
export const TYPE_ARTISTS = "artist";
export const TYPE_ALBUMS = "album";
export const TYPE_TRACKS = "track";
export const FETCH_LATEST_ALBUMS = "FETCH_LATEST_ALBUMS";
export const FETCH_ALBUM_TRACKS = "FETCH_ALBUM_TRACKS";

export const fetchArtists = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`/search`, { 
    params: { 
      q: searchTerm,
      type: TYPE_ARTISTS 
    } 
  });
  dispatch({type: TYPE_ARTISTS, payload: response.data.artists.items});
}

export const fetchAlbums = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`/search`, { 
    params: { 
      q: searchTerm,
      type: TYPE_ALBUMS 
    } 
  });
  dispatch({type: TYPE_ALBUMS, payload: response.data.albums.items});
}

export const fetchTracks = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`/search`, { 
    params: { 
      q: searchTerm,
      type: TYPE_TRACKS 
    } 
  });
  dispatch({type: TYPE_TRACKS, payload: response.data.tracks.items});
}

export const fetchLatestAlbums = id => async dispatch => {
  const response = await SpotifyAPI().get(`/artists/${id}/albums`);
  dispatch({type: FETCH_LATEST_ALBUMS, payload: response.data.items});
}

export const fetchAlbumTracks = id => async dispatch => {
  const response = await SpotifyAPI().get(`/albums/${id}/tracks`);
  dispatch({type: FETCH_ALBUM_TRACKS, payload: response.data.items});
}