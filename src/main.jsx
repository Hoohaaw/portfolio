import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/tokens.css';
import './css/index.css';
import App from './App.jsx';

const asyncFontLink = document.getElementById('google-fonts-async');
if (asyncFontLink) asyncFontLink.media = 'all';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
