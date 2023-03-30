import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Order from './pages/Menu/Order';
import Request from './pages/Request/Request';
import Checkout from './pages/Checkout/Checkout';
import PayMethod from './pages/PaymentMethod/PayMethod';
import Rating from './pages/Rating/Rating';

function App() {
  
  const tableIDRegex = /^\/([a-zA-Z0-9]{6})$/; // Regex to match '/{id}' pattern
  
  // Check if the URL matches the pattern and extract the {id}
  const match = window.location.pathname.match(tableIDRegex);
  if (match !== null) {
    const tableID = match[1];
    localStorage.setItem('tableID', tableID);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<StartPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/request" element={<Request />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paymethod" element={<PayMethod />} />
        <Route path="/rating" element={<Rating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
