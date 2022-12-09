import { useState } from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import servers from "../assets/servers.png";
import ProxyMain from "../assets/ProxyMain.png";
import { useGlobalContext } from "../context/user_context";
import { Navigate } from "react-router-dom";
import { PageHero } from "../components";
import FormRow from "../components/FormRow";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import Faq from "react-faq-component";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';

function EmailVerifer() {
  const [email, setemail] = useState("")

  const [emailcheck, setemailcheck] = useState({})

  const { isLoading, checkEmail } = useGlobalContext();
  const [load1, setLoad1] = useState(false)

 

    const onSubmit = (e) => {
      setLoad1(true)
      e.preventDefault();
      if(email) {
        axios.get(`https://ipqualityscore.com/api/json/ip/ciEFjqebgRTjCnnqsMpRnVOYgneIYVbN/${email}?strictness=0&allow_public_access_points=true&fast=true&lighter_penalties=true&mobile=true`).then((res)=> {
          console.log(res.data)
          setemailcheck(res.data)
          setLoad1(false)
        }).catch((error)=>{console.log(error)})
      }

    };

    
    let data = null;
    data =localStorage.getItem("email");
    const value = JSON.parse(data);
     console.log(value.data.result);
     const check = value.data.result
     localStorage.setItem(
       "check",
        JSON.stringify({ check })
      );
    
   
    return (
      <main>
      <Wrapper className="section-center">
    
        
        <center>
        <br /> <br />
        <article className="content">
          <div>
            <Slide  left duration={1000}>
            <h1>
              <span className="title">Proxy Detection</span>
            </h1>
            <p>Verify Email Addresses with Confidence & Precision</p>
            <hr />
            </Slide>
            <Slide right>
              <article className="img-container">
                <div >
                <img src={ProxyMain} className="lock" />
                </div>
              </article>
            </Slide>
            <br /><hr />
            <p>
              <br /><br />
              Trust@ Proxy Detection API is a comprehensive tool online to identify IP address connections with a high probability of malicious intent. Assign IP reputation scores to any click, payment, or user. This includes IP addresses that are open proxies, anonymous proxies, Tor nodes, VPNs, hosting providers, spammers, malware & spyware, botnets, residential proxies, and other undesirable shared connections that are highly inclined to engage in malicious activity.</p>
            
            </div>
            <br /><br />
        </article>
       
        <div className="verifybox">
            <h3>Proxy & VPN Detection</h3>
            
            <p>Provie Valid IP address</p>

            <img src={servers} alt="nice table" />
           
           <br /><br />
            
                 <TextField sx={{width:"50%"}} id="outlined-basic" label="IP address to verify....." onChange={(e)=>setemail(e.target.value)} variant="outlined" />
                 <br /><br />
                 <div style ={{flexDirection:"row"}}><div style= {{alignContent:"center"}}></div><button
                  type="submit"
                  className="btn btn-block"
                  disabled={isLoading}   
                  onClick = {onSubmit}    
                >
                 Submit
                </button></div>
                
               
                
           

            <br /> <br />
            <Box sx={{ width: '100%', visibility: `${load1?"block":"hidden"}`}}>
            <LinearProgress />
          </Box>

            <TableContainer component={Paper} sx={{ width:"50%" }}>
      <Table aria-label="simple table">
        
        <TableBody>
         
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Success</TableCell>
              <TableCell align="right">{emailcheck?.success?.toString()}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Message</TableCell>
              <TableCell align="right">{emailcheck?.message}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Fraud Score</TableCell>
              <TableCell align="right">{emailcheck?.fraud_score}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Country Code</TableCell>
              <TableCell align="right">{emailcheck?.country_code}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Organization</TableCell>
              <TableCell align="right">{emailcheck?.organization}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">ISP</TableCell>
              <TableCell align="right">{emailcheck?.ISP}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Timezone</TableCell>
              <TableCell align="right">{emailcheck?.timezone}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Recent abuse</TableCell>
              <TableCell align="right">{emailcheck?.recent_abuse?.toString()}</TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Is crawler</TableCell>
              <TableCell align="right">{emailcheck?.is_crawler?.toString()}</TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Host</TableCell>
              <TableCell align="right">{emailcheck?.host}</TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Proxy</TableCell>
              <TableCell align="right">{emailcheck?.proxy?.toString()}</TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Vpn</TableCell>
              <TableCell align="right">{emailcheck?.vpn?.toString()}</TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Tor</TableCell>
              <TableCell align="right">{emailcheck?.tor?.toString()}</TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Active_vpn</TableCell>
              <TableCell align="right">{emailcheck?.active_vpn?.toString()}</TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Active_tor</TableCell>
              <TableCell align="right">{emailcheck?.active_tor?.toString()}</TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Recent_abuse</TableCell>
              <TableCell align="right">{emailcheck?.recent_abuse?.toString()}</TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Bot_status</TableCell>
              <TableCell align="right">{emailcheck?.bot_status?.toString()}</TableCell>
              
            </TableRow>

        
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        <h4>Output parameters</h4>

        <div left delay={1000}>
        <TableContainer component={Paper} sx={{ width:"70%" }}>
        <Table aria-label="simple table">
          
          <TableBody>
          
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">proxy</TableCell>
                <TableCell align="right">Is this IP address suspected to be a proxy? (SOCKS, Elite, Anonymous, VPN, Tor, etc.)</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">host	</TableCell>
                <TableCell align="right">Hostname of the IP address if one is available.	</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">ISP</TableCell>
                <TableCell align="right">ISP if one is known. Otherwise "N/A".</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">Country code	</TableCell>
                <TableCell align="right">Two character country code of IP address or "N/A" if unknown.</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">timezone</TableCell>
                <TableCell align="right">Timezone of IP address if available or "N/A" if unknown.	</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">is_crawler	</TableCell>
                <TableCell align="right">Is this IP associated with being a confirmed crawler from a mainstream search engine such as Googlebot, Bingbot, Yandex, etc. based on hostname or IP address verification.</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">vpn</TableCell>
                <TableCell align="right">Is this IP suspected of being a VPN connection? This can include data center ranges which can become active VPNs at any time. The "proxy" status will always be true when this value is true.</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">tor</TableCell>
                <TableCell align="right">Is this IP suspected of being a TOR connection? This can include previously active TOR nodes and exits which can become active TOR exits at any time. The "proxy" status will always be true when this value is true.</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">bot_status</TableCell>
                <TableCell align="right">Indicates if bots or non-human traffic has recently used this IP address to engage in automated fraudulent behavior. Provides stronger confidence that the IP address is suspicious.</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">recent_abuse	</TableCell>
                <TableCell align="right">	This value will indicate if there has been any recently verified abuse across our network for this IP address. Abuse could be a confirmed chargeback, compromised device, fake app install, or similar malicious behavior within the past few days.</TableCell>
              </TableRow>
            
          
          </TableBody>
        </Table>
        </TableContainer>
        </div>
        <br /><br /><br />
        <Slide right duration={1000}>
        <h4>FAQs</h4>
        <hr /><br /><br />
        <h4>How Proxies & VPNs Allow VOD Abuse and OTT Theft</h4>
        <p>Proxies and VPNs allow consumers to bypass geo restrictions for VOD and OTT content. Using Proxy Detection, VOD and OTT providers can detect high risk connections in real-time to enforce geo restrictions and prevent abuse.Media consumption is changing! Until recently, media was almost always delivered via more legacy-type outlets such as cable television. 5 Ways to Prevent Click FraudIn our informational age, however, there are two newer ways media is consumed: VOD and OTT.</p>
        <h4>How to Identify High Risk Abusive IP Addresses Used by Fraudsters</h4>
        <p>IP addresses are the most common data point analyzed by site administrators, compliance teams, account managers, and other operational team members to detect if a user, transaction, or similar type of action is believed to be fraudulent. It is often the only data point that can be scored for a specific user or transaction. Even when the IP address is one of many data points, it carries significant weight in determining the overall risk profile of a user, click, or transaction.</p>
        <h4>Check If An Email Address is Valid</h4>
        <p>Using the verification tool above, you can check if an email address is valid and determine if the email is an active inbox, that's ready to accept mail. This indicates that the email account is active and a real user is behind the email address. Taking these measures ensures you can send your client or prospect a successful message in the future. One of the most frustrating parts of running a business is having a good lead, but not being able to get in touch with them. In other situations, fake accounts may be causing problems which are likely using invalid email addresses.</p>
        <h4>How to Use the Email Address Verifier?</h4>
        <p>Simply enter the email address in the email validator to verify an email address with instant results. If you'd like to verify a bulk email address list or query results via an API, please create a free account, which will allow you to upload an email marketing CSV list. Results are instant and are always performed with fresh data, so you can confidently verify email addresses with our service for any mail service provider. Reduce bounces for mail providers in any country. Reverse email lookups can also identify user data and demographics associated with the email address.</p>
        </Slide>

        </center>
      </Wrapper>
      </main>
  
    );
  };
  


const Wrapper = styled.section`
text-align: center;

.lock {
  background: var(--clr-primary-7);
  border-radius: 3px;
  width: 700px;;
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

.result1{
  background:white;
  font-size: 20px;
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

export default EmailVerifer;
