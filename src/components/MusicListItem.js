import React from 'react';
import './MusicListItem.scss';
import { TYPE_ARTISTS, TYPE_ALBUMS, TYPE_TRACKS } from '../actions';
import ArtistListItem from './ArtistListItem';
import AlbumListItem from './AlbumListItem';
import TrackListItem from './TrackListItem';

class MusicListItem extends React.Component {
  render () {
    return (
      <li className="music-list-item">
        {this.selectListItem()}
      </li>
    );
  }
  
  selectListItem = () => {
    const { item, type } = this.props;
    switch(type) {
      case TYPE_ARTISTS:
        return <ArtistListItem item={item} />;
      case TYPE_ALBUMS:
        return <AlbumListItem item={item} />
      case TYPE_TRACKS:
        return <TrackListItem item={item} />
      default:
        return <div>Not found</div>;
    }
  }
}

export default MusicListItem;