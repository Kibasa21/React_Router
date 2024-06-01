import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {path: '/', element: <HomePage />}, //main page, slash nothing
]);//Routes are simply paths <=> components mapping;
//So for which path (like "/products") should which component (like "<Products />") be loaded?

function App() {
  return <RouterProvider router={router} />;
}

export default App;
