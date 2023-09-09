import React, { useState } from "react";
import {
  FaTh,
  FaUser,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUser />,
    },
    {
      path: "/logout",
      name: "LogOut",
      icon: <FaRegChartBar />,
    },
    {
      path: "/newlogin",
      name: "NewLogin",
      icon: <FaCommentAlt />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productlist",
      name: "ProductList",
      icon: <FaThList />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "60px" }} className="sidebar">
        <div className="top-section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }}  className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div  style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}