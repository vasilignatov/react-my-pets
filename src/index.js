import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SkeletonTheme>

    <BrowserRouter baseColors="#202020" highlightColor="#444">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>

  </SkeletonTheme>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
