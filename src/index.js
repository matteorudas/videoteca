import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouters from './routers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>
);


