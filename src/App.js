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

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
