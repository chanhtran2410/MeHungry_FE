import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
