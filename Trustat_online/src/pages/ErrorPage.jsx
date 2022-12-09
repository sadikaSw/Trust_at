import React from "react";
import styled from "styled-components";
import error from "../assets/error.png";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Wrapper className="full-page">
      <div>
        <Zoom top duration={1000}>
          <img src={error} alt="not found" />
          <h3>404! Page Not Found</h3>
          <p>Try Again!!</p>
        </Zoom>
        <Pulse duration={2000}>
          <Link to="/" className="home">
            back home
          </Link>
        </Pulse>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  text-align: center;
  min-height: 80vh;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
  .home {
    color: var(--clr-primary-7);
  }
`;
export default ErrorPage;
