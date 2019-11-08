/* Import statements */
import React from 'react';
import ReactDOM from 'react-dom';

/* App is the entry point to the React code.*/
import App from './App';
import App2 from './App2';

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // Comment/uncomment browserRouter above or below to chose which to render
    // <BrowserRouter>
    //     <App2 />
    // </BrowserRouter>
    , document.getElementById('root'));