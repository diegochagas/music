import React from 'react';
import FavoriteItems from './FavoriteItems';

export default class TrackListItem extends React.Component {
  render() {
    const { id, name, artists, duration_ms } = this.props.item;
    const { images, albumName } = this.props.item.album;
    return(
      <div className="track-list-item">
        <img src={images.length ? images[0].url : "" } alt="Album folder" />
        <span>{name}</span>
        <div>{this.renderArtists(artists)}</div>
        <span>{albumName}</span>
        <span>{duration_ms}</span>
        <FavoriteItems itemId={id} />
      </div>
    );
  }
  renderArtists = artists => artists.map(artist => <span key={artist.id}>{artist.name}, </span>);
}