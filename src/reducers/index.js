import { combineReducers } from 'redux';
import { TYPE_ARTISTS,  TYPE_ALBUMS, TYPE_TRACKS, FETCH_LATEST_ALBUMS, FETCH_ALBUM_TRACKS, FETCH_FAVORITES, FETCH_SEARCH_TERM_TYPE } from '../actions';

const artistsReducer = (state = [], action) => {
  switch (action.type) {
    case TYPE_ARTISTS:
    return action.payload;
    default:
      return state;
  }
}

const albumsReducer = (state = [], action) => {
  switch (action.type) {
    case TYPE_ALBUMS:
    return action.payload;
    default:
    return state;
  }
}

const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case TYPE_TRACKS:
    return action.payload;
    default:
    return state;
  }
}

const latestArtistAlbumsReducer = (state = [], action) => { 
  switch (action.type) {
    case FETCH_LATEST_ALBUMS:
      return action.payload;
    default:
      return state;
  }
}

const albumTracksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALBUM_TRACKS: 
      return action.payload;
    default:
      return state;
  }
}

const favoritesReducer = (state = [], action) => { 
  switch (action.type) {
    case FETCH_FAVORITES:
      return action.payload;
    default:
      return state;
  }
}

const searchTermTypeReducer = (state = "", action) => {
  switch (action.type) {
    case FETCH_SEARCH_TERM_TYPE:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer,
  artistLatestAlbums: latestArtistAlbumsReducer,
  albumTracks: albumTracksReducer,
  favorites: favoritesReducer,
  searchTermType: searchTermTypeReducer
});
