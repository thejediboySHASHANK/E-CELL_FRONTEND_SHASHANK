import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <NavBar />
    <Main />
  </React.StrictMode>
);

