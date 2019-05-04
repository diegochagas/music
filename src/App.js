import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: []};
  }

  componentDidMount(){}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <ul>
        </ul>
      </div>
    );
  }
}

export default App;
