import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useGlobalContext } from "../context/user_context";

const CartButtons = () => {
  const { user, logout } = useGlobalContext();
  const { closeSidebar } = useProductsContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/AboutPage" className="auth-btn" onClick={closeSidebar}>
        About Us
      </Link>
      {user ? (
        <Link to="/" className="auth-btn" onClick={(closeSidebar, logout)}>
          {user}
        </Link>
      ) : (
        <Link to="/register" className="auth-btn" onClick={closeSidebar}>
          Login
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: white;
    letter-spacing: var(--spacing);
    padding: 0.5rem;
  }
  .auth-btn:hover {
    border-bottom: 2px solid var(--clr-primary-7);
    color: var(--clr-black);
    width: 5rem;
    margin-left: 0;
  }
`;

export default CartButtons;
