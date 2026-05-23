import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.js';
import './main.scss';

const root = document.getElementById('root');

if (!root) {
  throw new Error(
    'Root element not found. Make sure index.html has <div id="root"></div>.',
  );
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
