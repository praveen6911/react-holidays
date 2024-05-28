// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';

/*
 *
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 *   - Search Container
 *   - Restaurant container
 *     - Restaurant card
 * Footer
 *   - Links
 *   - Copyright
 *
 */

import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/>
      {/* <Footer /> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        
        path: "/aboutus",
        element: <AboutPage />,
      },
      { path: "/contactus", element: <ContactUs /> },
    ],
    errorElement: <Error/> ,
  },

]);

export default function App() {
  return <RouterProvider router={router} />;
}
