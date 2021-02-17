import React from 'react';
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
  background-color: var(--color-primary);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.6fr;
  overflow: hidden;
  height: 168px;
  margin: 10px;
  padding: 5px;
  
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }
`;

const Button = styled.button`
  margin: 8px 10px;
  padding: 10px;
  border-radius: 4px;
  font-weight: 600;
  border: 2px solid ${props => props.primary ? "var(--color-secondary)" : "var(--color-primary)"};
  font-size: 20px;
  color:   ${props => props.primary ? "white" : "var(--color-primary)"};
  background: ${props => props.primary ? "var(--color-secondary)" : "white"};
  cursor: pointer;
  
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


const Img = styled.img`
  width: 85%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Info = styled.p`
  font-size: 14px;
  padding-right: 4px;
  font-weight: 500;
  background-color: var(--color-primary);
  filter: brightness(80%);
  padding: 4px;
  border-radius: 4px;
`;

const Title = styled.p`
  margin-top: 0;
  font-size: 18px;
  font-weight: 600;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding-right: 5px;
`;

const OptionRemove = styled.button`
  margin-top: 60%;
  height: 40px;
  padding: 10px;
  border-radius: 4px;
  font-weight: 500;
  border: 2px solid ${props => props.primary ? "var(--color-secondary)" : "var(--color-primary)"};
  font-size: 16px;
  color:   ${props => props.primary ? "white" : "var(--color-primary)"};
  background: ${props => props.primary ? "var(--color-secondary)" : "white"};
  cursor: pointer;

  @media (max-width: 500px) {
    margin-top: 2px;
  }
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

  function handleRemoveItem(item){
    props.removeItem(item);
    history.push('/cart');
  }
  
  if(props.items_cart.length > 0){
    return(
      <CardsContainer> 
        <Title>Itens no Carrinho</Title>
        {props.items_cart.map( item => {
          return(
            <CardItem key={item.product.id}>
              <div>
                  <Img src={`../assets/${item.product.image}`} alt="image item"/>
              </div>
              <ItemDescription>
                <InfoItem>
                  <Title>{item.product.name}</Title>
                </InfoItem>

                <InfoItem>
                  <Label>Score</Label>
                  <span><i className="fa fa-star"></i>  {item.product.score}</span>
                </InfoItem>
        
                <InfoItem>
                  <Label>Valor</Label>
                  <Info>R$ {item.product.price}</Info>
                </InfoItem>                    
              </ItemDescription>
              <OptionRemove onClick={() => handleRemoveItem({item})}>
                <span><i className="fa fa-trash"></i> Remover do Carrinho</span>
              </OptionRemove>
            </CardItem>
          );
        })}
        <Button onClick={() => handlePurchase()}>
          Finalizar
        </Button>
        <Button primary onClick={() => history.push("/")} >
          Continuar comprando
        </Button>
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

