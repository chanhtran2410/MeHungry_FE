// import React from 'react'
// import { AiOutlinePlusCircle } from "react-icons/ai"
// import { useEffect } from 'react'

// const Item = ({ Name, Price ,Description}) => {

//   const handleClick = () => {
//     const dish = {Name:Name, Quantity: 1 ,Price: Number(Price)};
//     const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered')) || [];

//     const existingDish = dishesOrdered.find(d => d.Name === Name);
//     if (existingDish) {
//       existingDish.Quantity += 1;
//     } else {
//       dishesOrdered.push(dish);
//     }
//     localStorage.setItem('DishesOrdered', JSON.stringify(dishesOrdered));

//     // let count = 0;
//     // const order = JSON.parse(localStorage.getItem('DishesOrdered'));
//     // if(order) {
//     //   Object.values(order).forEach(({ Quantity }) => {
//     //     count += Quantity;
//     //   });
//     // }
//     // console.log('totalCount', count);
//     // localStorage.setItem('TotalQuantity', count)
//   }

//   const isAvailable = Price !== 'Unavailable';


//   return (
//     <div>
//       <div className='item'>
//       <img style={isAvailable ? {} : { filter: 'blur(3px)' }} src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg" alt="dishes" />
//         <div className='item-info'>
//           <h6>{Name}</h6>
//           <h5>{Description}</h5>
//           <p style={isAvailable ? {} : { color: 'red' }}>{isAvailable ? `$${Price}` : 'Out of Stock'}</p>
//         </div>
//         {isAvailable && 
//         // <AiOutlinePlusCircle onClick={handleClick} />
//         <>
//         <input type='number' value={} readOnly min={0} />
//         <button onClick={handleClick}>+</button>
//         </>
//         }
//       </div>
//     </div>
//   );
// }

// export default Item;


import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const Item = ({ Name, Price, Description }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered')) || [];
    const existingDish = dishesOrdered.find((d) => d.Name === Name);
    if (existingDish) {
      setQuantity(existingDish.Quantity);
    }
  }, [Name]);

  const handleIncrease = () => {
    const dish = { Name: Name, Quantity: 1, Price: Number(Price) };
    const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered')) || [];

    const existingDish = dishesOrdered.find((d) => d.Name === Name);
    if (existingDish) {
      existingDish.Quantity += 1;
      setQuantity(existingDish.Quantity);
    } else {
      dishesOrdered.push(dish);
      setQuantity(1);
    }
    localStorage.setItem('DishesOrdered', JSON.stringify(dishesOrdered));
  };

  const handleDecrease = () => {
    const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered')) || [];
    const existingDish = dishesOrdered.find((d) => d.Name === Name);
    if (existingDish) {
      existingDish.Quantity -= 1;
      setQuantity(existingDish.Quantity);
      if(existingDish.Quantity === 0){
        const index = dishesOrdered.findIndex((d) => d.Name === existingDish.Name);
        dishesOrdered.splice(index, 1);
        setQuantity(0);
      }
    }
    localStorage.setItem('DishesOrdered', JSON.stringify(dishesOrdered));
  };

  const isAvailable = Price !== 'Unavailable';

  return (
    <div>
      <div className="item">
        <img
          style={isAvailable ? {} : { filter: 'blur(3px)' }}
          src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg"
          alt="dishes"
        />
        <div className="item-info">
          <h6>{Name}</h6>
          <h4>{Description}</h4>
          <p style={isAvailable ? {} : { color: 'red' }}>{isAvailable ? `$${Price}` : 'Out of Stock'}</p>
        </div>
        <div className='button'>
        {isAvailable && (
          <>
            {quantity > 0 ? (
              <>
                <button onClick={handleDecrease}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={handleIncrease}>+</button>
              </>
            ) : (
              <button onClick={handleIncrease}>+</button>
            )}
          </>
        )}
        </div>
      </div>
    </div>
  );
};

export default Item;

