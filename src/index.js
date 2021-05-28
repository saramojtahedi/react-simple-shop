import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import App from './App';
import store from './redux/store';

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root') );
