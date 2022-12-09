import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import mainImage from "../assets/mainpic.jpeg";


const Hero = () => {
  return (
    <center>
    <Wrapper className="section-center">
      <article className="content">
        <Slide left duration={1000}>
          <h1>
          <br></br><br></br>
            <span className="title">Accurate, fast and secure validator </span>
          </h1>
        </Slide>
        <Slide left>
          <p>
          Cybersecurity is the protection of internet-connected systems such as hardware, software and data from cyberthreats. The practice is used by individuals and enterprises to protect against unauthorized access to data centers and other computerized systems. With an increasing number of users, devices and programs in the modern enterprise, combined with the increased deluge of data -- much of which is sensitive or confidential -- the importance of cybersecurity continues to grow. The growing volume and sophistication of cyber attackers and attack techniques compound the problem even further. Therefor our products provides better solutions for your matters.
          </p>
        </Slide>
        <Zoom left delay={1000}>
          <Link to="/learning" className="btn hero-btn">
            Learn More
          </Link>
        </Zoom>
      </article>
    
      
      <Slide right>
        <article className="img-container">
          <div >
          <img src={mainImage} className="lock" alt="../assets/mainpic.jpeg" />
           </div>
        </article>
      </Slide>
    </Wrapper>
        <br></br>
    </center>

  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  /* .main-img{
    /* width: 60rem; */
    min-width: 30rem;
    height: 20rem;
  } */
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
  .lock {
    background: var(--clr-primary-7);
    border-radius: 3px;
    width: 500px;
    height: 450px;
    margin-top: 60px;
    margin-left: 60px;
    position: relative;
    box-shadow: 4.5px 4.5px 1.7px rgba(0, 0, 0, 0.022),
      9.7px 9.7px 4.7px rgba(0, 0, 0, 0.032),
      16.2px 16.2px 9.7px rgba(0, 0, 0, 0.04),
      25.9px 25.9px 18.6px rgba(0, 0, 0, 0.048),
      44.2px 44.2px 35.9px rgba(0, 0, 0, 0.058),
      100px 100px 80px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    transform:translateX(0px)
    transition: 1.1s all;
    
  }
  .lock::before {
    content: "";
    display: block;
    position: absolute;
    border: 4px solid var(--clr-primary-7);
    top: -100px;
    left: 12px;
    width: 230px;
    height: 110px;
    border-radius: 50px 50px 0 0;
    transform:translateX(0px)
    transition: 1.1s all;
  }
  .lock:hover{
    transform : translateX(20px);
    box-shadow:
  5.7px 7.9px 1.7px rgba(0, 0, 0, 0.034),
  12.2px 16.9px 4.7px rgba(0, 0, 0, 0.048),
  20.5px 28.4px 9.7px rgba(0, 0, 0, 0.06),
  32.7px 45.4px 18.6px rgba(0, 0, 0, 0.071),
  55.6px 77.3px 35.9px rgba(0, 0, 0, 0.086),
  126px 175px 80px rgba(0, 0, 0, 0.12)
;
filter:blur(0.5px)
  }
  .lock:hover::before{
    transform : translateX(5px)
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
      padding: 1rem 1.5rem;
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
