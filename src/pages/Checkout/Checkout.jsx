import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  RiArrowGoBackFill, RiShoppingCart2Line,
} from 'react-icons/ri';
import {
    BsCreditCard, BsCash
} from 'react-icons/bs'
import {
    MdKeyboardArrowRight
} from 'react-icons/md'
import './Checkout.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-top'>
        <Link to='/home'>
          <RiArrowGoBackFill />
        </Link>
        <h5>Bill</h5>
        <RiShoppingCart2Line style={{ visibility: 'hidden' }} />
      </div>
    </div>
  );
};

const Tipbar = ({tip1, tip2, tip3, tip4, selectedTip, setSelectedTip}) => {
  const handleClick = (e) => {
    const tipValue = e.target.innerText.replace('$', '');
    setSelectedTip(Number(tipValue));
  };

  return (
    <div className='tip-holder'>
      <div className='tip'>
        <h5>Tip</h5>
        <button onClick={handleClick}>${tip1}</button>
        <button onClick={handleClick}>${tip2}</button>
        <button onClick={handleClick}>${tip3}</button>
        <button onClick={handleClick}>${tip4}</button>
      </div>
      <p>Never Expected But Always Appreciated</p>
      {selectedTip > 0 && (
        <div className='result'>
          Tip: $ {selectedTip}.000
        </div>
      )}
    </div>
  );
};

// const Itemblock = ({ Category }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem('DishesOrdered'));
//     setItems(data);
//   }, []);

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
//             <input type='number' value={item.quantity} readOnly />
//           </div>
//         </div>
//       ))}
//       <hr></hr>
//     </div>
//   );
// };


const PaymentMethod = () => {
    const payMethod = localStorage.getItem('PayMethod') ? localStorage.getItem('PayMethod'): 'Choose one';
    return (
        <div className='paymentmethod'>
            <div className='intro'>
                <BsCreditCard/>
                <h4>Payment Method</h4>
            </div>
            <div className='result'>
                <Link to='/paymethod'><button><h4>{payMethod}</h4> <MdKeyboardArrowRight/></button></Link>
            </div>
        </div>
    )
}

const Total = ({ selectedTip }) => {
    let total = 0;
    if(localStorage.getItem('DishesOrdered')){
      const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered'));
      
      for (let i = 0; i < dishesOrdered.length; i++) {
        total += dishesOrdered[i].Price * dishesOrdered[i].quantity;
      }
    }
    
    total += selectedTip;
    localStorage.setItem('Total', JSON.stringify(total));
    return (
      <div className='paymentmethod'>
        <div className='intro'>
          <BsCash/>
          <h4>Total</h4>
        </div>
        <div className='result'>
          $ {total}.000
        </div>
      </div>
    )
}
  
const Checkout = () => {
  const [selectedTip, setSelectedTip] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('DishesOrdered')){
      const data = JSON.parse(localStorage.getItem('DishesOrdered'));
      setItems(data);
    }

  }, []);
  return (
        <div className='checkout'>
            <Navbar />
            <form onSubmit={(e) => { e.preventDefault(); }}>
            <div className='block'>
            <h5>Selected</h5>
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
                    <input type='number' value={item.quantity} readOnly />
                </div>
                </div>
            ))}
            <hr></hr>
            <Tipbar
            tip1='5'
            tip2='10'
            tip3='15'
            tip4='20'
            selectedTip={selectedTip}
            setSelectedTip={setSelectedTip}
            />
        </div>
        
        <PaymentMethod />
        <Total selectedTip={selectedTip} />
        <Link to='/rating'><button className='payment'>Make payment</button></Link>
      </form>
    </div>
  );
};

export default Checkout;
