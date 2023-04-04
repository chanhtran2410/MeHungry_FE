import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import {
  GiMeal,
} from "react-icons/gi"
import {
  FaUser,
  FaRegBell
} from "react-icons/fa"
import {
  RxDashboard
} from "react-icons/rx"
import {
  RiBillLine
} from "react-icons/ri"

const NAME_STORAGE_KEY = "Customer_name";

const BgImage = () => {
  return (
    <div className="bgimg">
      <img src="https://www.digitalmomblog.com/wp-content/uploads/2022/08/cookie-monster-hungry-meme.jpg" alt="Logo"/>
    </div>
  );
};

const Info = () => {
  const customer_name = localStorage.getItem(NAME_STORAGE_KEY) ? JSON.parse(localStorage.getItem(NAME_STORAGE_KEY)): "unknown";
  return (
    <div className="home-info">
      <h6 className="title">Restaurent's name</h6>
      <p className="description">
        <GiMeal></GiMeal> &nbsp; 11 - Main hall
      </p>
      <p className="description">
        <FaUser></FaUser> &nbsp; {customer_name}
      </p>
    </div>
  )
}

const Home = () => {
  return (
    <div className='Home'>
      <BgImage />
      <Info/>
      <div className='btn'>
        <Link to="/menu" style={{ textDecoration: 'none' }}><button className='order'><RxDashboard /> <p>Order</p></button></Link>
        <Link to="/checkout" style={{ textDecoration: 'none' }}><button className='checkout'><RiBillLine/><p>Check out</p></button></Link>
        <Link to="/request" style={{ textDecoration: 'none' }}><button className='staff'><FaRegBell/> <p>Staff</p></button></Link>
      </div>
    </div>
  )
}

export default Home
