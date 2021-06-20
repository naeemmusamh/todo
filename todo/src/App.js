import React from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./components/main/main.js";
import Header from "./components/header/header.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}
