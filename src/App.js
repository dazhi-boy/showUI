import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import styles from './App.css';
import axios from 'axios';

const customIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
    
  </svg>
)

function getdate(){
  axios.get('/shop/product').then(
    (response) => {
      // this.setState({
      //   items: response.data.data.records
      // });
      console.log(response);
    }
  ) 
}

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <button onClick={getdate}>测试调用后台</button>
        <Button type="primary">This is a button</Button>
      </div>
    );
  }
}

export default App;
