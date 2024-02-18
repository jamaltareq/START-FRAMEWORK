
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Portfolio from './Components/Portofolio/Portfolio';

let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> }
    ]
  }
])



export default function App() {
  return <RouterProvider router={routers}>

  </RouterProvider>
}
