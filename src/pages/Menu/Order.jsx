// import React from 'react'
// import "./Menu.css"
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import {
//     RiArrowGoBackFill,
//     RiShoppingCart2Line,
//   } from "react-icons/ri"
// const Navbar = () => {
//     return (
//       <div className='nav'>
//         <div className='nav-top'>
//           <Link to="/menu"><RiArrowGoBackFill/></Link>
//           <h5>Order</h5>
//           <RiShoppingCart2Line style={{visibility:'hidden'}}/>
//         </div>
//       </div>
//     )
// }

// const Itemblock = ({ Category }) => {

//   const [quantity, setQuantity] = useState(0);
  
//   const handleIncrease = async (e) => {
//     e.preventDefault();
//     setQuantity(quantity + 1);
//   };

//   const handleDecrease = async (e) => {
//     e.preventDefault();
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div className="block">
//       <h5>
//         {Category} ({quantity})
//       </h5>
//       <div className="item">
//         <img
//           src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg"
//           alt="dishes"
//         />
//         <div className="item-info">
//           <h6>Name of dishes</h6>
//           <p>$100.000</p>
//         </div>
//         <div className="additem">
//           <button onClick={handleDecrease}>-</button>
//           <input type="number" value={quantity} readOnly />
//           <button onClick={handleIncrease}>+</button>
//         </div>
//       </div>
//       <label htmlFor="note">Notes: </label>
//       <input
//         type="text"
//         id="note"
//         name="note"
//         placeholder="Add notes to the order for the best preparation"
//       />
//     </div>
//   );
// };


// const Order = () => {
//   return (
//     <div>
//         <form method='POST'>
//             <Navbar />
//             <Itemblock Category="Selected"/>
//             <button className='order'>Order</button>
//         </form>
//     </div>
//   )
// }

// export default Order





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

  const handleIncrease = (e,index) => {
    e.stopImmediatePropagation();
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
  };

  const handleDecrease = (e,index) => {
    e.stopImmediatePropagation();
    const newItems = [...items];
    if (newItems[index].quantity > 0) {
      newItems[index].quantity--;
      setItems(newItems);
    }
  };


  return (
    <div className='block'>
      <h5>
        {Category} 
      </h5>
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
      <form method='POST'>
        <Navbar />
        <Itemblock Category='Selected' />
        <button className='order'>Order</button>
      </form>
    </div>
  );
};

export default Order;
