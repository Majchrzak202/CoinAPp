import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='dev--unc4no4.us.auth0.com'
  clientId='FKNN2irhroDiMEr1Enrx5SEW7bX3Uudn'
  redirectUri={window.location.origin}>

    
    <App />
  </Auth0Provider>
);


