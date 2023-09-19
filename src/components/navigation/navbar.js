import { Fragment, React } from 'react';
import { Outlet, Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './navbar.css'

function Navbar() {
  return (
    <Fragment>
      <div className="header">
        <Link className='header-logo' to='/'>
          <Logo className='header-logo-image'/>
        </Link>

        <div className="header-search">
          <input type="text" className='header-search-field'/>
          <SearchIcon className='search-icon'/>
        </div>

        <div className="header-nav">
          <div className="nav-item">
            <span className="nav-itemLineOne">Hi there!</span>
            <span className="nav-itemLinetwo">Sign in?</span>
          </div>

          <div className="nav-item">
            <span className="nav-itemLineOne">Your</span>
            <span className="nav-itemLinetwo">Shop</span>
          </div>

          <div className="nav-itemBasket">
            <ShoppingCartIcon className='shopping-cart' fontSize="large"/>
            <span className="nav-itemLinetwo">0</span>
          </div>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navbar
