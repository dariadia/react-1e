// Routing = the process of redirecting a user to different pages based on their action or request.
// React: uses external lib (React router)
// https://v5.reactrouter.com/web/guides/quick-start

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './1.App';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
);

// types:
// BrowserRouter: for most apps. uses HTML5 history API
// HashRouter: uses the hash portion of the URL (#). NOTE: Hash history does not support location.key or location.state
// MemoryRouter: keeps the history of your “URL” in memory (does not read or write to the address bar). Use: in tests and non-browser environments like React Native.
// StaticRouter: never changes location. Use: SSR scenarios when the user isn’t clicking around.
