// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import {
//   RiArrowGoBackFill,
//   RiShoppingCart2Line,
// } from 'react-icons/ri';
// import './Menu.css';

// const Navbar = () => {
//   return (
//     <div className='nav'>
//       <div className='nav-top'>
//         <Link to='/menu'>
//           <RiArrowGoBackFill />
//         </Link>
//         <h5>Order</h5>
//         <RiShoppingCart2Line style={{ visibility: 'hidden' }} />
//       </div>
//     </div>
//   );
// };

// const Itemblock = ({ Category }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     if(localStorage.getItem('DishesOrdered')){
//     const data = JSON.parse(localStorage.getItem('DishesOrdered')) || [];
//     setItems(data);
//     }
//   }, []);

//   const [itemQuantity, setItemQuantity] = useState({});
//   useEffect(() => {
//     const dishQuantities = {};
//     items.forEach((item) => {
//       dishQuantities[item.Name] = item.Quantity;
//     });
//     setItemQuantity(dishQuantities);
//   }, [items]);

//   const handleIncrease = ({Name}) => {
//     const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered')) || [];

//     const existingDish = dishesOrdered.find((d) => d.Name === Name);
//     if (existingDish) {
//       existingDish.Quantity += 1;
//       const dishQuantities = {...itemQuantity};
//       dishQuantities[Name] = existingDish.Quantity;
//       setItemQuantity(dishQuantities);
//     } 
//     localStorage.setItem('DishesOrdered', JSON.stringify(dishesOrdered));
//   };

//   const handleDecrease = ({Name}) => {
//     const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered')) || [];
//     const existingDish = dishesOrdered.find((d) => d.Name === Name);
//     if (existingDish) {
//       existingDish.Quantity -= 1;
//       const dishQuantities = {...itemQuantity};
//       dishQuantities[Name] = existingDish.Quantity;
//       setItemQuantity(dishQuantities);
      
//       if(existingDish.Quantity === 0){
//         const index = dishesOrdered.findIndex((d) => d.Name === existingDish.Name);
//         dishesOrdered.splice(index, 1);
//       }
//     }
//     localStorage.setItem('DishesOrdered', JSON.stringify(dishesOrdered));
//   };

//   return (
//     <div className='block'>
//       <h5>{Category}</h5>
//       {items.map((item, index) => (
//         <div key={index} className='item'>
//           <img
//             src='https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
//             alt='dishes'
//           />
//           <div className='item-info'>
//             <h6>{item.Name}</h6>
//             <p>${item.Price}</p>
//           </div>
//           <div className='additem'>
//             {item.Quantity > 0 ? (
//               <>
//                 <button type="button" onClick={() => handleDecrease(item)}> - </button>
//                 <input type="number" value={itemQuantity[item.Name]} readOnly />
//                 <button type="button" onClick={() => handleIncrease(item)}> + </button>
//               </>
//             ) : (
//               <></>
//             )}
//           </div>
//         </div>
//       ))}
//       <label htmlFor='note'>Notes: </label>
//       <input
//         type='text'
//         id='note'
//         name='note'
//         placeholder='Add notes to the order for the best preparation'
//       />
//     </div>
//   );
// };


// const Order = () => {
//   const [isOrdering, setIsOrdering] = useState(false);
//   const onOrderBtnClick = (e) => {
//     e.preventDefault();
//     if(localStorage.getItem('DishesOrdered') && localStorage.getItem("tableID")){
//       const order = JSON.parse(localStorage.getItem('DishesOrdered'));

//       console.log(order);
//       const table_number = localStorage.getItem("Table_number");
//       console.log(table_number);
//       setIsOrdering(true);
//       axios.post(`http://localhost:1500/api/add-items/${table_number}`,order)
//         .then((response) => {
//           console.log(response.data);
//           if(localStorage.getItem('totalOrder')){
//             const totalOrder = JSON.parse(localStorage.getItem('totalOrder'));
//             totalOrder.push(...order);
//             localStorage.setItem('totalOrder', JSON.stringify(totalOrder));
//           }
//           else{
//             localStorage.setItem('totalOrder', JSON.stringify(order));
//           }
//           localStorage.removeItem('DishesOrdered');
//         })
//         .catch((error) => {
//           console.log(error);
//         })
//         .finally(() => {
//           setIsOrdering(false);
//         });

      
      
//     }
//   };  
//   return (
//     <div>
//         <Navbar />
//       <form>
//         <Itemblock Category='Selected' />
//         <button type='submit' className='order' onClick={onOrderBtnClick}>Order</button>
//       </form>
//     </div>
//   );
// };

// export default Order; 










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
    const data = JSON.parse(localStorage.getItem('DishesOrdered')) || [];
    setItems(data);
    }
  }, []);

  const [itemQuantity, setItemQuantity] = useState({});
  useEffect(() => {
    const dishQuantities = {};
    items.forEach((item) => {
      dishQuantities[item.Name] = item.Quantity;
    });
    setItemQuantity(dishQuantities);
  }, [items]);

  const handleIncrease = ({Name}) => {
    const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered')) || [];

    const existingDish = dishesOrdered.find((d) => d.Name === Name);
    if (existingDish) {
      existingDish.Quantity += 1;
      const dishQuantities = {...itemQuantity};
      dishQuantities[Name] = existingDish.Quantity;
      setItemQuantity(dishQuantities);
    } 
    localStorage.setItem('DishesOrdered', JSON.stringify(dishesOrdered));
  };

  const handleDecrease = ({Name}) => {
    const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered')) || [];
    const existingDish = dishesOrdered.find((d) => d.Name === Name);
    if (existingDish) {
      existingDish.Quantity -= 1;
      const dishQuantities = {...itemQuantity};
      dishQuantities[Name] = existingDish.Quantity;
      setItemQuantity(dishQuantities);
      
      if(existingDish.Quantity === 0){
        const index = dishesOrdered.findIndex((d) => d.Name === existingDish.Name);
        dishesOrdered.splice(index, 1);
        setItems([...dishesOrdered]);
      }
    }
    localStorage.setItem('DishesOrdered', JSON.stringify(dishesOrdered));
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
            {item.Quantity > 0 ? (
              <>
                <button type="button" onClick={() => handleDecrease(item)}> - </button>
                <input type="number" value={itemQuantity[item.Name]} readOnly />
                <button type="button" onClick={() => handleIncrease(item)}> + </button>
              </>
            ) : (
              <></>
            )}
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
  const [isOrdering, setIsOrdering] = useState(false);
  const onOrderBtnClick = (e) => {
    e.preventDefault();
    if(localStorage.getItem('DishesOrdered') && localStorage.getItem("tableID")){
      const order = JSON.parse(localStorage.getItem('DishesOrdered'));

      console.log(order);
      const table_number = localStorage.getItem("Table_number");
      console.log(table_number);
      setIsOrdering(true);
      axios.post(`http://localhost:1500/api/add-items/${table_number}`,order)
        .then((response) => {
          console.log(response.data);
          if(localStorage.getItem('totalOrder')){
            const totalOrder = JSON.parse(localStorage.getItem('totalOrder'));
            totalOrder.push(...order);
            localStorage.setItem('totalOrder', JSON.stringify(totalOrder));
          }
          else{
            localStorage.setItem('totalOrder', JSON.stringify(order));
          }
          localStorage.removeItem('DishesOrdered');
          window.location.href = '/home';
          // window.location.reload(); // Reload the page
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsOrdering(false);
        });
      
    }
  };  
  return (
    <div>
        <Navbar />
      <form className='menu'>
        <Itemblock Category='Selected' />
        <button type='submit' className='order floating-btn' onClick={onOrderBtnClick}>Order</button>
      </form>
    </div>
  );
};

export default Order;
