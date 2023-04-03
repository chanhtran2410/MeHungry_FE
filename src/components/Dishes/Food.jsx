// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Food.css';
// import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';

// const Item = ({ item }) => {
//   const availability = item.is_available ? 'Available' : 'Unavailable';
//   return (
//     <div className='item_block'>
//       <div className='item_img'>
//         <img src="https://www.crazymasalafood.com/wp-content/images/2017/07/Chicken-Rice.jpg" alt="item_img" />
//       </div>
//       <div className='item_info'>
//         <h3>{item.item_name}</h3>
//         <p>{item.description}</p>
//       </div>
//       <div className='item_avai'>
//         <h2>{availability}</h2>
//       </div>
//       <div className='item_price'>
//         <div className='edit'>
//           <Link><button><RiDeleteBin6Line/></button></Link>
//           <Link to={`/manager/edit/${item._id}`}><button><RiEdit2Line/></button></Link>
//         </div>
//         <div className='price'>
//           <h2>{`$${item.price}`}</h2>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Food = () => {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:1500/api/menu')
//       .then(response => response.json())
//       .then(data => setMenuItems(data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className='food'>
//       {menuItems.map(item => item.category=='food' && <Item key={item.id} item={item} />)}
//     </div>
//   )
// }

// export default Food;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Food.css';
// import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';
// import axios from 'axios';

// const Item = ({ item, onDelete }) => {
//   const availability = item.is_available ? 'Available' : 'Unavailable';

//   const handleDelete = () => {
//     onDelete(item._id);
//   };

//   return (
//     <div className='item_block'>
//       <div className='item_img'>
//         <img src="https://www.crazymasalafood.com/wp-content/images/2017/07/Chicken-Rice.jpg" alt="item_img" />
//       </div>
//       <div className='item_info'>
//         <h3>{item.item_name}</h3>
//         <p>{item.description}</p>
//       </div>
//       <div className='item_avai'>
//         <h2>{availability}</h2>
//       </div>
//       <div className='item_price'>
//         <div className='edit'>
//           <button onClick={handleDelete}><RiDeleteBin6Line/></button>
//           <Link to={`/manager/edit/${item._id}`}><button><RiEdit2Line/></button></Link>
//         </div>
//         <div className='price'>
//           <h2>{`$${item.price}`}</h2>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Food = () => {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:1500/api/menu')
//       .then(response => response.json())
//       .then(data => setMenuItems(data))
//       .catch(error => console.log(error));
//   }, []);

//   const handleDelete = (itemId) => {
//     if(localStorage.getItem("user")){
//       const config = {
//         headers: {
//           Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
//         },
//       };
//     console.log(itemId);
//     console.log(config);
//     axios.post(`http://localhost:1500/api/delete-item/${itemId}`, config);
//     }
//   };

//   return (
//     <div className='food'>
//       {menuItems.map(item => item.category==='food' && <Item key={item._id} item={item} onDelete={handleDelete} />)}
//     </div>
//   )
// }

// export default Food;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Food.css";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

const Item = ({ item, onDelete }) => {
  const availability = item.is_available ? "Available" : "Unavailable";
  const handleDelete = () => {
    onDelete(item.item_id);
  };
  return (
    <div className="item_block">
      <div className="item_img">
        <img
          src="https://www.crazymasalafood.com/wp-content/images/2017/07/Chicken-Rice.jpg"
          alt="item_img"
        />
      </div>
      <div className="item_info">
        <h3>{item.item_name}</h3>
        <p>{item.description}</p>
      </div>
      <div className="item_avai">
        <h2>{availability}</h2>
      </div>
      <div className="item_price">
        <div className="edit">
          <button onClick={handleDelete}>
            <RiDeleteBin6Line />
          </button>
          <Link to={`/manager/edit/${item.item_id}`}>
            <button>
              <RiEdit2Line />
            </button>
          </Link>
        </div>
        <div className="price">
          <h2>{`$${item.price}`}</h2>
        </div>
      </div>
    </div>
  );
};

const Food = () => {
  const [menuItems, setMenuItems] = useState([]);
  const config = {
    headers: {
      Authorization:
        "Bearer " +
        JSON.parse(localStorage.getItem("user")).access_token,
    },
  };

  useEffect(() => {
    fetch("http://localhost:1500/api/menu")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteItem = (itemId) => {
    console.log(itemId);
    fetch(`http://localhost:1500/api/delete-item/${itemId}`, {
      method: "POST",
      headers: config.headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const updatedItems = menuItems.filter((item) => item.item_id !== itemId);
        setMenuItems(updatedItems);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="food">
      {menuItems.map(
        (item) =>
          item.category == "food" && (
            <Item
              key={item.item_id}
              item={item}
              onDelete={handleDeleteItem}
            />
          )
      )}
    </div>
  );
};

export default Food;
