import React from 'react';
import Home from './Components/Home';
import Staking from './Components/Staking';
import Pool from './Components/Pool';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
      <Home/>
      <Pool />
      <Staking />
    </React.Fragment>
  );
}

export default App;
