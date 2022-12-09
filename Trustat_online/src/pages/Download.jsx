import React from "react";
import styled from "styled-components";
import download from "../assets/download.png";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <Slide left duration={1000}>
          <h1>
            <span className="title"></span>

          </h1>
        </Slide>
        <Slide left>
          <p>
            You can download it and use in the pc.
          </p>
        </Slide>
        <Zoom left delay={1000}>
          <a to="/products" className="btn hero-btn">
            .exe
          </a>
        </Zoom>
      </article>
      <Slide right>
        <article className="img-container">
          
          <img src={download} alt="download" />
          
        </article>
      </Slide>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
.img{
  height:500px;
}

  .img-container {
    display: none;
   
  }
  .title {
    color: var(--clr-primary-1);
    text-decoration: underline;
    line-height: 1.2;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      
    }
    .img-container {
      display: block;
      position: relative;
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
