// import React, { useState, useEffect } from 'react'
// import "./Menu.css"
// import { Link } from 'react-router-dom'
// import Item from '../../components/Item'
// import {
//   RiArrowGoBackFill,
//   RiShoppingCart2Line,
//   RiSearchLine
// } from "react-icons/ri"
// import { Badge, Space } from 'antd';

// const Navbar = ({ totalCount }) => {
//   return (
//     <div className='nav'>
//       <div className='nav-top'>
//         <Link to="/home"><RiArrowGoBackFill/></Link>
//         <h5>Menu</h5>
//         <Badge count={totalCount} showZero>
//           <RiShoppingCart2Line />
//         </Badge>
//       </div>
//       <div className="search-wrapper">
//         <label htmlFor="search-form">
//           <button><RiSearchLine/></button>
//           <input
//             type="search"
//             name="search-form"
//             id="search-form"
//             className="search-input"
//             placeholder="Search"
//           />
//         </label>
//       </div>
//     </div>
//   )
// }

// const Itemblock = ({ Category }) => {
//   return (
//     <div className='block'>
//       <h5>{Category}</h5>
//       <Item Name="Name of dishes" Price="100.99" />
//       <Item Name="Name of dishes 2" Price="200.99" />
//     </div>
//   )
// }

// const Menu = () => {
//   const [totalCount, setTotalCount] = useState(0);

//   useEffect(() => {
//     let count = 0;

//     const order = JSON.parse(localStorage.getItem('DishesOrdered'));
//     if(order) {
//       Object.values(order).forEach(({ quantity }) => {
//         count += quantity;
//       });
//     }
//     console.log('totalCount', count);
//     setTotalCount(count);
//   }, []);

//   return (
//     <div className='menu'>
//       <Navbar totalCount={totalCount} />
//       <Itemblock Category="Food" />
//       <Itemblock Category="Drinks" />
//       <Link to="/order"><button className='order'>Order</button></Link>
//     </div>
//   )
// }

// export default Menu




import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Item from '../../components/Item';
import {
  RiArrowGoBackFill,
  RiShoppingCart2Line,
  RiSearchLine
} from 'react-icons/ri';
import { Badge, Space } from 'antd';

const Navbar = () => {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const updateTotalCount = () => {
      const order = localStorage.getItem('TotalQuantity');
      let totalCount = 0;
      if (order) {
        totalCount = order;
      }
      setTotalCount(totalCount);
    };

    updateTotalCount();

    window.addEventListener('storage', updateTotalCount);
  }, []);
  return (
    <div className='nav'>
      <div className='nav-top'>
        <Link to='/home'>
          <RiArrowGoBackFill />
        </Link>
        <h5>Menu</h5>
        <Badge count={totalCount} showZero>
          <RiShoppingCart2Line />
        </Badge>
      </div>
      <div className='search-wrapper'>
        <label htmlFor='search-form'>
          <button>
            <RiSearchLine />
          </button>
          <input
            type='search'
            name='search-form'
            id='search-form'
            className='search-input'
            placeholder='Search'
          />
        </label>
      </div>
    </div>
  );
};

const Itemblock = ({ Category }) => {
  return (
    <div className='block'>
      <h5>{Category}</h5>
      <Item Name='Name of dishes' Price='100.99' />
      <Item Name='Name of dishes 2' Price='200.99' />
    </div>
  );
};

const Menu = () => {

  return (
    <div className='menu'>
      <Navbar/>
      <Itemblock Category='Food' />
      <Itemblock Category='Drinks' />
      <Link to='/order'>
        <button className='order'>Order</button>
      </Link>
    </div>
  );
};

export default Menu;
