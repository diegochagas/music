import React from 'react';
import './FavoriteItems.scss';
import { connect } from 'react-redux';
import { fetchIsFavorite } from '../actions';

class FavoriteItems extends React.Component {

  componentDidMount() {
    this.props.fetchIsFavorite(this.props.itemId);
  }

  render(){
    const { id, isFavorite } = this.props.favorite;
    return(
      <div className="FavoriteItems">
        <span>Favorite: </span>
        <i className={`${isFavorite && (this.props.itemId === id) ? "fas" : "far"} fa-star`} onClick={this.onFavoriteClick}></i>
      </div>
    );
  }

  onFavoriteClick = () => {
    this.props.fetchIsFavorite(this.props.itemId);
  }
  
}

const mapStateToProps = state => {
  return { favorite: state.favorite };
}

export default connect(mapStateToProps, { fetchIsFavorite })(FavoriteItems);