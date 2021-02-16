import * as ActionTypes from './ActionTypes';

export const Checkout = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.CALCULATE_PURCHASE:
            var checkout = action.payload;
            console.log("checkout: ", checkout);
            return checkout;
        
        default:
          return state;
      }
};