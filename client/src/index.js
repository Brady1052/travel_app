import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.render(
  <Auth0Provider
  domain='dev-9yjaf54g.us.auth0.com'
  clientId='x1wpCnsrHE99iGRwieqItrgM1fHc3Ry7'
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
