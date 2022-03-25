import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { makeServer } from "./server";
import { ProductContextProvider, ThemeProvider, UserContextProvider } from './context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <UserContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </UserContextProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

