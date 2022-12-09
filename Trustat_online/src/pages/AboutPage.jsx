import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import download from "../assets/download.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <Zoom left>
          <img src={download} alt="download" />
        </Zoom>
        <Fade bottom>
          <article>
            <div className="title">
              <h2>About Trust@</h2>
              <div className="underline"></div>
            </div>
            <p>
            
            </p>
            <p>
            Trust@ is a free and open-source tools that provide features to security experts to do their task. Nmap is used to discover hosts and services on a computer network by sending packets and analyzing the responses. Trust@ provides a number of features for probing computer networks, including Email Verification and service, phishing analysis tools such as hashing and port scanners and proxy detection. These features are extensible by scripts that provide more advanced service detection, vulnerability detection, and other features. Trust@ can adapt to network conditions including latency and congestion during a scan.


            </p>
          </article>
        </Fade>
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
    border:2px solid black;
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
