import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Pages/Home";
import { About } from "../components/Pages/About";
import { Blog } from "../components/Pages/Blog";
import { Contact } from "../components/Pages/Contact";
import NavBar from "../components/NavBar";
import PrivateRoute from "../PrivateRoute";
import Login from "../components/Pages/Login";

const Navigate = () => {
    return (<>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/"
              element={
                <PrivateRoute>
                  <NavBar />
                  <Home />
                </PrivateRoute>
              } />
            <Route path="/about"
              element={
                <PrivateRoute>
                  <NavBar />
                  <About />
                </PrivateRoute>
              } />
            <Route path="/blog"
              element={
                <PrivateRoute>
                  <NavBar />
                  <Blog />
                </PrivateRoute>
              } />
            <Route path="/contact"
              element={
                <PrivateRoute>
                  <NavBar />
                  <Contact />
                </PrivateRoute>
              } />
          </Routes>
        </BrowserRouter>
      </>
      );
}

export default Navigate