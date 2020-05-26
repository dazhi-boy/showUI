import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import styles from './App.css';
import { Flex, WhiteSpace } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

class App extends Component {
  
  render() {
    return (
      <div className={styles.App}>
        <div className={styles['App-header']}>
          <Flex>
            <Flex.Item><PlaceHolder/></Flex.Item>
            <Flex.Item><PlaceHolder/></Flex.Item>
          </Flex>
          <h2>Welcome to React</h2>
        </div>
        <p className={styles['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">This is a button</Button>
      </div>
    );
  }
}

export default App;
