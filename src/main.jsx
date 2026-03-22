import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';
//import { ErrorPage } from './pages/ErrorPage.jsx';
import './index.css'
import App from './App.jsx'
import { Projects } from "./pages/Projects.jsx";
import { Contact } from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    //element: <div>Hey Oh</div>,
    element: <App />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
         path: '/about',
         element: <About />
      }
    ]
  }
])

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);