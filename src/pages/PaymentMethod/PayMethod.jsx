import React, { useState } from 'react';
import './PayMethod.css';
import { Link } from 'react-router-dom';
import {
  RiArrowGoBackFill,
  RiShoppingCart2Line,
  RiWallet3Line,
} from 'react-icons/ri';
import {
  BsCash, BsFillCreditCardFill
} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-top'>
        <Link to='/checkout'>
          <RiArrowGoBackFill />
        </Link>
        <h5>Payment Method</h5>
        <RiShoppingCart2Line style={{ visibility: 'hidden' }} />
      </div>
    </div>
  );
};

const GetTotal = () => {
  const total = localStorage.getItem('Total') ? localStorage.getItem('Total') : null;

  return (
    <div className='getTotal'>
      <h6>TOTAL</h6>
      <h1>${total}.000</h1>
    </div>
  );
};

const PaymentOptions = ({ handleInput }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleInput(option);
  };

  return (
    <div className='paymentOptions'>
      <h6>Select Payment Method</h6>
      <div className='radioOption'>
        <div className='optionHolder'>
          <div className='optionIntro'>
            <BsCash/>
            <h1>CASH</h1> 
          </div>
          <input
            type='radio'
            id='cash'
            name='paymentOption'
            value='Cash'
            checked={selectedOption === 'Cash'}
            onChange={() => handleOptionClick('Cash')}
          />
        </div>
      </div>

      <div className='radioOption'>
        <div className='optionHolder'>
            <div className='optionIntro'>
              <BsFillCreditCardFill/>
              <h1>BANK</h1> 
            </div>
            <input
              type='radio'
              id='bank'
              name='paymentOption'
              value='Banking'
              checked={selectedOption === 'Bank'}
              onChange={() => handleOptionClick('Bank')}
            />
        </div>
        <div className='optionDescription'>
          <p>OCB</p>
          <p>0004100018227349</p>
          <p>Nguyen Van A</p>
        </div>
      </div>

      <div className='radioOption'>
        <div className='optionHolder'>
            <div className='optionIntro'>
              <RiWallet3Line/>
              <h1>E-WALLET</h1> 
            </div>
          <input
            type='radio'
            id='e-wallet'
            name='paymentOption'
            value='E-wallet'
            checked={selectedOption === 'E-wallet'}
            onChange={() => handleOptionClick('E-wallet')}
          />
        </div>
        <div className='optionDescription'>
          <p>MOMO</p>
          <p>09xxxxxxxx</p>
          <p>Nguyen Van A</p>
        </div>
      </div>
    </div>
  );
};

const PayMethod = () => {
  const [paymentOption, setPaymentOption] = useState('');
  const handleInput = (option) => {
    setPaymentOption(option);
    localStorage.setItem('PayMethod', JSON.stringify(option));
  };

  return (
    <div className='paymethod'>
      <Navbar />
      <GetTotal />
      <PaymentOptions handleInput={handleInput} />
      {paymentOption && (
        <div className='selectedOption'>
          <h6>Selected Option:</h6>
          <p>{paymentOption}</p>
        </div>
      )}
      <Link to='/checkout'><button className='payment'>CONFIRM</button></Link>
    </div>
  );
};

export default PayMethod;
