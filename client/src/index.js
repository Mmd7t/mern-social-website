import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import reducer from './reducers/index.js';
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux';


const store = createStore(reducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
