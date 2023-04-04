import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  RiArrowGoBackFill,
  RiShoppingCart2Line,
} from 'react-icons/ri';
import './Menu.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-top'>
        <Link to='/menu'>
          <RiArrowGoBackFill />
        </Link>
        <h5>Order</h5>
        <RiShoppingCart2Line style={{ visibility: 'hidden' }} />
      </div>
    </div>
  );
};

const Itemblock = ({ Category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('DishesOrdered')){
    const data = JSON.parse(localStorage.getItem('DishesOrdered'));
    setItems(data);
    }
  }, []);

  const handleIncrease = (index) => {
    const newItems = [...items];
    newItems[index] = { 
      ...newItems[index], 
      Quantity: newItems[index].Quantity + 1 
    };
    localStorage.setItem('DishesOrdered', JSON.stringify(newItems));
    setItems(newItems);
  };
  
  const handleDecrease = (index) => {
    const newItems = [...items];
    if (newItems[index].Quantity > 0) {
      newItems[index] = { 
        ...newItems[index], 
        Quantity: newItems[index].Quantity - 1 
      };
      localStorage.setItem('DishesOrdered', JSON.stringify(newItems));
      setItems(newItems);
    }
  };
  

  return (
    <div className='block'>
      <h5>{Category}</h5>
      {items.map((item, index) => (
        <div key={index} className='item'>
          <img
            src='https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
            alt='dishes'
          />
          <div className='item-info'>
            <h6>{item.Name}</h6>
            <p>${item.Price}</p>
          </div>
          <div className='additem'>
            <button onClick={() => handleDecrease(index)}>-</button>
            <input type='number' value={item.Quantity} readOnly />
            <button onClick={() => handleIncrease(index)}>+</button>
          </div>
        </div>
      ))}
      <label htmlFor='note'>Notes: </label>
      <input
        type='text'
        id='note'
        name='note'
        placeholder='Add notes to the order for the best preparation'
      />
    </div>
  );
};


const Order = () => {
  const onOrderBtnClick = (e) => {
    e.preventDefault();
    if(localStorage.getItem('DishesOrdered') && localStorage.getItem("tableID")){
      const order = JSON.parse(localStorage.getItem('DishesOrdered'));
      console.log(order);
      const tableId = localStorage.getItem("tableID");
      console.log(tableId);
      try {
        axios.post(`http://localhost:1500/api/add-items/${tableId}`,order);
      } catch (error) {
        console.error(error);
      }
    }
  };  
  return (
    <div>
        <Navbar />
      <form>
        <Itemblock Category='Selected' />
        <button type='submit' className='order' onClick={onOrderBtnClick}>Order</button>
      </form>
    </div>
  );
};

export default Order;
