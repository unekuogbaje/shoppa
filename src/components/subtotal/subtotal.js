import React from 'react'
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
            Subtotal ({basket.length} items): <strong>${value}</strong>
          </p>
          <small className="subtotal-gift">
            <input type="checkbox" />
            This order contains a gift
          </small>
        </>
      )}
      
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={'$'}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
