// import './Menu.css';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Item from '../../components/Item';
// import {
//   RiArrowGoBackFill,
//   RiShoppingCart2Line,
//   RiSearchLine
// } from 'react-icons/ri';
// import { Badge, Space } from 'antd';
// import axios from 'axios';

// const Navbar = () => {
//   return (
//     <div className='nav'>
//       <div className='nav-top'>
//         <Link to='/home'>
//           <RiArrowGoBackFill />
//         </Link>
//         <h5>Menu</h5>
//         <Badge count={totalcount} showZero>
//            <RiShoppingCart2Line />
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

// const Itemblock = ({ Category, items }) => {
//   return (
//     <div className='block'>
//       <h5>{Category}</h5>
//       {items.map((item) => (
//         <Item Name={item.item_name} Price={item.is_available ? item.price : 'Unavailable'} Description={item.description} />
//       ))}
//     </div>
//   );
// };

// const Menu = () => {
//   const [menuData, setMenuData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:1500/api/menu");
//         setMenuData(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

  
//   const foodItems = menuData.filter((item) => item.category === 'food');
//   const drinkItems = menuData.filter((item) => item.category === 'drink');

//   return (
//     <div className='menu'>
//       <Navbar/>
//       {menuData.length > 0 && (
//         <>
//           <Itemblock Category='Food' items={foodItems} />
//           <Itemblock Category='Drinks' items={drinkItems} />
//           <Link to='/order'>
//             <button className='order'>Order</button>
//           </Link>
//         </>
//       )}
//     </div>
//   );
// };

// export default Menu;





// import './Menu.css';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Item from '../../components/Item';
// import {
//   RiArrowGoBackFill,
//   RiShoppingCart2Line,
//   RiSearchLine
// } from 'react-icons/ri';
// import { Badge, Space } from 'antd';
// import axios from 'axios';

// const Navbar = ({ totalcount }) => {
//   return (
//     <div className='nav'>
//       <div className='nav-top'>
//         <Link to='/home'>
//           <RiArrowGoBackFill />
//         </Link>
//         <h5>Menu</h5>
//         <Link to='/order'>
//           <Badge count={totalcount} showZero>
//             <RiShoppingCart2Line />
//           </Badge>
//         </Link>
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

// const Itemblock = ({ Category, items }) => {
//   return (
//     <div className='block'>
//       <h5>{Category}</h5>
//       {items.map((item) => (
//         <Item Name={item.item_name} Price={item.is_available ? item.price : 'Unavailable'} Description={item.description} />
//       ))}
//     </div>
//   );
// };

// const Menu = () => {
//   const [menuData, setMenuData] = useState([]);
//   const [totalcount, setTotalCount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:1500/api/menu");
//         setMenuData(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const dishesOrdered = JSON.parse(localStorage.getItem("DishesOrdered")) || [];
//       const totalCount = dishesOrdered.reduce((total, dish) => total + dish.Quantity, 0);
//       setTotalCount(totalCount);
//     }, 50);
//   }, [localStorage.getItem("DishesOrdered")]);

//   const foodItems = menuData.filter((item) => item.category === 'food');
//   const drinkItems = menuData.filter((item) => item.category === 'drink');

//   return (
//     <div className='menu'>
//       <Navbar totalcount={totalcount} />
//       {menuData.length > 0 && (
//         <>
//           <Itemblock Category='Food' items={foodItems} />
//           <Itemblock Category='Drinks' items={drinkItems} />
//           <Link to='/order'>
//             <button className='order'>Order</button>
//           </Link>
//         </>
//       )}
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

const Navbar = ({ totalcount, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className='nav'>
      <div className='nav-top'>
        <Link to='/home'>
          <RiArrowGoBackFill />
        </Link>
        <h5>Menu</h5>
        <Link to='/order'>
          <Badge count={totalcount} showZero>
            <RiShoppingCart2Line />
          </Badge>
        </Link>
      </div>
      <div className='search-wrapper'>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='search-form'>
            <button type='submit'>
              <RiSearchLine />
            </button>
            <input
              type='search'
              name='search-form'
              id='search-form'
              className='search-input'
              placeholder='Search'
              value={searchQuery}
              onChange={handleQueryChange}
            />
          </label>
        </form>
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
  const [totalcount, setTotalCount] = useState(0);
  const [searchResults, setSearchResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1500/api/menu');
        setMenuData(response.data);
        setSearchResults(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered')) || [];
      const totalCount = dishesOrdered.reduce((total, dish) => total + dish.Quantity, 0);
      setTotalCount(totalCount);
    }, 50);
  }, [localStorage.getItem('DishesOrdered')]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredResults = menuData.filter((item) =>
      item.item_name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const foodItems = searchResults
    ? searchResults.filter((item) => item.category === 'food')
    : menuData.filter((item) => item.category === 'food');

  const drinkItems = searchResults
    ? searchResults.filter((item) => item.category === 'drink')
    : menuData.filter((item) => item.category === 'drink');

  return (
    <div className='menu'>
      <Navbar totalcount={totalcount} handleSearch={handleSearch} />
      {searchResults && searchResults.length === 0 && (
        <p>No items found with that name</p>
      )}
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
