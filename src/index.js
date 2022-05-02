import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <App />
      </Router>
   </ChakraProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);


