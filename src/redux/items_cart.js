// import { ITEMS_CART } from '../shared/items_cart';
import * as ActionTypes from './ActionTypes';

const ITEMS_CART = [];

export const ItemsOnCart = (state = ITEMS_CART, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM_TO_CART:
            var item = action.payload;

            if(state.some(i => i.product === item.product)){
                alert('Item já foi adicionado ao seu carrinho!');
                return state;
            }else{
                item.id = state.length;
                return state.concat(item);
            }
        case ActionTypes.RM_ITEM_CART:
            var rmItem = action.payload;
            var index = state.indexOf(rmItem.item);
            
            if(index > -1) state.splice(index, 1);
                
            return state;
        default:
          return state;
      }
};