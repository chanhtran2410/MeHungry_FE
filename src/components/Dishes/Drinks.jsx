import React from 'react'
import './Food.css'
import { Link } from 'react-router-dom'
import {RiDeleteBin6Line ,RiEdit2Line} from 'react-icons/ri'

const Item =() =>{
  return (
    <div className='item_block'>
        <div className='item_img'>
          <img src="https://www.crazymasalafood.com/wp-content/images/2017/07/Chicken-Rice.jpg" alt="item_img" />
        </div>
        <div className='item_info'>
          <h3>Name</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>
        <div className='item_avai'>
          <h2>Available</h2>
        </div>
        <div className='item_price'>
        <div className='edit'>
            <Link><button><RiDeleteBin6Line/></button></Link>
            <Link to='/manager/edit'><button><RiEdit2Line/></button></Link>
          </div>
          <div className='price'>
            <h2>$100.000</h2>
          </div>
        </div>
      </div>
  )
}

const Drinks = () => {
  return (
    <div className='food'>
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default Drinks
