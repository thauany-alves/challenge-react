import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CardsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: aliceblue;
`;

const Card = styled.div`
  background-color: #7159c1;
`;

const ProductName = styled.div`
  padding: 24px;
`;

const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Price = styled.p`
  background-color: #7159c1;
  filter: brightness(90%);
  padding: 5px 20px;
  border-radius: 20px;
  text-align: center;
`;

const Img = styled.img`
  width:100%;
`;

class Products extends React.Component {
    constructor(props){
      super(props);
      this.state = {selectedItem: null};
    }

    onItemSelect(item) {
      this.setState({ selectedItem: item});
    }
  
    render(){
      const products = this.props.products.map(product => {
        return (
          <div key={product.id}>
              <Card>
                <UnstyledLink to={`/products/${product.id}`} >
                  <div>
                    <Img src={`../assets/${product.image}`} alt="Product" />
                  </div>
            
                  <ProductName>
                    <p>{product.name}</p>
                  </ProductName>
            
                  <ProductInfo>
                    <p>{product.score}</p>
                    <Price>{`R$ ${product.price}`}</Price>
                  </ProductInfo>
                </UnstyledLink>
              </Card>
          </div>
        );
      });

      return(
        <CardsContainer>
          {products}
        </CardsContainer>
      );
    }
    
}

export default Products;