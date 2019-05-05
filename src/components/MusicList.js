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
    if (artists.length) {
      items = artists;
      type = TYPE_ARTISTS;
    } 
    if (albums.length) {
      items = albums;
      type = TYPE_ALBUMS;
    } 
    if (tracks.length) {
      items = tracks;
      type = TYPE_TRACKS;
    }
    return items.map(item => <MusicListItem key={item.id} item={item} type={type} />);
  }
}

const mapStateToProps = state => {
  return { artists: state.artists, albums: state.albums, tracks: state.tracks };
}

export default connect(mapStateToProps)(MusicList);