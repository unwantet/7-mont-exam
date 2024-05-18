import { RouterProvider , createBrowserRouter } from "react-router-dom"
// pages
import Home from "./pages/Home"
import HeadPhones from "./pages/HeadPhones"
import Speakers from "./pages/Speakers"
import Earphones from "./pages/Earphones"
import MainLayout from "./layout/MainLayout"
import SingleProduct from "./pages/SingleProduct"


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children:[
        {
          index:true,
          element: <Home/>,
          
        },
        {
          path: '/headphones',
          element: <HeadPhones/>
        },
        {
          path: '/speakers',
          element: <Speakers/>
        },
        {
          path: '/singleproduct',
          element: <SingleProduct/>
        },
        {
          path: 'product/:id'
          ,element:<SingleProduct/>
        },
        {
          path: '/earphones',
          element: <Earphones/>
        },
      ]
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App
