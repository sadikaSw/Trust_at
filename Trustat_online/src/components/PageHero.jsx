import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <br /><br />
          <Link to="/">Home </Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
          <hr />
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #F9F5EB;
  width: 100%;
  min-height: 5vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
