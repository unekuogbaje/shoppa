import React from 'react'
import CheckoutProduct from '../checkout-product/checkout-product'
import Subtotal from '../subtotal/subtotal'
import './checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout-left">
          <img 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
          alt="" 
          className="checkout-ad"/>

          <div>
            <h2 className="checkout-title">Your Cart</h2>
            <CheckoutProduct
            id="32544691"
            title="Moon Lady"
            price={77}
            rating={4}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />

            <CheckoutProduct
            id="32544691"
            title="Moon Lady"
            price={77}
            rating={4}
            image="https://i.pinimg.com/236x/e7/24/ed/e724ed773e738d0c668349e66dd26130.jpg"
            />
          </div>
        </div>

        <div className="checkout-right">
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout