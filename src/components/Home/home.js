import React from 'react';
import { Outlet } from 'react-router-dom';
import Product from '../Product/product';
import './home.css';

function Home() {
  return (
    <div>
      <div className='home'>
        <div className="home-container">
          <img src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg' alt='' className='home-image'/>
          
          <div className="home-row">
            <Product/>
            <Product/>
          </div>

          <div className="home-row">
            <Product/>
            <Product/>
            <Product/>
          </div>

          <div className="home-row">
            <Product/>
            <Product/>
            <Product/>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Home
