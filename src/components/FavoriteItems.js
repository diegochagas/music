import React from 'react';
import './FavoriteItems.scss';
import { connect } from 'react-redux';
import { fetchFavorites } from '../actions';
import { updateFavorite } from '../apis/FavoriteAPI';

class FavoriteItems extends React.Component {

  componentDidMount() {
    this.props.fetchFavorites();
  }

  render(){
    const favorite = this.props.favorites.find(favorite => favorite.id === this.props.itemId);
    return(
      <div className="FavoriteItems">
        <span>Favorite: </span>
        <i className={`${favorite.isFavorite ? "fas" : "far"} fa-star`} onClick={this.onFavoriteClick}></i>
      </div>
    );
  }

  onFavoriteClick = () => {
    updateFavorite(this.props.itemId);
    this.props.fetchFavorites();
  }
  
}

const mapStateToProps = state => {
  return { favorites: state.favorites };
}

export default connect(mapStateToProps, { fetchFavorites })(FavoriteItems);