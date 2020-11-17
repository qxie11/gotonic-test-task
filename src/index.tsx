import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import "./sass/index.scss";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

