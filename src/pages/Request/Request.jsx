import React from 'react'
import "./Request.css"
import { Link } from 'react-router-dom'
import {
    RiArrowGoBackFill,
    RiShoppingCart2Line,
  } from "react-icons/ri"


const Navbar = () => {
    return (
      <div className='nav'>
        <div className='nav-top'>
          <Link to="/home"><RiArrowGoBackFill/></Link>
          <h5>Request</h5>
          <RiShoppingCart2Line style={{visibility:'hidden'}}/>
        </div>
      </div>
    )
}

const Itemblock = () => {
    return (
      <div className='block'>
        <label htmlFor="note">Input your request: </label><br/>
        <input type="text" id="request" name="request" placeholder='Input your Request'/>
      </div>
      
    )
  }

const Request = () => {
  return (
    <div className='request'>
      <Navbar />
      <Itemblock />
      <button className='requestbtn'>Request</button>
    </div>
  )
}

export default Request
