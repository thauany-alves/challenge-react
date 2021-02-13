import React from 'react';
import styled from 'styled-components';

const NavBrand = styled.span`
  /* padding: 0 15px; */
  color: aliceblue;
  font-size: 20px;
  font-weight: bold;
`;

const Nav = styled.header`
  padding: 26px;
  border-bottom: 1px solid #333;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavLink = styled.a`
  /* padding: 0 15px; */
  text-decoration: none;
  color: aliceblue;
  font-size: 18px;
  margin: 8px;
`;

const Img = styled.img`
  width: 30px;
`;

const Header = () => {
    return(
        <Nav>
          <NavBrand>Challenge Supera</NavBrand>
          <div class="links">
            <NavLink href="#" target="_blank">Home</NavLink>
            <NavLink href="#" target="_blank">Products</NavLink>
            <NavLink href="#"><Img src="assets/cart-icon.svg"/> Carrinho</NavLink>
          </div>
        </Nav>
    );
}

export default Header;