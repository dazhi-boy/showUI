import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Product from './shop/Product';
import FriendList from './chat/friend/FriendList';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Nav from './nav';
ReactDOM.render(
    <Router>
        <div>
            <Nav/>
            <Route exact path="/" component={App} />
            <Route  path="/Product" component={Product} />
            <Route  path="/FriendList" component={FriendList} />
        </div>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
