import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists, fetchAlbums, fetchTracks, TYPE_ARTISTS, TYPE_ALBUMS, TYPE_TRACKS } from '../actions';

class SearchBar extends React.Component {
  render(){
    return(
      <form className="search-bar" onSubmit={this.onSearchTermSubmit}>
        <input type="text" placeholder="Search" ref="searchTerm" />
        <select defaultValue="default" name="type" ref="selectType">
          <option disabled="disabled" value="default">Search option</option>
          <option value={TYPE_ARTISTS}>Artist</option>
          <option value={TYPE_ALBUMS}>Album</option>
          <option value={TYPE_TRACKS}>Track</option>
        </select>
        <button>Search</button>
      </form>
    );
  }

  onSearchTermSubmit = event => {
    event.preventDefault();
    const selectValue = this.refs.selectType.value;
    const searchTerm = this.refs.searchTerm.value;
    if(searchTerm === '') {
      alert('Type a serch term');
    } else {
      switch (selectValue) {
        case TYPE_ARTISTS:
          this.props.fetchArtists(searchTerm);
          break;
        case TYPE_ALBUMS:
          this.props.fetchAlbums(searchTerm);
          break;
        case TYPE_TRACKS:
          this.props.fetchTracks(searchTerm);
          break;
        default:
          alert('Select value');
          break;
      }
    }
  }
}

const mapStateToProps = state => {
  return {artists: state.artists.items, albums: state.albums.items, tracks: state.tracks.items};
}

export default connect(mapStateToProps, {
  fetchArtists,
  fetchAlbums,
  fetchTracks 
})(SearchBar);