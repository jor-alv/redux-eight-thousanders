import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/application.scss';
import App from './app/app';
import { store } from './app/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
