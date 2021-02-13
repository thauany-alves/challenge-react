import styled from 'styled-components';

const CardsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
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


const Products = () => {
    return(
        <CardsContainer>
          <Card>
            <div class="card_image_container">
              <Img src="https://img.youtube.com/vi/RlK8nu_YErc/maxresdefault.jpg" alt="Video Aula" />
            </div>

            <ProductName>
              <p>Tudo que você precisa saber sobre carreira</p>
            </ProductName>

            <ProductInfo>
              <p>14 minutos</p>
              <Price class="card_price">Free</Price>
            </ProductInfo>
          </Card>

          <Card>
            <div class="card_image_container">
              <Img src="https://img.youtube.com/vi/RlK8nu_YErc/maxresdefault.jpg" alt="Video Aula" />
            </div>

            <ProductName>
              <p>Tudo que você precisa saber sobre carreira</p>
            </ProductName>

            <ProductInfo>
              <p>14 minutos</p>
              <Price class="card_price">Free</Price>
            </ProductInfo>
          </Card>

          <Card>
            <div class="card_image_container">
              <Img src="https://img.youtube.com/vi/RlK8nu_YErc/maxresdefault.jpg" alt="Video Aula" />
            </div>

            <ProductName>
              <p>Tudo que você precisa saber sobre carreira</p>
            </ProductName>

            <ProductInfo>
              <p>14 minutos</p>
              <Price class="card_price">Free</Price>
            </ProductInfo>
          </Card>
        </CardsContainer>
    );
}

export default Products;