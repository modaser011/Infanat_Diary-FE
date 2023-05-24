import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VacBabydata } from './data/vacBabydata';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VacBabydata>
    <App/>
    </VacBabydata>
  </React.StrictMode>
);
