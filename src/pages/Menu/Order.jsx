import React from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom'
import {
    RiArrowGoBackFill,
    RiShoppingCart2Line,
  } from "react-icons/ri"
const Navbar = () => {
    return (
      <div className='nav'>
        <div className='nav-top'>
          <Link to="/menu"><RiArrowGoBackFill/></Link>
          <h5>Order</h5>
          <RiShoppingCart2Line style={{visibility:'hidden'}}/>
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
          <input type="number" id="quantity" name="quantity" min="1" max="20" />
        </div>
        <div className='item'>
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg" alt="dishes" />
          <div className='item-info'>
            <h6>Name of dishes</h6>
            <p>$100.000</p>
          </div>
          <input type="number" id="quantity" name="quantity" min="1" max="20" />
        </div>
        <label htmlFor="note">Notes: </label>
        <input type="text" id="note" name="note" placeholder='Add notes to the order for the best preparation'/>
      </div>
      
    )
  }

const Order = () => {
  return (
    <div>
        <form method='POST'>
            <Navbar />
            <Itemblock Category="Selected"/>
            <button className='order'>Order</button>
        </form>
    </div>
  )
}

export default Order
