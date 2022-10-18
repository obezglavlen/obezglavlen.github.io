import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.scss';
import { HashRouter } from 'react-router-dom';
import './util';
import createStore from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore()}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);
