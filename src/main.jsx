import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Booking from './Components/Booking/Booking.jsx';
import Blog from './Components/Blog/Blog.jsx';
import DoctorDetails from './Components/Doctors/DoctorDetails.jsx';







const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        loader:()=>fetch('/Doctors.json'),
        Component:Home
      },
      {
        path:"/booking",
        loader:()=>fetch('/Doctors.json'),
        Component:Booking
      },
      {
        path:"/blog",
        loader:()=>fetch('/Doctors.json'),
        Component:Blog
      },
      {
        path:"/doctordeta/:id",
        loader:()=>fetch('/Doctors.json'),
        Component:DoctorDetails
      }

    ]
  },
]);









createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
