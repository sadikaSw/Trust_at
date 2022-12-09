import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import phishing from "../assets/phishing.png";
import finger from "../assets/finger.png";
import AnalysisMain from "../assets/AnalysisMain.png";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/user_context";
import FormRow from "../components/FormRow";
import Faq from "react-faq-component";
import { useState } from "react";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';






function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress size="100px" color="error" variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}
      >
        <Typography variant="h5" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const Hero  = () => {
  const { checkIP, checkHash } = useGlobalContext();
  const [port, setPort] = useState("")
  const [ipaddress, setIpaddress] = useState("")
  const [res, setResponse] = useState("")
  const [hash, setHash] = useState("")
  const [res2, setRes2] = useState("")
  const [load1, setLoad1] = useState(false)
  const [load2, setLoad2] = useState(false)

  const checkIPSubmit = async (e) => {
    setLoad1(true)
    e.preventDefault()
   setResponse(await checkIP(port, ipaddress))
   setLoad1(false)
    //setResponse(JSON.parse(localStorage.getItem("ip")))

  }

  const checkHashSubmit = async (e) => {
    setLoad2(true)
    e.preventDefault();
    const dr = await checkHash(hash)
    setRes2(dr.results[hash])
    setLoad2(false)
  }

  return (
    <main>
    <Wrapper className="section-center">
      <center>
      <br /> <br />
      <article className="content">
        <div>
          <Slide left duration={1000}>
          <h1>
            <span className="title">Malware Analysis</span>
          </h1>
          <p>Help Security expert to Malware Analysis by Providing Port scanner and Hash Validation tools</p>
          </Slide>
          <hr />
            <Slide right>
              <article className="img-container">
                <div >
                <img src={AnalysisMain} className="lock"/>
                </div>
                <hr />
              </article>
            </Slide>
          <p>
            <br /><br /><br />
            Enhance your SOC operations with Trust@ threat intelligence analysis for URLs and domains with real-time Malware detection. Analyze URLs using our phishing and malware port scanner. This endpoint can also identify parked domains, compromised servers, malware, command and control (C2) networks, and similar suspicious behavior more. </p>
         
          </div>
          <br /><br />
      </article>

      <div className="verifybox">
          <h3>Port Scanner</h3>
          
          <p>Use Trust@ to find open ports on Internet facing systems with this online port scanner.</p>
          
         
          <img src={phishing} alt="nice table" /><br /><br />
          
        
                <TextField sx={{width:"50%"}} id="outlined-basic" label="Port number to be find....." variant="outlined" onChange={(e) => setPort(e.target.value)}/>
                <br /><br />
    
                <TextField sx={{width:"50%"}} id="outlined-basic" label="IP address to scan....." variant="outlined" onChange={(e) => setIpaddress(e.target.value)}/>
                <br /> <br /> 
                 <button
                  type="submit"
                  className="btn btn-block"
                  onClick = {(e) => checkIPSubmit(e)}  
                >
                  Submit
                </button>
              
                <br /> <br />
        

              <Box sx= {{visibility:`${res === ""?"hidden":"block"}`}}><Alert variant="filled" severity={res?.status=="open"?"success":"error"}>
              {res?.status}
            </Alert></Box>
            
           

          <br /> <br />
          <Box sx={{ width: '100%', visibility: `${load1?"block":"hidden"}`}}>
            <LinearProgress />
          </Box>
        
      </div>
      <h4>Output parameters</h4>
      <div>
      <TableContainer component={Paper} sx={{ width:"70%" }} >
      <Table aria-label="simple table">
        
        <TableBody>
         
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Open</TableCell>
              <TableCell align="right"> The term open port is used to mean a TCP or UDP port number that is configured to accept packets.</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Closed</TableCell>
              <TableCell align="right">A port which rejects connections or ignores all packets directed at it is called a closed port.</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      <br /><br /><br />
      <div className="verifybox">
          <h3>Hash Validation</h3>
          
          <p>Verify MD5 and SHA-1 format hashes</p>
          <br />
          <img src={finger} /> <br />
       
                
          <br />
            <TextField sx={{width:"50%"}} id="outlined-basic" label="Hash to verify MD5 / SHA-1....." variant="outlined" onChange={(e) => setHash(e.target.value)}/>

                <br /> <br />
                 <button
                  type="submit"
                  className="btn btn-block"
                  onClick = {(e) => checkHashSubmit(e)}
                >
                  Submit
                </button>
                <br /> <br />
              
          
              <Box sx={{visibility: `${res2!=""?"block":"hidden"}`}}>
              {
              res2?.detectionRate == null ? <Alert variant="filled" severity="success">Non Maliciuos</Alert>: 
              
              <CircularProgressWithLabel value={res2?.detectionRate} />
              }
              </Box>
            
          <br /> <br />
      
          <Box sx={{ width: '100%', visibility: `${load2?"block":"hidden"}`}}>
            <LinearProgress />
          </Box>
      </div>
      <h4>Output parameters</h4>

      <div left delay={1000}>
      <TableContainer component={Paper} sx={{ width:"70%" }}>
      <Table aria-label="simple table">
        
        <TableBody>
         
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Detection Rate</TableCell>
              <TableCell align="right">The digest of the result is always lower-case. If a digest isn't a valid MD5 or SHA-1, the result will not contain that digest.

</TableCell>
            </TableRow>
          
        
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      <br /><br />
      <h4>FAQs</h4>
      
      <hr /><br /><br />
      <Slide right duration={1000}>
      <h4>Why Phishing Analysis is important?</h4>

      <p>At present, phishing is considered one of the most frequent examples of fraud activity on the Internet. Phishing attacks can lead to severe losses for their victims including sensitive information, identity theft, companies, and government secrets.</p>
      <h4>What is Phishing</h4>
      <p>Phishing is a type of attack carried out in order to steal information or money. Phishing attacks can occur through email, phone calls, texts, instant messaging, or social media. Attackers are after your personal information: usernames, passwords, credit card information, Social Security numbers. However, they are also after intellectual property, research data, and institutional information. Phishing scams can have several goals, including:

Stealing from victims - modifying direct deposit information, draining bank accounts.
Performing identity theft - running up charges on credit cards, opening new accounts.
Purchasing items - buying gift cards, tricking victims into working on their behalf.
Getting victims to act - clicking on malicious links, installing malware on their devices.</p>
      <h4>How can I identify a Phishing scam?</h4>
      <p>The first rule to remember is to never give out any personal information in an email.  No institution, bank or otherwise, will ever ask for this information via email.  It may not always be easy to tell whether an email or website is legitimate and phishing emails are using social engineering tactics to make create sophisticated scams.

In the body of an email, you might see questions asking you to “verify” or “update your account” or “failure to update your records will result in account suspension.” It is usually safe to assume that no credible organization to which you have provided your information will ever ask you to re-enter it, so do not fall for this trap.
Any email that asks for your personal or sensitive information should be seriously scoured and not trusted. Even if the email has official logos or text or even links to a legitimate website, it could easily be fraudulent. Never give out your personal information.</p>
      <h4>What can I do to avoid Phishing attacks?</h4>
      <p>We encourage the UC Berkeley community to take an active role in protecting themselves against phishing attacks. Use our helpful tips in our Fight the Phish campaign to recognize and report phishing attacks.

Additionally:

If you are worried about an account, call the organization which maintains it (like your bank)
Check the email address—does it really match the text of the email? Does it match the legitimate email of the organization it is supposed to be tied to?
Check the security certificate of any website into which you are entering sensitive data. They should usually begin with https:// Some browsers will display padlock symbols in the address and status bars. Anything on a website saying it is safe can be falsified and is not verified by the browser you are using, and so shouldn’t be trusted
Keep your software current
Install antivirus software</p>
</Slide>
      </center>
    </Wrapper>
    </main>

  );
};


const Wrapper = styled.section`
text-align: center;

.input-text{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.lock {
  background: var(--clr-primary-7);
  border-radius: 3px;
  width: 600px;
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
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}
.img-container {
  display: none;
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

button {
  width: 20%;
  height:42px;
  padding: 10px;
  background: #607EAA;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

button:hover {
  background: #1C3879;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
}
.verifybox{
  background-color: #EAE3D2;
  width: 100%;
  border: 1px solid #EAE3D2;
  padding: 20px;
  margin: 20px;

}


  img {
    height: 100px;
  }

.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
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

.
@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }

  .title {
    color: var(--clr-primary-1);
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


.
@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }

  .title {
    color: var(--clr-primary-1);
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
