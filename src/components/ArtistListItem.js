import React from 'react';
import { connect } from 'react-redux';
import ArtistLatestAlbums from './ArtistLatestAlbums';
import { fetchLatestAlbums } from '../actions';
import './ArtistListItem.scss';
import FavoriteItems from './FavoriteItems';
import noImage from '../images/noimage.jpg';

class ArtistListItem extends React.Component {
  componentDidMount() {
    this.props.fetchLatestAlbums(this.props.item.id);
  }

  render () {
    const { id, images, name, genres, popularity } = this.props.item;
    return (
      <div className="artist-list-item">
        <img className="album-image" src={images.length ? images[0].url : noImage} alt="Song" />
        <div className="description">
          <span>Name: {name}</span>
          <div>Genres: {this.renderGenres(genres)}</div>
          <span>Popularity: {this.renderPopularity(popularity)}</span>
          <FavoriteItems itemId={id} />
        </div>
        <ArtistLatestAlbums albums={this.props.albums} />
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