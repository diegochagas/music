import { combineReducers } from 'redux';
import { FETCH_ARTISTS,  FETCH_ALBUMS, FETCH_TRACKS } from '../actions';

const artistsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTISTS:
    return action.payload;
    default:
      return state;
  }
}

const albumsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return action.payload;
      default:
      return state;
  }
}

const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRACKS:
    return action.payload;
    default:
      return state;
    }
  }
  
export default combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer
});
