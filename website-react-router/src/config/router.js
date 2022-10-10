import React from "react";
import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home/Home";
import Pricing from "../pages/Pricing/Pricing";

export default function AppRouter() {
  return (
    <Router>
      <>
        <Navbar/>
      </>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
  );
}
