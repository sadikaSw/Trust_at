import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import email1 from "../assets/email1.png";
import phishing from "../assets/phishing.png";
import servers from "../assets/servers.png";
import Zoom from "react-reveal/Zoom";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <Wrapper className="section">
      
      <div className="title" data-aos="fade-up">
        <br></br><br></br>
        <center><h2 className="featuresTopic">Cyber protection you can depend on</h2></center>
        <div className="underline"></div>
        
        <div className="section-center featured">
          <div data-aos="fade-up-right">
            <img src={email1} alt="nice table" />
            <div>
              <text>Email Verification</text>
              <p>
                Validate Email address, URL and files
              </p>
              <br></br>
              <Link to="/EmailVerification" className="btn hero-btn">
              Verify
              </Link>
            </div>
            
          </div>
          <div data-aos="fade-up-right">
            <img src={phishing} alt="password" />
            <div>
            <text>Malware Analysis</text>
              <p>
               validate port, URL and files
              </p>
              <br></br>
              <Link to="/PhishingAnalysis" className="btn hero-btn">
              Analysis
              </Link>
            </div>
          </div>
          <div data-aos="fade-up-right">
            <img src={servers} alt="resource" />
            <div>
            <text>Proxy Detection</text>
              <p>
                Validate IP address
              </p>
              <br></br>
              <Link to="/ProxyDetection" className="btn hero-btn">
              Detect
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br>
    </Wrapper>
    
  );
};

const Wrapper = styled.section`
background: white;

  .title {
    text-align: center;
    font-size:20px;
  }
  .header h2 {
    margin-bottom: 1rem;
  }
text{
  font-size:20px;
  font-weight: bold;
}
.hero-btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
  .sub-title {
    padding: 3rem 0;
    color: var(--clr-grey-4);
  }

  .hero-btn:hover {
    color: var(--clr-black);
    background: white;
  }
  .space {
    padding: 1.5rem 0;
    color: white;
  }
  .background-blur {
    filter: blur(3px);
  }
  .disabledCursor {
    cursor: default;
  }
  h3,
  h4 {
    color: white;
    font-size:2rem;
  }
  padding: 5rem 0;

  background: white;

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-grey-7);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-grey-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 20px;
    box-shadow: 3.7px 1.6px 2.2px rgba(0, 0, 0, 0.017),
      8.8px 3.9px 5.3px rgba(0, 0, 0, 0.024),
      16.5px 7.3px 10px rgba(0, 0, 0, 0.03),
      29.5px 13px 17.9px rgba(0, 0, 0, 0.036),
      55.1px 24.2px 33.4px rgba(0, 0, 0, 0.043),
      132px 58px 80px rgba(0, 0, 0, 0.06);
    p {
      color: var(--clr-black);
      font-size:15px;
    }
  }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 1rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
  .featured {
    margin: 0.5rem auto;
    display: grid;
    gap: 2rem;
    img {
      height: 100px;
    }
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  .featuresTopic{
    float:center;
  }

`;
export default Services;
