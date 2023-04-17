import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    const newTip = selectedTip === Number(tipValue) ? 0 : Number(tipValue); // toggle selected tip
    setSelectedTip(newTip);
    localStorage.setItem('Tip', newTip);
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
          Tip: $ {selectedTip}
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
//             <input type='number' value={item.Quantity} readOnly />
//           </div>
//         </div>
//       ))}
//       <hr></hr>
//     </div>
//   );
// };


const PaymentMethod = () => {
    let payMethod = '';
    if(localStorage.getItem('PayMethod')){
      payMethod =  localStorage.getItem('PayMethod');
    }
    else{
      payMethod = 'Cash';
      localStorage.setItem('PayMethod',payMethod)
    }
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
    if(localStorage.getItem('totalOrder')){
      const dishesOrdered = JSON.parse(localStorage.getItem('totalOrder'));
      
      for (let i = 0; i < dishesOrdered.length; i++) {
        total += dishesOrdered[i].Price * dishesOrdered[i].Quantity;
      }
    }
    
    total += Number(selectedTip);
    total = total.toFixed(2);
    localStorage.setItem('Total', total);
    return (
      <div className='paymentmethod'>
        <div className='intro'>
          <BsCash/>
          <h4>Total</h4>
        </div>
        <div className='result'>
          $ {total}
        </div>
      </div>
    )
}
  
const Checkout = () => {
  const [selectedTip, setSelectedTip] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('totalOrder')) {
      const data = JSON.parse(localStorage.getItem('totalOrder'));
  
      // find duplicate objects and merge their quantities
      const mergedItems = data.reduce((acc, curr) => {
        const existingItem = acc.find(item => item.Name === curr.Name);
        if (existingItem) {
          existingItem.Quantity += curr.Quantity;
        } else {
          acc.push(curr);
        }
        return acc;
      }, []);
  
      setItems(mergedItems);
    }
  }, []);
  


  const onCheckoutBtnClick = () => {
    if(localStorage.getItem('PayMethod') && localStorage.getItem("Tip") && localStorage.getItem("Total")){
      const paymethod = localStorage.getItem('PayMethod');
      console.log(paymethod);
      const tip = localStorage.getItem("Tip");
      console.log(tip);
      const total = localStorage.getItem("Total");
      console.log(total);

      const table_number = localStorage.getItem("Table_number");
      console.log(table_number);


      const data = {
        'method': paymethod,
        'tip': tip,
        'total': total,
      }

      axios.post(`http://localhost:1500/api/request-checkout/${table_number}`,data)
        .then((response) => {
          console.log(response.data);
          window.location.href = '/rating';
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };  
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
                    <p><span>${item.Price}&nbsp; x &nbsp;{item.Quantity}</span> = <span>${item.Price * item.Quantity}</span></p>
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
        <button type='submit' className='payment' onClick={onCheckoutBtnClick}>Make Payment</button>
      </form>
    </div>
  );
};

export default Checkout;
