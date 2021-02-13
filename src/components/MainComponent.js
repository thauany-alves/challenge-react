import React from 'react';
import Header from './HeaderComponent';
import Product from './ProductsComponent';
import {PRODUCTS} from '../shared/products';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = { products: PRODUCTS}
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <Product products={this.state.products} />
      </React.Fragment>
    );
  }
}

export default Main;