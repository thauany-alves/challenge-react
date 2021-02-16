import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';



const MessageNoItems = styled.div`
  height: 90vh;
  padding: 60px;
  font-size: 30px;
  font-weight:700;
  color:aliceblue;
`;

const CardsContainer = styled.div`
  /* height: 100vh; */
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const CardItem = styled.div`
  background-color: #7159c1;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-items: space-around;
  height: 160px;
  margin: 10px;
  padding: 5px;
  /* align-items: center; */
`;

const ButtonCheckout = styled.button`
  margin: 8px 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: #50fa7b;
  font-size: 20px;
  color: aliceblue;
  
`;

const ItemDescription = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center
`;

const ImgContainer = styled.div`
  width: 22%;
`;

const Img = styled.img`
  width:94%;
`;

const Info = styled.p`
  font-size: 14px;
  padding-right: 4px;
  font-weight: 500;
  background-color: #7159c1;
  filter: brightness(80%);
  padding: 4px;
  border-radius: 4px;
`;

const NameProduct = styled.p`
  margin-top: 0;
  font-size: 18px;
  font-weight: 600;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding-right: 5px;
`;


export default function Cart(props){

  const history = useHistory();
  
  function handlePurchase(){
    let subtotal = props.items_cart.reduce((t, item) => t+item.product.price, 0);
    let frete = subtotal > 250 ? 0 : (props.items_cart.length * 10);
    console.log('subtotal', subtotal);
    console.log('frete', frete.toFixed(2));
    
    props.calculatePurchase(subtotal, frete);

    history.push('/checkout');
  }
  
  if(props.items_cart.length > 0){
    return(
      <CardsContainer> 
        {props.items_cart.map( item => {
          return(
            <CardItem>
              <ImgContainer>
                  <Img src={`../assets/${item.product.image}`} alt="image item"/>
              </ImgContainer>
              <ItemDescription>
                <InfoItem>
                  <NameProduct>{item.product.name}</NameProduct>
                </InfoItem>

                <InfoItem>
                  <Label>Score</Label>
                  <Info>{item.product.score}</Info>
                </InfoItem>
        
                <InfoItem>
                  <Label>Valor</Label>
                  <Info>R$ {item.product.price}</Info>
                </InfoItem>                    
              </ItemDescription>
            </CardItem>
          );
        })}
        <ButtonCheckout onClick={() => handlePurchase()}>
          Comprar
        </ButtonCheckout>
      </CardsContainer>
    )
  }else{
    return(
      <MessageNoItems>
        Sem itens no seu carrinho!
      </MessageNoItems>
    );
  }

  
  
};

