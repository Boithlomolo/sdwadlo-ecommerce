// import { StrictMode } from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
// ]);
// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/", element:<Home />},
      {
        path:"/blog",
        element:<Blog/>
      }

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  /* </StrictMode> */
)