import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/navbar';
import Home from './components/Home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
