import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, //isso vai encobrir tudo que tiver como children dele
    errorElement: <ErrorPage />, //isso serve para quando você tenta entrar numa path que não existe
    children: [
      { path: '', element: <HomePage /> }, //main page, slash nothing
      { path: 'products', element: <ProductsPage /> }, //TIRAR A BARRA FAZ COM QUE ISSO VIRE RELATIVE PATH
      { path: 'products/:productId', element: <ProductDetailPage /> } //Esse productId é como se fosse um prop, ele vai receber o nome, ele é dinâmico
    ]
  },
]);//Routes are simply paths <=> components mapping;
//So for which path (like "/products") should which component (like "<Products />") be loaded?

function App() {
  return <RouterProvider router={router} />;
}

export default App;
