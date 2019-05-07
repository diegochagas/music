import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbumTracks } from '../actions';
import AlbumTracks from './AlbumTracks';
import FavoriteItems from './FavoriteItems';
import './AlbumListItem.scss';

class AlbumListItem extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumTracks(this.props.item.id);
  }

  render() {
    const { id, images, name, artists, available_markets } = this.props.item;
    return(
      <div className="album-list-item">
        <img className="album-image" src={images.length ? images[0].url: ""} alt="Album folder" />
        <div className="description">
          <span>Name: {name}</span>
          <div>Artist(s): {this.renderArtists(artists)}</div>
          <div className="availability">Availability: {this.renderAvailability(available_markets)}</div>
          <FavoriteItems itemId={id} />
        </div>
        <AlbumTracks tracks={this.props.tracks} />
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
    return <span className="available-market">{spanText}</span>;
  }

  renderAvailability = availableMarkets => {
    return availableMarkets.map(market => <span key={market}>{market}, </span>);
  }
}

const mapStateToProps = state => {
  return { tracks: state.albumTracks };
}

export default connect(mapStateToProps, { fetchAlbumTracks })(AlbumListItem);