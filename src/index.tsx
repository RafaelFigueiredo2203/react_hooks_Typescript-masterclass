import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppContext from './AppContext';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppContext/>
  </React.StrictMode>,
  document.getElementById('root')
);

