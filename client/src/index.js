import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(

  <React.StrictMode>
    <Router>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet" />
      <App />
    </Router>
  </React.StrictMode>
  ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
