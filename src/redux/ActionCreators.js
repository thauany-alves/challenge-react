import * as ActionTypes from './ActionTypes';

export const addItemToCart = (product) => ({
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
        product: product, 
    }
});

export const calculatePurchase = (subtotal, frete) => ({
    type: ActionTypes.CALCULATE_PURCHASE,
    payload: {
        subtotal: subtotal,
        frete: frete
    }
});

export const removeItem = ({item}) => ({
    type: ActionTypes.RM_ITEM_CART,
    payload: {
        item: item,
    }
});


