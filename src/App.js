import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ChampIcon';
import ChampIcon from './components/ChampIcon';



function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="Champ-Flex">
            <ChampIcon />
          </div>
        </div>
        <div className="col-sm-6">
          <p>Worlds Best TFT Planner</p>
        </div>
      </div>
    </div>
  );
}

export default App;
