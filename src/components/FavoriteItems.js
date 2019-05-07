import React from 'react';
import './FavoriteItems.scss';
import { connect } from 'react-redux';
import { fetchIsFavorite } from '../actions';

class FavoriteItems extends React.Component {

  componentDidMount() {
    this.props.fetchIsFavorite(this.props.itemId);
  }

  render(){
    return(
      <div className="FavoriteItems">
        <span>Favorite: </span>
        <i className={`${this.props.isFavorite ? "fas" : "far"} fa-star`} onClick={this.onFavoriteClick}></i>
      </div>
    );
  }

  onFavoriteClick = event => {
    this.props.fetchIsFavorite(this.props.itemId);
  }
  
}

const mapStateToProps = state => {
  return { iFavorite: state.isFavorite };
}

export default connect(mapStateToProps, { fetchIsFavorite })(FavoriteItems);