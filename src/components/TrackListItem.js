import React from 'react';
import FavoriteItems from './FavoriteItems';
import './TrackListItem.scss';

export default class TrackListItem extends React.Component {
  render() {
    const { id, name, artists, duration_ms } = this.props.item;
    const { images, albumName } = this.props.item.album;
    return(
      <div className="track-list-item">
        <img className="album-image" src={images.length ? images[0].url : "" } alt="Album folder" />
          <span>{name}</span>
          <div>{this.renderArtists(artists)}</div>
          <span>{albumName}</span>
          <span>{this.renderDuration(duration_ms)}</span>
          <FavoriteItems itemId={id} />
      </div>
    );
  }

  renderDuration = duration => {
    const seconds = this.millisecondsToSeconds(duration)
    const minutes = this.millisecondsToMinutes(duration);
    return `${this.buildNumberTime(minutes)}:${this.buildNumberTime(seconds)}`;
  }
  
  millisecondsToSeconds = milliseconds => Math.floor((milliseconds / 1000) % 60);
  
  millisecondsToMinutes = milliseconds => Math.floor((milliseconds / (1000 * 60)) % 60);
  
  buildNumberTime = time => time < 10 ? `0${time}` : time;

  toggleClass = () => this.setState({ active: !this.state.active });

  renderArtists = artists => artists.map(artist => <span key={artist.id}>{artist.name}, </span>);
}