import React from 'react';
import { useStateValue } from '../context/state-provider';
import './checkout-product.css';

function CheckoutProduct({id, title, image, price, rating}) {
  const [ , dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }
  return (
    <div className='checkout-product'>
      <img src={image} alt="" className="checkout-product-image"/>
      <div className='checkout-product-info'>
        <p className='checkout-product-title'>{title}</p>
        <p className='checkout-product-price'>
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className='checkout-product-rating'>
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p> ⭐️ </p>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove item</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;
