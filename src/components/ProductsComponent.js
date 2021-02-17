import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 500px) {
    margin: 0 15px;
    display: flex;
    flex-direction: column;
  }
`;

const OptionSort = styled.button`
  margin: 10px 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid aliceblue;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;

  color: aliceblue;

  cursor: pointer;

  &:hover{
    color: var(--color-secondary);
    border-color: var(--color-secondary);
  }

  @media (max-width: 500px) {
    margin: 0;
  }

`;

const Button = styled.button`
  margin: 8px;
  padding: 10px;
  border-radius: 4px;
  font-weight: medium;
  border: 2px solid ${props => props.primary ? "var(--color-secondary)" : "var(--color-primary)"};
  /* background-color: var(--color-secondary); */
  font-size: 16px;
  color:   ${props => props.primary ? "white" : "var(--color-primary)"};
  background: ${props => props.primary ? "var(--color-secondary)" : "white"};
  cursor: pointer;
  
`;

const Card = styled.div`
  background-color: var(--color-primary);
  border-radius: 4px;
  font-weight: 600;
  overflow: hidden;

  transition: width 2s;

  &:hover {
  width: 110%;
}
`;

const ProductName = styled.div`
  height: 36px;
  padding: 8px;
  margin-bottom: 4px;
`;

const ProductInfo = styled.div`
  padding: 0 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Price = styled.p`
  background-color: var(--color-primary);
  filter: brightness(90%);
  padding: 5px;
  border-radius: 10px;
  text-align: center;
`;

const Img = styled.img`
  width:100%;
`;

export default function Products(props) {

  const products = props.products;
    
  const history = useHistory();
  
  function handleAddToCart({product}){
    props.addItemToCart(product);
    history.push('/cart');
  }

  function RenderProducts(){
    return products.map(product => {
      return (
        <div key={product.id}>
          
            <Card>
              <div>
                <Img src={`../assets/${product.image}`} alt="Product" />
              </div>
              <ProductName>
                <p>{product.name}</p>
              </ProductName>
              <ProductInfo>
                <Price>{`R$ ${product.price}`}</Price>
                <p><i className="fa fa-star fa-lg"></i> {product.score}</p>
              </ProductInfo>
              <Button primary onClick={() => handleAddToCart({product})}>
                <span><i className="fa fa-shopping-cart fa-lg"></i> Adicionar ao Carrinho</span>
              </Button>
            </Card>
        </div>
      );
    });
  }
  
  function handleSortScore(){
    products.sort(function(a,b) {
      return b.score -a.score;
    });
    history.push("/");
  }

  function handleSortPrice(){
    products.sort(function(a,b) {
      return a.price - b.price;
    });
    history.push("/");
  }

  function handleSortAlp(){
    products.sort(function(a,b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    history.push("/");
  }
  
    return(
      <>
        <Container>
          <OptionSort onClick={handleSortScore}>Maior Score</OptionSort>
          <OptionSort onClick={handleSortPrice}>Menor Preço</OptionSort>
          <OptionSort onClick={handleSortAlp}>Ordem Alfabética</OptionSort>
        </Container>
        <Container>
          <RenderProducts />
        </Container>
      </>
    );
    
}
