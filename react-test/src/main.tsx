import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.tsx';
import Page from './Page.tsx';
import Many from './Many.tsx';

const router = createHashRouter([
  { index: true, element: <App /> },
  { path: 'many', element: <Many /> },
  { path: '*', element: <Page /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
