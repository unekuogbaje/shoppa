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
            title="Moon Lady"
            price={111}
            rating={4}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />
            <Product
            id="32544691"
            title="Coco"
            price={222}
            rating={5}
            image="https://i.pinimg.com/564x/71/23/17/712317db81f74d09643305bcc52fac5c.jpg"
            />
          </div>

          <div className="home-row">
            <Product
            id="32544691"
            title="Fro"
            price={444}
            rating={5}
            image="https://i.pinimg.com/564x/b6/d7/23/b6d723bad283bd7d91c760770a4c1acd.jpg"
            />
            <Product
            id="32544691"
            title="The Moon is Golden"
            price={555}
            rating={2}
            image="https://i.pinimg.com/564x/26/ce/52/26ce524e248b373fd3077aedf9d731fb.jpg"
            />
            <Product
            id="32544691"
            title="MeYouZeek"
            price={12}
            rating={3}
            image="https://i.pinimg.com/564x/9f/78/76/9f78762178ee6249dafa0d9a526394e0.jpg"
            />
          </div>

          <div className="home-row">
            <Product
            id="32544691"
            title="In CogniTo"
            price={77}
            rating={4}
            image="https://i.pinimg.com/236x/9b/3f/3d/9b3f3dc99c6c4ac1736a9d68abff5eda.jpg"
            />
            <Product
            id="32544691"
            title="Lilith"
            price={99}
            rating={4}
            image="https://i.pinimg.com/236x/30/35/8c/30358c626379b70804db4c90e8fe4e9c.jpg"
            />
            <Product
            id="32544691"
            title="Sekhmet"
            price={88}
            rating={4}
            image="https://i.pinimg.com/236x/91/c4/5c/91c45c05d3640be996c872f475ff1c3f.jpg"
            />
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Home
