// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   RiArrowGoBackFill, RiShoppingCart2Line,
// } from 'react-icons/ri';
// import {
//     BsCreditCard, BsCash
// } from 'react-icons/bs'
// import {
//     MdKeyboardArrowRight
// } from 'react-icons/md'
// import './Checkout.css';

// const Navbar = () => {
//   return (
//     <div className='nav'>
//       <div className='nav-top'>
//         <Link to='/home'>
//           <RiArrowGoBackFill />
//         </Link>
//         <h5>Order</h5>
//         <RiShoppingCart2Line style={{ visibility: 'hidden' }} />
//       </div>
//     </div>
//   );
// };

// const Tipbar = ({tip1, tip2, tip3, tip4}) => {
//   const handleClick = (e) => {
//     const tipValue = e.target.innerText.replace('$', '');
//     localStorage.setItem('Tip', tipValue);
//   };

//   return (
//     <div className='tip-holder'>
//       <div className='tip'>
//         <h5>Tip</h5>
//         <button onClick={handleClick}>${tip1}</button>
//         <button onClick={handleClick}>${tip2}</button>
//         <button onClick={handleClick}>${tip3}</button>
//         <button onClick={handleClick}>${tip4}</button>
//       </div>
//       <p>Never Expected But Always Appreciated</p>
//     </div>
//   );
// };



// const Itemblock = ({ Category }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem('DishesOrdered'));
//     setItems(data);
//   }, []);

// //   const handleIncrease = (index) => {
// //     const newItems = [...items];
// //     newItems[index] = { 
// //       ...newItems[index], 
// //       quantity: newItems[index].quantity + 1 
// //     };
// //     localStorage.setItem('DishesOrdered', JSON.stringify(newItems));
// //     setItems(newItems);
// //   };
  
// //   const handleDecrease = (index) => {
// //     const newItems = [...items];
// //     if (newItems[index].quantity > 0) {
// //       newItems[index] = { 
// //         ...newItems[index], 
// //         quantity: newItems[index].quantity - 1 
// //       };
// //       localStorage.setItem('DishesOrdered', JSON.stringify(newItems));
// //       setItems(newItems);
// //     }
// //   };

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
//             {/* <button onClick={() => handleDecrease(index)}>-</button> */}
//             <input type='number' value={item.quantity} readOnly />
//             {/* <button onClick={() => handleIncrease(index)}>+</button> */}
//           </div>
//         </div>
//       ))}
//       <hr></hr>
//       <Tipbar tip1='5' tip2='10' tip3='15' tip4='20'/>
//     </div>
//   );
// };


// const PaymentMethod = () => {
//     return (
//         <div className='paymentmethod'>
//             <div className='intro'>
//                 <BsCreditCard/>
//                 <h4>Payment Method</h4>
//             </div>
//             <div className='result'>
//                 <Link><button><h4>Choose one</h4> <MdKeyboardArrowRight/></button></Link>
//             </div>
//         </div>
//     )
// }

// const Total = () => {
//     const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered'));
//     const tip = JSON.parse(localStorage.getItem('Tip'));
//     let total = 0;
    
//     for (let i = 0; i < dishesOrdered.length; i++) {
//       total += dishesOrdered[i].Price * dishesOrdered[i].quantity;
//     }
    
//     total += Number(tip);
    
//     return (
//       <div className='paymentmethod'>
//         <div className='intro'>
//           <BsCash/>
//           <h4>Total</h4>
//         </div>
//         <div className='result'>
//           {total}.000
//         </div>
//       </div>
//     )
// }
  

// const Checkout = () => {
//   return (
//     <div className='checkout'>
//         <Navbar />
//       <form onSubmit={(e) => { e.preventDefault(); }}>
//         <Itemblock Category='Selected' />
//         <PaymentMethod />
//         <Total />
//         <button className='payment'>Make payment</button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;



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
    return (
        <div className='paymentmethod'>
            <div className='intro'>
                <BsCreditCard/>
                <h4>Payment Method</h4>
            </div>
            <div className='result'>
                <Link><button><h4>Choose one</h4> <MdKeyboardArrowRight/></button></Link>
            </div>
        </div>
    )
}

const Total = ({ selectedTip }) => {
    const dishesOrdered = JSON.parse(localStorage.getItem('DishesOrdered'));
    let total = 0;
    
    for (let i = 0; i < dishesOrdered.length; i++) {
      total += dishesOrdered[i].Price * dishesOrdered[i].quantity;
    }
    
    total += selectedTip;
    
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
    const data = JSON.parse(localStorage.getItem('DishesOrdered'));
    setItems(data);
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
        <button className='payment'>Make payment</button>
      </form>
    </div>
  );
};

export default Checkout;
