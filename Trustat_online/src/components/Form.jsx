import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  AOS.init({
    duration: 1000,
  });
return (
  <Wrapper className="section">
    <div className="title" data-aos="fade-up">
      <h2>FAQs with Trust@</h2>
      
      </div>
      
  </Wrapper>
);
};

const Wrapper = styled.section`
background: white;

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
border: 2px solid red;
border-radius: 4px;
}

.emailsearchBtn{
  display: inline-block;
  padding: 15px 50px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #999;
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

`;


export default Form;
