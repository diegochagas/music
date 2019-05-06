import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbumTracks } from '../actions';
import AlbumTracks from './AlbumTracks';
import FavoriteItems from './FavoriteItems';

class AlbumListItem extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumTracks(this.props.item.id);
  }

  render() {
    const { id, images, name, artists, available_markets } = this.props.item;
    return(
      <div className="album-list-item">
        <img src={images.length ? images[0].url: ""} alt="Album folder" />
        <span>{name}</span>
        <div>{this.renderArtists(artists)}</div>
        <div>{this.renderAvailability(available_markets)}</div>
        <AlbumTracks tracks={this.props.tracks} />
        <FavoriteItems itemId={id} />
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