import { RouterProvider , createBrowserRouter } from "react-router-dom"
// pages
import Home from "./pages/Home"
import HeadPhones from "./pages/HeadPhones"
import Speakers from "./pages/Speakers"
import Earphones from "./pages/Earphones"
import MainLayout from "./layout/MainLayout"
import SingleProduct from "./pages/SingleProduct"
import Chekcout from "./pages/Chekcout"
import ProtectedRotes from "./components/ProtectedRotes"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Error from "./pages/Error"
import ErrorElement from './components/ErrorElement';


import { Navigate } from "react-router-dom"

import {action as signupAction} from './pages/Signup'
import {action as signinAction} from './pages/Signin'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

import { GlobalContext } from "./context/useContextGlobal";
import { useContext } from "react";
import { useEffect } from "react";


function App() {
  const {user , dispatch , authChange} = useContext(GlobalContext);

  const routes = createBrowserRouter([
    {
      path: '/',
      element:(
        <ProtectedRotes user={user}>
          <MainLayout />
        </ProtectedRotes>
        ),
      children:[
        {
          index:true,
          element: <Home/>,
          errorElement: <Error/>,
          
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
        {
          path: '/checkout',
          element: <Chekcout/>
        },
      ]
    },
    {
      path: '/signin',
      element: user ? <Navigate to="/" /> :  <Signin/>,
      action: signinAction,
      errorElement: <Error/>
    },
    {
      path: '/signup',
      element: user ? <Navigate to="/" /> :  <Signup/>,
      action: signupAction,
      errorElement: <Error/>
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type:"SIGN_IN",
        payload:user,
      })
      dispatch({
        type:"AUTH_CHANGE",
      })
    });
  }, [])

  return <>{authChange && <RouterProvider router={routes}/>}</>
}

export default App
