import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import contact from "../assets/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Services = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <main>
      <PageHero title="Contact" />
      <Wrapper>
      
      <div className="content">
    
    <center>
   
        <div className="col-md-4">
          <div className="contact-info h-100">
           
            <h3>Contact Information</h3>
            <img src={contact} alt="contact" />
            <p className="mb-5">Please contact us, if you have any questions</p>
        
        
            <ul className="list-unstyled">
              <li className="d-flex">
                <span className="wrap-icon icon-room mr-3"></span>
                <span className="text">9757 Aspen Lane South Richmond Hill, NY 11419</span>
              </li>
              <li className="d-flex">
                <span className="wrap-icon icon-phone mr-3"></span>
                <span className="text">+1 (291) 939 9321</span>
              </li>
              <li className="d-flex">
                <span className="wrap-icon icon-envelope mr-3"></span>
                <span className="text">info@mywebsite.com</span>
              </li>
            </ul>
           
          </div>
        </div>
        </center>
      </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  min-height: 120vh;

  .text{
    font-size: 20px;
    text-align: center;
  }
  .title {
    text-align: center;
  }
  .header h2 {
    margin-bottom: 2rem;
  }
  padding: 5rem 0;
  background: var(--clr-white);
  .sub-title {
   
    color: var(--clr-grey-4);
  }
 
  

  h3,
  h4 {
    color: var(--clr-grey-2);
  }


`;
export default Services;
