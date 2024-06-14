import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./tailwind.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import MyRoute from "./components/MyRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <MyRoute />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
