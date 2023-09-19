import React from 'react';
import './product.css';

function Product() {
  return (
    <div>
      <div className='product'>
        <div className='product-info'>
          <p>Title</p>
          <p className='product-price'>
          <small>$</small>
          <strong>80</strong>
          </p>
          <div className='product-rating'> ⭐️ ⭐️ ⭐️ ⭐️ </div>
        </div>

        <img 
        src='https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg' 
        alt='moon lady'
        className='product-image'/>

        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default Product
