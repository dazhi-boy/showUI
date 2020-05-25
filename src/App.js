import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {HttpGet} from './httpUtil';
import Products from './shop/Products';

function App() {
  function getdate(){
    var data = HttpGet('/base/user/1');
    // console.log(data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={getdate}>测试调用后台</button>
        <Products name="sdfsf"></Products>
      </header>
    </div>
  );
}

export default App;
