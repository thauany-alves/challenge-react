import React from 'react';
import styled from 'styled-components';


const CheckoutContainer = styled.div`
  margin-top: 30px;
  width: 800px;
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  gap: 20px;
  margin: 0 auto;
  color: aliceblue;

  @media (max-width: 500px){
    width: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CardItems = styled.div`
  background-color: var(--color-primary); 
  border-radius: 4px;
  padding: 20px;

  @media (max-width: 500px){
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 8px 20px;

  border-bottom: 1px solid aliceblue;
`;

const ItemValue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;

`;

const Info = styled.span`
  font-size: 16px;
  font-weight: 500;
  /* padding-right: 10px;  */
`;

const CardCheckout = styled.div`
  border-radius: 4px;
  padding: 20px;
  background-color: var(--color-secondary);

  @media (max-width: 500px){
    width: 88%;
  }
`;

const Border = styled.div`
  border-bottom: 1px solid aliceblue;
  margin: 8px 0;
`;

export default function Checkout(props){
  if(props.checkout){
    return(
      <CheckoutContainer>
      <CardItems>
        {props.items_cart.map(item => {
          return(
            <Item key={item.product.id}>
              <Info>{item.product.name}</Info>
              <Info>R$ {item.product.price}</Info>  
            </Item>
          )
        })}
      </CardItems>
      <CardCheckout>
          <ItemValue>
            <Info>Subtotal</Info>
            <Info>R$ {props.checkout.subtotal.toFixed(2)}</Info>
          </ItemValue>
          <ItemValue>
            <Info>Frete</Info>
            <Info>R$ {props.checkout.frete.toFixed(2)}</Info>
          </ItemValue>
        <Border></Border>
        <ItemValue>
            <Info>Total</Info>
            <Info>R$ {(props.checkout.subtotal + props.checkout.frete).toFixed(2)}</Info>
        </ItemValue>
        *Para compras acima de R$ 250,00 o frete é gratis! 
      </CardCheckout>
    </CheckoutContainer>
      
    );
   
  }else{
    return(
      <CardCheckout>
        <Info>Sem produtos no carrinho, volte e adicione produtos para finalizar a compra!</Info>
      </CardCheckout>
     
    );
  }
}