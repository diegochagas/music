import React from 'react';
import { connect } from 'react-redux';
import ArtistLatestAlbums from './ArtistLatestAlbums';
import { fetchLatestAlbums } from '../actions';
import './ArtistListItem.scss';
import FavoriteItems from './FavoriteItems';

class ArtistListItem extends React.Component {
  componentDidMount() {
    this.props.fetchLatestAlbums(this.props.item.id);
  }

  render () {
    const { id, images, name, genres, popularity } = this.props.item;
    return (
      <div className="artist-list-item">
        <img src={images.length ? images[0].url : ""} alt="Song" />
        <span>{name}</span>
        <div>{this.renderGenres(genres)}</div>
        <span>{this.renderPopularity(popularity)}</span>
        <ArtistLatestAlbums albums={this.props.albums} />
        <FavoriteItems itemId={id} />
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

const mapStateToProps = state => {
  return { albums: state.artistLatestAlbums };
}

export default connect(mapStateToProps, { fetchLatestAlbums })(ArtistListItem);