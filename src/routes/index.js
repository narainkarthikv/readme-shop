// Example route config for scalability
import Home from '@/pages/Home';
import Output from '@/pages/Output';
import TemplatesPage from '@/pages/TemplatesPage';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/output', element: <Output /> },
  { path: '/templates', element: <TemplatesPage /> },
  // Add more routes as needed
];
