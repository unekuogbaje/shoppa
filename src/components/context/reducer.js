// here, we will define all the application-level states along with actions to make changes to the state

export const initialState = {
  basket: [],
};

//Selector

export const getBasketTotal = (basket) => {
  return(basket?.reduce((amount, item) => item.price + amount, 0));
}

// the selector code gives the reduced function two arguments; the amount (accumulator) and current item. With item.price + amount, we're incrementing the amount whenerver there's an addition while 0 serves as a second parameter. This is how we get total cart items.

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index>=0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.id}) as its not in the basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }

    default:
      return state;
  }
}

export default reducer;