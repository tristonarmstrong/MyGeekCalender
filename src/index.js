import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import './index.css';


const store = createStore(reducer, applyMiddleware(thunk, logger), )


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));
