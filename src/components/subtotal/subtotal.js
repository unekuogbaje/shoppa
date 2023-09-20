import React from 'react'
import { Link } from "react-router-dom"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../context/state-provider';
import { getBasketTotal } from '../context/reducer';
import './subtotal.css'

function Subtotal() {
  const [{basket}] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
        </>
      )}
      
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={'$'}
      />

      <Link 
      to='/payment'
      className='payment'>
        Proceed to Payment
      </Link>
    </div>
  )
}

export default Subtotal
