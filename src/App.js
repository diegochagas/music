import React from 'react';
import './App.scss';
import SpotifyAPI from './apis/SpotifyAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: []};
  }

  componentDidMount(){
    console.log(SpotifyAPI);
    /*
    SpotifyAPI.get(`&q=glass&type=track&offset=5`)
      .then(response => this.setState({tracks: response.data.tracks.items}))
      .catch(err => console.error(err));
      */
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
      </div>
    );
  }
}

export default App;
