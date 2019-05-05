import React from 'react';

export default class ArtistListItem extends React.Component {
  render () {
    const { images, name, genres, popularity } = this.props.item;
    return (
      <div className="artist-list-item">
        <img src={images.length ? images[0].url : ""} alt="Song" />
        <span>{name}</span>
        <div>{this.renderGenres(genres)}</div>
        <span>{popularity}</span>
      </div>
    );
  }

  renderGenres = genres => genres.map(genre => <span key={genre}>{genre}, </span>);
  
}