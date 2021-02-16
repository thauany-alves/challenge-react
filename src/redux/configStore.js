import {createStore, combineReducers} from 'redux';
import { Products} from './products';
import { ItemsOnCart} from './items_cart';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            items_cart: ItemsOnCart
        }),
    );

    return store;
}