import { createBrowserRouter } from 'react-router-dom';
import Checkbox from './pages/checkbox/Checkbox';

const router = createBrowserRouter([
  {
    path: '/checkbox',
    element: (
      <Checkbox />
    ),
  },
]);

export default router;
