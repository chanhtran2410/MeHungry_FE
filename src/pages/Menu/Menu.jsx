// import React, { useState, useEffect } from 'react';
// import './Menu.css';
// import { Link } from 'react-router-dom';
// import Item from '../../components/Item';
// import {
//   RiArrowGoBackFill,
//   RiShoppingCart2Line,
//   RiSearchLine
// } from 'react-icons/ri';
// import { Badge, Space } from 'antd';

// const Navbar = () => {
//   const [totalCount, setTotalCount] = useState(0);

//   useEffect(() => {
//     const updateTotalCount = () => {
//       const order = localStorage.getItem('TotalQuantity');
//       let totalCount = 0;
//       if (order) {
//         totalCount = order;
//       }
//       setTotalCount(totalCount);
//     };

//     updateTotalCount();

//     window.addEventListener('storage', updateTotalCount);
//   }, []);
//   return (
//     <div className='nav'>
//       <div className='nav-top'>
//         <Link to='/home'>
//           <RiArrowGoBackFill />
//         </Link>
//         <h5>Menu</h5>
//         <Badge count={totalCount} showZero>
//           <RiShoppingCart2Line />
//         </Badge>
//       </div>
//       <div className='search-wrapper'>
//         <label htmlFor='search-form'>
//           <button>
//             <RiSearchLine />
//           </button>
//           <input
//             type='search'
//             name='search-form'
//             id='search-form'
//             className='search-input'
//             placeholder='Search'
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// const Itemblock = ({ Category }) => {
//   return (
//     <div className='block'>
//       <h5>{Category}</h5>
//       <Item Name='Name of dishes' Price='100.99' Description='Classic spaghetti with bolognese sauce' />
//       <Item Name='Name of dishes 2' Price='200.99' Description='Traditional Italian pizza with tomato sauce and mozzarella cheese'/>
//     </div>
//   );
// };

// const Menu = () => {

//   return (
//     <div className='menu'>
//       <Navbar/>
//       <Itemblock Category='Food' />
//       <Itemblock Category='Drinks' />
//       <Link to='/order'>
//         <button className='order'>Order</button>
//       </Link>
//     </div>
//   );
// };

// export default Menu;



import './Menu.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Item from '../../components/Item';
import {
  RiArrowGoBackFill,
  RiShoppingCart2Line,
  RiSearchLine
} from 'react-icons/ri';
import { Badge, Space } from 'antd';
import axios from 'axios';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-top'>
        <Link to='/home'>
          <RiArrowGoBackFill />
        </Link>
        <h5>Menu</h5>
          <RiShoppingCart2Line />
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

const Itemblock = ({ Category, items }) => {
  return (
    <div className='block'>
      <h5>{Category}</h5>
      {items.map((item) => (
        <Item Name={item.item_name} Price={item.is_available ? item.price : 'Unavailable'} Description={item.description} />
      ))}
    </div>
  );
};

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1500/api/menu");
        setMenuData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  
  const foodItems = menuData.filter((item) => item.category === 'food');
  const drinkItems = menuData.filter((item) => item.category === 'drink');

  return (
    <div className='menu'>
      <Navbar/>
      {menuData.length > 0 && (
        <>
          <Itemblock Category='Food' items={foodItems} />
          <Itemblock Category='Drinks' items={drinkItems} />
          <Link to='/order'>
            <button className='order'>Order</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Menu;
