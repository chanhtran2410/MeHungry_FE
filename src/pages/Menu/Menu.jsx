import React from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom'
import {
  RiArrowGoBackFill,
  RiShoppingCart2Line,
  RiSearchLine
} from "react-icons/ri"
import {
  AiOutlinePlusCircle
} from "react-icons/ai"


const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-top'>
        <Link to="/home"><RiArrowGoBackFill/></Link>
        <h5>Menu</h5>
        <RiShoppingCart2Line />
      </div>
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <button><RiSearchLine/></button>
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search"
          />
        </label>
      </div>
    </div>
  )
}

const Itemblock = ({Category}) => {
  return (
    <div className='block'>
      <h5>{Category} (Quantity)</h5>
      <div className='item'>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg" alt="dishes" />
        <div className='item-info'>
          <h6>Name of dishes</h6>
          <p>$100.000</p>
        </div>
        <AiOutlinePlusCircle/>
      </div>
      <div className='item'>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg" alt="dishes" />
        <div className='item-info'>
          <h6>Name of dishes</h6>
          <p>$100.000</p>
        </div>
        <AiOutlinePlusCircle/>
      </div>
    </div>
    
  )
}

const Menu = () => {
  return (
    <div className='menu'>
      <Navbar />
      <Itemblock Category = "Food" />
      <Itemblock Category = "Drinks" />
      <Link to="/order"><button className='order'>Order</button></Link>
    </div>
  )
}

export default Menu
