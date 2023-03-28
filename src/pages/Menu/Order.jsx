import React, { useState, useEffect } from 'react';
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
    const data = JSON.parse(localStorage.getItem('DishesOrdered'));
    setItems(data);
  }, []);

  const handleIncrease = (index) => {
    const newItems = [...items];
    newItems[index] = { 
      ...newItems[index], 
      quantity: newItems[index].quantity + 1 
    };
    localStorage.setItem('DishesOrdered', JSON.stringify(newItems));
    setItems(newItems);
  };
  
  const handleDecrease = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 0) {
      newItems[index] = { 
        ...newItems[index], 
        quantity: newItems[index].quantity - 1 
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
            <input type='number' value={item.quantity} readOnly />
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
  return (
    <div>
        <Navbar />
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <Itemblock Category='Selected' />
        <button className='order'>Order</button>
      </form>
    </div>
  );
};

export default Order;
