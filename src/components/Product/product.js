import React from 'react';
import { useStateValue } from '../context/state-provider'
import './product.css';

function Product({id, title, image, price, rating}) {
  const [ , dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div>
      <div className='product'>
        <div className='product-info'>
          <p>{title}</p>
          <p className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
          </p>
          <div className='product-rating'>
            {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐️ </p>
            ))}
          </div>
        </div>

        <img 
        src={image}
        alt=''/>

        <button onClick={addToBasket}>Add to cart</button>
      </div>
    </div>
  )
}

export default Product
