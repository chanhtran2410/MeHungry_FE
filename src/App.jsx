import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Order from './pages/Menu/Order';
import Request from './pages/Request/Request';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path ="/order" element={<Order />} />
      <Route path ="/request" element={<Request/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
