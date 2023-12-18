import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import axios from 'axios';
import swDev from './swDev';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.withCredentials = true;

swDev(); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
