import './App.css';
import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Order from './pages/Menu/Order';
import Request from './pages/Request/Request';
import Checkout from './pages/Checkout/Checkout';
import PayMethod from './pages/PaymentMethod/PayMethod';
import Rating from './pages/Rating/Rating';
import M_Home from './pages/Manager/Home/M_Home';
import M_Menu from './pages/Manager/Menu/M_Menu';
import Add from './pages/Manager/Menu/Add';
import Edit from './pages/Manager/Menu/Edit';
import Login from './pages/Manager/Login/Login';
import Guest from './pages/Guest/Guest';


function App() {
  
  const tableIDRegex = /^\/([a-zA-Z0-9]{8})$/; // Regex to match '/{id}' pattern
  
  // Check if the URL matches the pattern and extract the {id}
  const match = window.location.pathname.match(tableIDRegex);
  const pathname  = window.location.pathname;
  console.log(pathname)
  const table_id_list = ['31OFbdzA','ip34Rpen','1qAKpsUL','LxSbuAx6','5WLK1rFw','tnTCr66t','BVWsY4aO','2c7frm8R','fZnZSQY3','h3NnGZDt','T50TEDbb','FOrrfz55','WMzr98ty','buSNXOX0','NsmU1O5Q','tNtCr66t'];
  const path = ['/home', '/menu', '/order', '/request','/check_out', '/paymethod', '/rating', '/login', '/manager', '/manager/menu', '/manager/add', '/manager/edit/:id']
  if (match !== null && table_id_list.includes(match[1]) ) {
    const tableID = match[1];
    localStorage.setItem('tableID', tableID);
  }
  else if(pathname !== '/' && !(table_id_list.includes(pathname)) && !(path.includes(pathname))){
    return(<><h1>404 Error</h1></>)
  }
 
 



  // Set initial state of auth
  const [auth, setAuth] = useState(localStorage.getItem('user') ? true : false);
  
  // Check if user is authenticated before accessing manager pages
  const checkAuth = () => {
    const token = localStorage.getItem('user');
    if (token) { // Set your token here
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Guest />} />
        <Route path="/:id" element={<StartPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/request" element={<Request />} />
        <Route path="/check_out" element={<Checkout />} />
        <Route path="/paymethod" element={<PayMethod />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/login" element={<Login/>} />

        <Route path="/manager" element={auth ? <M_Home /> : <Navigate to="/login" />} />
        <Route path="/manager/menu" element={auth ? <M_Menu /> : <Navigate to="/login" />} />
        <Route path="/manager/add" element={auth ? <Add /> : <Navigate to="/login" />} />
        <Route path="/manager/edit/:id" element={auth ? <Edit /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
