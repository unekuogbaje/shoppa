import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/navbar';
import Home from './components/Home/home';
import Checkout from './components/checkout/checkout';

function App() {
  return (
    <div className="App bg-gray-300">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
