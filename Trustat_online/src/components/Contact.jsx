import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

const Contact = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <Wrapper>
      <center>
      <div className="section-center" data-aos="fade-up">
        <h3>Ready to eliminate fraud?</h3>
        <text>Start fighting fraud in minutes!</text><br></br>
        <text>Questions?</text>
        <br /><br />
        <Zoom left delay={1000}>
          <Link to="/contact" className="btn hero-btn">
            Contact Us
          </Link>
        </Zoom>
        
      </div>
      </center>
    </Wrapper>
  );
};
const Wrapper = styled.section`
background: #F9F5EB;
  h3 {
    text-transform: none;
    font-size: 50px;
  }

  text{
    font-size: 30px;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1rem;
    }
    .hero-btn {
      padding: 1rem 10rem;
      font-size: 1rem;
    }

   .textBox{
    width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #EAE3D2;
  border-radius: 4px;
  }

  h3:hover {
    background-color: var(--clr-primary-9);
    width: 450px;
    height: 1rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
  }
  .submit-btn {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }

  .moreBtn{
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  .moreBtn:hover {
    background-color: #4CAF50;
    color: white;
  }
`;

export default Contact;
