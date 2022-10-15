import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.scss';
import {HashRouter} from 'react-router-dom';
import './util';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>
);
