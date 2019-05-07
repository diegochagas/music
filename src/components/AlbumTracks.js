import React from 'react';

export default class AlbumTracks extends React.Component {
  constructor(props){
    super(props);
    this.state = { active: false };
  }

  render() {
    return(
      <div className={`album-tracks ${this.state.active ? "spread": ""}`} onClick={this.toggleClass}>
        <h4>Tracks</h4>
        <ul className={`tracks ${this.state.active ? "" : "hide"}`}>
          {this.props.tracks.map(track => {
            return (
              <li className="track" key={track.id}>
                <span>{track.track_number}</span>
                <span>{track.name}</span>
                <span>{this.renderDuration(track.duration_ms)}</span>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

  renderDuration = duration => {
    const seconds = this.millisecondsToSeconds(duration)
    const minutes = this.millisecondsToMinutes(duration);
    return `${this.buildNumberTime(minutes)}:${this.buildNumberTime(seconds)}`;
  }
  
  millisecondsToSeconds = milliseconds => Math.floor((milliseconds / 1000) % 60);
  
  millisecondsToMinutes = milliseconds => Math.floor((milliseconds / (1000 * 60)) % 60);
  
  buildNumberTime = time => time < 10 ? `0${time}` : time;

  toggleClass = () => this.setState({ active: !this.state.active });
}