import React from 'react';

export default class AlbumTracks extends React.Component {
  render() {
    return(
      <div className="album-tracks">
        <ul className="tracks">
          {this.props.tracks.map(track => {
            return (
              <li className="track" key={track.id}>
                <span>{track.track_number}</span>
                <span>{track.name}</span>
                <span>{track.duration_ms}</span>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}