import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import CartIconImg from "../assets/cart-icon.svg";

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
  margin-bottom: 20px;
`;

const Link = styled(NavLink)`
  /* padding: 0 15px; */
  text-decoration: none;
  color: aliceblue;
  font-size: 16px;
  margin: 8px;
`;

const Img = styled.img`
  width: 26px;
`;

const Header = () => {
    return(
        <Nav>
          <NavBrand>Challenge Supera</NavBrand>
          <div>
            <Link to="">Home</Link>
            <Link to="/">Produtos</Link>
            <Link to="/cart"><Img src={CartIconImg} alt="cart"/>Carrinho</Link>
          </div>
        </Nav>
    );
}

export default Header;