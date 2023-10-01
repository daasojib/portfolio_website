import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Content from './components/Content/Content';
import EmailContact from './components/Contact/EmailContact';
import Resume from './components/Content/Resume';
import About from './components/About';
import Projects from './components/Content/Projects';
import ContactInfo from './components/Contact/ContactInfo';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
     {
      path: '/',
      element: <Content></Content>
     },
     {
      path: '/contact',
      element: <EmailContact></EmailContact>
     },
     {
      path: '/resume',
      element: <Resume></Resume>
     },
     {
      path: '/about',
      element: <About></About>
     },
     {
      path: '/projects',
      element: <Projects></Projects>
     },
     {
      path: '/intro',
      element: <ContactInfo></ContactInfo>
     },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
