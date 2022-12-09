import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import productImg from "../assets/product.svg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="product" />
      <Wrapper className="page section section-center">
        <Fade bottom>
          <article>
            <div className="title">
              <h2>How to Use...</h2>
              <div className="underline"></div>
            </div>
            <p>
              <ul>
                <li>
                  🔴
                  <b>
                    {" "}
                    First you need to{" "}
                    <u>create a user account in the password manager</u>. 🔐
                  </b>
                </li>
                <li>
                  🔴
                  <b>
                    {" "}
                    Then you can save your password or{" "}
                    <u>generate password very secure</u>.
                  </b>
                </li>
                <li>
                  🔴
                  <b>
                    {" "}
                    Then you can save your Note <u>very secure</u>. 🔐
                  </b>
                </li>
              </ul>
            </p>
            <p>
              <Link to="activity" className="btn">
                Save password
              </Link>
            </p>
          </article>
        </Fade>
        <Zoom left>
          <img src={productImg} alt="producttimg" />
        </Zoom>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: 20px;
    border: 2px solid yellow;
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
