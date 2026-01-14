
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const render = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Root element not found");
    return;
  }
  
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render React app:", error);
  }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  render();
} else {
  document.addEventListener('DOMContentLoaded', render);
}
