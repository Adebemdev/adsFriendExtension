import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SidePanel from './SidePanel';

const rootElement = document.createElement('div');
rootElement.className = 'container';
document.body.appendChild(rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <SidePanel />
  </StrictMode>
);
