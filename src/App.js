import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import MusicList from './components/MusicList';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <MusicList />
      </div>
    );
  }
}

export default App;
