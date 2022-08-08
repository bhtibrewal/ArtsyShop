import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { makeServer } from "./server";
import { ProductContextProvider, ThemeProvider, ToastProvider, UserContextProvider, ProductFilterProvider } from './context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <UserContextProvider>
          <ProductContextProvider>
            <ProductFilterProvider>
              <ToastProvider>
                <App />
              </ToastProvider>
            </ProductFilterProvider>
          </ProductContextProvider>
        </UserContextProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

