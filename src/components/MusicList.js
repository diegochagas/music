import React from 'react';
import { connect } from 'react-redux';
import MusicListItem from './MusicListItem';
import { TYPE_ARTISTS, TYPE_ALBUMS, TYPE_TRACKS } from '../actions';

class MusicList extends React.Component {
  render(){
    return(
      <ul className="music-list">
        {this.renderMusicList(this.props)}
      </ul>
    );
  }

  renderMusicList = ({artists, albums, tracks}) => {
    let items = [];
    let type = "";
    switch (this.props.searchTermType) {
      case TYPE_ARTISTS:
        items = artists;
        type = TYPE_ARTISTS;
        break
      case TYPE_ALBUMS: 
        items = albums;
        type = TYPE_ALBUMS;
        break;
      case TYPE_TRACKS:
        items = tracks;
        type = TYPE_TRACKS;
        break;
      default:
        return (
          <div className="loading">
            <span>Search for an artist, album or track</span>
          </div>
        );
    }
    return items.map(item => <MusicListItem key={item.id} item={item} type={type} />);
  }
}

const mapStateToProps = state => {
  return { artists: state.artists, albums: state.albums, tracks: state.tracks, searchTermType: state.searchTermType };
}

export default connect(mapStateToProps)(MusicList);