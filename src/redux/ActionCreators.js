import * as ActionTypes from './ActionTypes';

export const addItemToCart = (product) => ({
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
        product: product, 
    }
});