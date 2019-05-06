import React from 'react';
import './FavoriteItems.scss';
import { connect } from 'react-redux';
import { fetchIsFavorite } from '../actions';

class FavoriteItems extends React.Component {
  
  render(){
    console.log(this.props);
    return(
      <div className="FavoriteItems">
        <i className={`${this.props.isFavorite ? "fas" : "far"} fa-star`} onClick={this.onFavoriteClick}></i>
      </div>
    );
  }

  onFavoriteClick = event => {
    this.props.fetchIsFavorite(this.props.itemId);
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const isFavorite = state.favorites.find(favorite => favorite.itemId === ownProps.id);
  return { iFavorite: isFavorite };
}

export default connect(mapStateToProps, { fetchIsFavorite })(FavoriteItems);