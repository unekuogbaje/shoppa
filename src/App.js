import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/navbar';
import Login from './components/authentication/login';
import Home from './components/Home/home';
import Checkout from './components/checkout/checkout';
import Payment from './components/payment/payment';

function App() {
  return (
    <div className="App bg-gray-300">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='payment' element={<Payment/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
