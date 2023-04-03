import React from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom'
import Item from '../../components/Item'
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
      <Item Name="Name of dishes" Price="100.99" />
      <Item Name="Name of dishes 2" Price="200.99" />
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
