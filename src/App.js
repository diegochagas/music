import React from 'react';
import './App.scss';
import SpotifyAPI from './apis/SpotifyAPI';
const search = SpotifyAPI();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: []};
  }

  componentDidMount(){
    search.get(`?q=glass`)
      .then(response => this.setState({tracks: response.data.tracks.items}))
      .catch(err => console.error(err));
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ul>
          {this.state.tracks.map(track => {
            return <li key={track.id}>{track.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
