import React from 'react'
import CheckoutProduct from '../checkout-product/checkout-product'
import Subtotal from '../subtotal/subtotal'
import { useStateValue } from '../context/state-provider'
import './checkout.css'

function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout-left">
          <img 
          src="" 
          alt="" 
          className="checkout-ad"/>

          <div>
            <h2 className="checkout-title">Your Cart</h2>
            
            {basket.map(item => (
              <CheckoutProduct
              id = {item.id}
              title = {item.title}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}/>
            ))}
          </div>
        </div>

        <div className="checkout-right">
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout