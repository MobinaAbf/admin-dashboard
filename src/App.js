import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import About from "./Pages/About.jsx";
import LogOut from "./Pages/LogOut.jsx";
import NewLogin from "./Pages/NewLogin.jsx";
import Users from "./Pages/Users.jsx";
import ProductList from "./Pages/ProductList.jsx";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css"

export default function App() {  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/logOut" element={<LogOut />} />
        <Route path="/newLogin" element={<NewLogin />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </Sidebar>
  </BrowserRouter>
  );
}
