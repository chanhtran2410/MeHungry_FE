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
      <img src="https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-scaled.jpg" alt="Logo"/>
    </div>
  );
};

const Info = () => {
  const customer_name = localStorage.getItem(NAME_STORAGE_KEY) ? JSON.parse(localStorage.getItem(NAME_STORAGE_KEY)): "unknown";
  const table_number = localStorage.getItem('Table_number');
  return (
    <div className="home-info">
      <h6 className="title">Restaurent's name</h6>
      <p className="description">
        <GiMeal></GiMeal> &nbsp; Table {table_number}
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
        <Link to="/check_out" style={{ textDecoration: 'none' }}><button className='checkout'><RiBillLine/><p>Check out</p></button></Link>
        <Link to="/request" style={{ textDecoration: 'none' }}><button className='staff'><FaRegBell/> <p>Staff</p></button></Link>
      </div>
    </div>
  )
}

export default Home
