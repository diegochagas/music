import { combineReducers } from 'redux';
import { TYPE_ARTISTS,  TYPE_ALBUMS, TYPE_TRACKS } from '../actions';

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
  
export default combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer
});
