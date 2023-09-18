import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as Logo } from '../src/assets/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="hearder-logo">
        <Logo className='header-logo'/>
      </div>

      <div className="header-search">
        <input type="text" className='header-search-field'/>
        <SearchIcon className='search-icon'/>
      </div>

      <div className="header-nav">
        <div className="nav-item">
          <span className="nav-itemLineOne">Hello there!</span>
          <span className="nav-itemLinetwo">Sign in?</span>
        </div>

        <div className="nav-item">
          <span className="nav-itemLineOne">Your</span>
          <span className="nav-itemLinetwo">Shop</span>
        </div>

        <div className="nav-item">
          <ShoppingCartIcon fontSize="large"/>
          <span className="nav-itemLinetwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
