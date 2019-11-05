import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bookFactory from "./bookFactory";
import { BrowserRouter as Router } from "react-router-dom";

const AppWithRouter = () => {
  return (
    
      <App bookFactory={bookFactory} />
    
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));
