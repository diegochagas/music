import React from 'react';

export default class ArtistLatestAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false }
  }

  render() {
    return(
      <div className="artist-latest-albums" onClick={this.toggleClass}>
        <button>Artist's latest albums</button>
        <ul className={`albums-list ${this.state.active ? "" : "hide"}`} >
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

  toggleClass = () => this.setState({active: !this.state.active});

}