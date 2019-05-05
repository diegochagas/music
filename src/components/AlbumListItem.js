import React from 'react';

export default class AlbumListItem extends React.Component {
  render() {
    const { images, name, artists, available_markets } = this.props.item;
    return(
      <div className="album-list-item">
        <img src={images.length ? images[0].url: ""} alt="Album folder" />
        <span>{name}</span>
        {this.renderArtists(artists)}
      </div>
    );
  }

  renderArtists = artists => {
    let spanText = "";
    if (artists.length === 0) {
      spanText = "";
    }
    if (artists.length === 1) {
      spanText = artists[0].name;
    }
    if (artists.length > 1) {
      spanText = "Various artists";
    }
    return (<span className="available-market">{spanText}</span>);
  }

  renderAvailability = availableMarkets => {
    return availableMarkets.reduce()
  }
}