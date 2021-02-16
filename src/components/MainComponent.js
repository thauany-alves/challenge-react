import React from 'react';
import Header from './HeaderComponent';
import Product from './ProductsComponent';
import Cart from './CartComponent';
import Item from './ItemComponent';
// import {PRODUCTS} from '../shared/products';
import {Switch, Route, withRouter} from 'react-router-dom';
import { addItemToCart } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    products: state.products,
    items_cart: state.items_cart
  }
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: (productId) => dispatch(addItemToCart(productId))
});


class Main extends React.Component {
   

  render(){
    return(
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/"  component = {() => <Product products={this.props.products} addItemToCart={this.props.addItemToCart} />}  />
          <Route exact path="/cart" component = {() => <Cart items_cart={this.props.items_cart} />}  />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));