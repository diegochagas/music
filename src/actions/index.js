import SpotifyAPI, { renewToken } from '../apis/SpotifyAPI';
import { updateFavorite } from '../apis/FavoriteAPI';
export const TYPE_ARTISTS = "artist";
export const TYPE_ALBUMS = "album";
export const TYPE_TRACKS = "track";
export const FETCH_LATEST_ALBUMS = "FETCH_LATEST_ALBUMS";
export const FETCH_ALBUM_TRACKS = "FETCH_ALBUM_TRACKS";
export const FETCH_IS_FAVORITE = "FETCH_IS_FAVORITE";
export const FETCH_SEARCH_TERM_TYPE = "FETCH_SEARCH_TERM_TYPE";

export const fetchArtists = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`/search`, { 
    params: { q: searchTerm, type: TYPE_ARTISTS } 
  });
  dispatch({type: TYPE_ARTISTS, payload: response.data.artists.items});
}

export const fetchAlbums = searchTerm => async dispatch => {
  try {
    const response = await SpotifyAPI().get(`/search`, { 
      params: { q: searchTerm, type: TYPE_ALBUMS } 
    });
    dispatch({type: TYPE_ALBUMS, payload: response.data.albums.items});
  } catch ( err ) {
    renewToken (err.response.data.error.status);
  }
}

export const fetchTracks = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`/search`, { 
    params: { q: searchTerm, type: TYPE_TRACKS } 
  });
  dispatch({type: TYPE_TRACKS, payload: response.data.tracks.items});
}

export const fetchLatestAlbums = id => async dispatch => {
  try {
    const response = await SpotifyAPI().get(`/artists/${id}/albums`);
    dispatch({type: FETCH_LATEST_ALBUMS, payload: response.data.items});
  } catch (err) {
    console.log(err);
  }
}

export const fetchAlbumTracks = id => async dispatch => {
  const response = await SpotifyAPI().get(`/albums/${id}/tracks`);
  dispatch({type: FETCH_ALBUM_TRACKS, payload: response.data.items});
}

export const fetchIsFavorite = id => {
  return { type: FETCH_IS_FAVORITE, payload: updateFavorite(id) };
}

export const fetchSearchTermType = termType => {
  return { type: FETCH_SEARCH_TERM_TYPE, payload: termType };
}