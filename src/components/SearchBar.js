import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists, fetchAlbums, fetchTracks, fetchSearchTermType, TYPE_ARTISTS, TYPE_ALBUMS, TYPE_TRACKS } from '../actions';
import './SearchBar.scss';
const SEARCH_TERM = "SEARCH_TERM";
const TYPE = "TYPE";

class SearchBar extends React.Component {
  componentDidMount() {
    const searchTerm = localStorage.getItem(SEARCH_TERM);
    const type = localStorage.getItem(TYPE);
    if (searchTerm !== null && type !== null && window.location.hash !== "") {
      this.executeSearch(searchTerm, type);
    }
  }

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
    this.executeSearch(searchTerm, selectValue);
  }

  executeSearch = (searchTerm, type) => {
    this.props.fetchSearchTermType(selectValue);
    const searchTerm = this.refs.searchTerm.value;
    if(searchTerm === '') {
      alert('Type a serch term');
    } else {
      switch (type) {
        case TYPE_ARTISTS:
          this.storeSearchParams(searchTerm, type);
          this.props.fetchArtists(searchTerm);
          break;
        case TYPE_ALBUMS:
          this.storeSearchParams(searchTerm, type);
          this.props.fetchAlbums(searchTerm);
          break;
        case TYPE_TRACKS:
          this.storeSearchParams(searchTerm, type);
          this.props.fetchTracks(searchTerm);
          break;
        default:
          alert('Select type value');
          break;
      }
    }
  }

  storeSearchParams = (searchTerm, type) => {
    localStorage.setItem(SEARCH_TERM, searchTerm);
    localStorage.setItem(TYPE, type);
  }
}

const mapStateToProps = state => {
  return { searchTermType: state.searchTermType };
}

export default connect(mapStateToProps, { fetchArtists, fetchAlbums, fetchTracks, fetchSearchTermType  })(SearchBar);