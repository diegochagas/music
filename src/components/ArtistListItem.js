import React from 'react';

export default class ArtistListItem extends React.Component {
  render () {
    const { images, name, genres, popularity } = this.props.item;
    return (
      <div className="artist-list-item">
        <img src={images.length ? images[0].url : ""} alt="Song" />
        <span>{name}</span>
        <div>{this.renderGenres(genres)}</div>
        <span>{this.renderPopularity(popularity)}</span>
      </div>
    );
  }

  renderGenres = genres => genres.map(genre => <span key={genre}>{genre}, </span>);
  
  renderPopularity = popularity => {
    if (popularity > 80) {
      return "Hot";
    } else if (popularity >= 60 && popularity <= 79) {
      return "Cool";
    } else if (popularity >= 30 && popularity <= 59) {
      return "Regular";
    } else if (popularity < 30) {
      return "Underground";
    } else {
      return "";
    }
  }
}