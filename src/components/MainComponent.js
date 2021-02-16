import React from 'react';
import Header from './HeaderComponent';
import Product from './ProductsComponent';
import Cart from './CartComponent';

import {Switch, Route, withRouter} from 'react-router-dom';
import { addItemToCart, calculatePurchase, removeItem } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import Checkout from './CheckoutComponent';


const mapStateToProps = state => {
  return {
    products: state.products,
    items_cart: state.items_cart,
    checkout: state.checkout
  }
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: (productId) => dispatch(addItemToCart(productId)),
  calculatePurchase: (subtotal, frete) => dispatch(calculatePurchase(subtotal, frete)),
  removeItem: (item) => dispatch(removeItem(item))
});


class Main extends React.Component {
   

  render(){
    return(
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/"  component = {() => 
            <Product products={this.props.products} addItemToCart={this.props.addItemToCart} />}  
          />
          <Route exact path="/cart" component = {() => 
            <Cart items_cart={this.props.items_cart} calculatePurchase={this.props.calculatePurchase} removeItem={this.props.removeItem} />} 
          />
          <Route exact path="/checkout" component = {() => 
            <Checkout items_cart={this.props.items_cart} checkout={this.props.checkout} />}  
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));