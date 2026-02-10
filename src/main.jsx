import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Root from './Components/Root.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import Profile from './Components/Profile/Profile.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import Home from './Components/Home.jsx';
import GameDetails from './Components/GameDetails.jsx';

const router=createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [ 
      { index: true, element: <About></About> },
      { path: "*", Component: ErrorPage },
      { path: "login", element: <Login></Login>},
      { path: "profile", element: <PrivateRoute><Profile></Profile></PrivateRoute> },
      { path: "reg", element: <Register></Register>},
      { path: "contact", element: <Contact></Contact> },
      { path: "home", loader: ()=>fetch("/gameData.json") , element: <PrivateRoute><Home></Home></PrivateRoute> },

      {
        path: "/gameDetails/:id",
        loader: async({params})=>{
          const res =await fetch("/gameData.json");
          const data=await res.json();
          return data.find(app => app.id == params.id)
        },
        element: <PrivateRoute><GameDetails></GameDetails></PrivateRoute>
      }

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
