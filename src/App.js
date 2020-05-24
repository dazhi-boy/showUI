import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  function getdate(){
    axios.get('/base/user/1')
    .then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={getdate}>测试调用后台</button>
      </header>
    </div>
  );
}

export default App;
