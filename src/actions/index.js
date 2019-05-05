import SpotifyAPI from '../apis/SpotifyAPI';
export const TYPE_ARTISTS = "artist";
export const TYPE_ALBUMS = "album";
export const TYPE_TRACKS = "track";

export const fetchArtists = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, { params: { type: TYPE_ARTISTS } });
  dispatch({type: TYPE_ARTISTS, payload: response.data.artists.items});
}

export const fetchAlbums = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, { params: { type: TYPE_ALBUMS } });
  dispatch({type: TYPE_ALBUMS, payload: response.data.albums.items});
}

export const fetchTracks = searchTerm => async dispatch => {
  const response = await SpotifyAPI().get(`?q=${searchTerm}`, { params: { type: TYPE_TRACKS } });
  dispatch({type: TYPE_TRACKS, payload: response.data.tracks.items});
}
