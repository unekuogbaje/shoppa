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
            <Product
            id="32544691"
            title="moon lady"
            price={111}
            rating={4}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />
            <Product
            id="32544691"
            title="moon lady"
            price={222}
            rating={5}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />
          </div>

          <div className="home-row">
            <Product
            id="32544691"
            title="moon lady"
            price={444}
            rating={5}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />
            <Product
            id="32544691"
            title="moon lady"
            price={555}
            rating={2}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />
            <Product
            id="32544691"
            title="moon lady"
            price={12}
            rating={3}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />
          </div>

          <div className="home-row">
            <Product
            id="32544691"
            title="moon lady"
            price={77}
            rating={4}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />
            <Product
            id="32544691"
            title="moon lady"
            price={99}
            rating={4}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />
            <Product
            id="32544691"
            title="moon lady"
            price={88}
            rating={4}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Home
