import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';

//get a reference to the div with Id root
const el = document.getElementById('root');

// tell react to take command
const root = ReactDOM.createRoot(el);

//show the component on the screen
root.render(<App />);