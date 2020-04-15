import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ChampIcon';
import ChampIcon from './components/ChampIcon';
import Nav from './Nav';


function App() {
  return (
    <div className="container">
      <div className="row">
        <Nav />
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="Champ-Flex">
            <ul className="flex-container champBackground champBorder">
              <ChampIcon />
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="Champ-Flex">
            <ul className="flex-container champBackground champBorder">
              <ChampIcon />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
