import SpotifyAPI from '../apis/SpotifyAPI';
import { addFavorite, changeFavoriteStatus, getAllFavorites } from '../apis/FavoriteAPI';
export const TYPE_ARTISTS = "artist";
export const TYPE_ALBUMS = "album";
export const TYPE_TRACKS = "track";
export const FETCH_LATEST_ALBUMS = "FETCH_LATEST_ALBUMS";
export const FETCH_ALBUM_TRACKS = "FETCH_ALBUM_TRACKS";
export const FETCH_IS_FAVORITE = "FETCH_IS_FAVORITE";

export const fetchArtists = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`/search`, { 
    params: { 
      q: searchTerm,
      type: TYPE_ARTISTS 
    } 
  });
  const items = response.data.artists.items;
  items.forEach(item => addFavorite(item.id, false));
  dispatch({type: TYPE_ARTISTS, payload: items});
}

export const fetchAlbums = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`/search`, { 
    params: { 
      q: searchTerm,
      type: TYPE_ALBUMS 
    } 
  });
  const items = response.data.albums.items.map(item => {
    item.isFavorite = this.isFavorite(item.id);
    return item;
  });
  dispatch({type: TYPE_ALBUMS, payload: items});
}

export const fetchTracks = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`/search`, { 
    params: { 
      q: searchTerm,
      type: TYPE_TRACKS 
    } 
  });
  const items = response.data.tracks.items.map(item => {
    item.isFavorite = this.isFavorite(item.id);
    return item;
  });
  dispatch({type: TYPE_TRACKS, payload: items});
}

export const fetchLatestAlbums = id => async dispatch => {
  const response = await SpotifyAPI().get(`/artists/${id}/albums`);
  dispatch({type: FETCH_LATEST_ALBUMS, payload: response.data.items});
}

export const fetchAlbumTracks = id => async dispatch => {
  const response = await SpotifyAPI().get(`/albums/${id}/tracks`);
  dispatch({type: FETCH_ALBUM_TRACKS, payload: response.data.items});
}

export const fetchIsFavorite = id => {
  changeFavoriteStatus(id);
  console.log(getAllFavorites());
  return { type: FETCH_IS_FAVORITE, payload: getAllFavorites() };
}