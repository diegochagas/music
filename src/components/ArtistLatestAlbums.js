import React from 'react';

export default class ArtistLatestAlbums extends React.Component {
  render() {
    return(
      <div className="artist-latest-albums">
        <h4>Artist's latest albums</h4>
        <ul className="albums-list">
          {this.props.albums.map(album => {
            const { images, name } = album;
            return (
              <li className="album" key={album.id}>
                <img className="folder" src={images.length ? images[0].url: ""} alt="Album folder" />
                <span className="name">{name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}