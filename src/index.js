import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

import { Provider } from 'react-redux';
import ReduxStore from './store';

// To run json server:
//     json-server --watch db.json --port 3004

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ ReduxStore() }>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


