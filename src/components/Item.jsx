import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai"

const Item = ({ Name, Price }) => {

  const handleClick = () => {
    const dish = {Name:Name, Price: Number(Price), quantity: 1 };
    const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered')) || [];
    const existingDish = dishesOrdered.find(d => d.Name === Name);
    if (existingDish) {
      existingDish.quantity += 1;
    } else {
      dishesOrdered.push(dish);
    }
    localStorage.setItem('DishesOrdered', JSON.stringify(dishesOrdered));
  }

  return (
    <div>
      <div className='item'>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg" alt="dishes" />
        <div className='item-info'>
          <h6>{Name}</h6>
          <p>${Price}</p>
        </div>
        <AiOutlinePlusCircle onClick={handleClick} />
      </div>
    </div>
  )
}

export default Item
