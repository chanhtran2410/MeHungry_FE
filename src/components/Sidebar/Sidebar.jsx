import React from 'react'
import './Sidebar.css'
import {Link, useLocation} from "react-router-dom"
import { useState } from "react";

import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlineAppstore, AiOutlineHome} from 'react-icons/ai'



const Logo = () => {
  return (
    <div className="logo">
      <img src='/src/assets/logo.png' alt='Logo' />
      <h4><b>RESTAURANT NAME</b></h4>
    </div>
  );
};


const SideBarItem = ({ Item, page, href }) => {
  const location = useLocation();

  // Check if the current path matches the `href` prop
  const isActive = location.pathname === href;
  return (
    <>
      <Link className="sidebar_link" to={href}>
        <div className={isActive ? "sidebar_item active" : "sidebar_item"}>
          {<Item className="sidebar_img" size={".8em"} />}
          <h3 className={isActive ? "active" : ""}>
            {page}
          </h3>
        </div>
      </Link>
    </>
  );
};


const Sidebar = () => {
  const [onHover, setOnHover] = useState(false);
  const [onHover2, setOnHover2] = useState(false);
  return (
    <div className='sb'>
      <div className='bground'>
        <div className='sidebar'>
          <Logo/>
          <div className='sidebar_container'>
            <SideBarItem Item={BiHomeAlt2} page="Home" href="/manager" id="manager" />
            <SideBarItem Item={AiOutlineAppstore} page="Menu" href="/manager/menu" id="menu"/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
