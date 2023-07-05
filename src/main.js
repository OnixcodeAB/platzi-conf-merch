import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './style/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tab="Home" />
  </React.StrictMode>
);
