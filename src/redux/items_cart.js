// import { ITEMS_CART } from '../shared/items_cart';
import * as ActionTypes from './ActionTypes';

const ITEMS_CART = [];

export const ItemsOnCart = (state = ITEMS_CART, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM_TO_CART:
            var item = action.payload;
            item.id = state.length;
            console.log("Item: ", item);
            return state.concat(item);

        default:
            console.log("No carrinho", state);
          return state;
      }
};