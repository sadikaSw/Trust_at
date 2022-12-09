import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import login from "../assets/login.png";
import password from "../assets/password.png";
import resource from "../assets/resource.png";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProducts = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <Wrapper className="section">
      <div className="title" data-aos="fade-up">
        <h2>Free email, malware and security checker</h2>
        <div className="underline"></div>
        <br></br>
        <text>Enter a email like example@gmail.com and it will validate</text>
        <div>
        <form>
          <br></br><br></br>
          <Zoom left delay={1000}>
          <Link to="/EmailVerification" className="btn hero-btn">
          Check
          </Link>
        </Zoom>
        </form>
        </div>
        </div>
        
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #F9F5EB;
  height: 350px;

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 80px;
    }
  }
  
  .visually-hidden {
    
    position: absolute;
    white-space: nowrap;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    
}

  .textBox{
    width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #EAE3D2;
  border-radius: 4px;
  }

 
  .emailsearchBtn:hover {background-color: #3e8e41}
  .emailsearchBtn:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  .hero-btn {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }

`;

export default FeaturedProducts;
