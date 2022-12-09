import { useState } from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import email1 from "../assets/email1.png";
import emailVeriMain from "../assets/emailVeriMain.png";
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
      console.log(email)
      if(email) {
        axios.get(`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_8jHscE9oFBFaxOmcxqDFrH5dLNWYb&emailAddress=${email}`).then((res)=> {
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
            <Slide left duration={1000}>
            <h1>
              <span className="title">Email Address Verification</span>
            </h1>
            <p>Verify Email Addresses with Confidence & Precision</p>
            </Slide>
            <hr />
            <Slide right>
              <article className="img-container">
                <div >
                <img src={emailVeriMain} className="lock" />
                </div>
              </article>
            </Slide>
           
            <hr />
            <br /><br />
            
            <p>
            Trust@ email address verification service can validate email addresses and identify high risk emails in real-time. All Trust@ IPQS clients benefit from this data to achieve precision accuracy email validation while ensuring users and transactions are fraud-free.
            Confidently verify email addresses to improve deliverability and open rates while analyzing extensive email address reputation scoring for users in any country. </p>
            </div>
            <br /><br />
        </article>
       
        <div className="verifybox">
        <Slide left duration={1000}>
            <h3>Free email address verification tool</h3>
            
            <p>Check whether an email address exists using our free email address verifier. Email address verification technology from Email Hippo identifies fake emails and possible bounces without ever sending an email.</p>
        </Slide>  
            
            
            <img src={email1} alt="nice table" />
            <br /> <br /><br />
         
              
                <TextField sx={{width:"50%"}} id="outlined-basic" label="email address to verify....." onChange={(e)=>setemail(e.target.value)} variant="outlined" />
                 <br /> <br />
                <p>By submitting data above, you are agreeing to our Terms of Service and Privacy Policy, and to the sharing of your Sample submission with the security community. Please do not submit any personal information; Trust@ is not responsible for the contents of your submission.</p>
                  <div style ={{flexDirection:"row"}}><div style= {{alignContent:"center"}}><button
                  type="submit"
                  className="btn btn-block"
                  disabled={isLoading}     
                  onClick = {onSubmit}  
                >
                 Submit
                </button></div></div>
              


            <br /> <br />
            <Box sx={{ width: '100%', visibility: `${load1?"block":"hidden"}`}}>
            <LinearProgress />
          </Box>

            <TableContainer component={Paper} sx={{ width:"50%" }} >
      <Table aria-label="simple table">
        
        <TableBody>
         
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Catch All Check</TableCell>
              <TableCell align="right">{emailcheck?.catchAllCheck}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Disposable Check</TableCell>
              <TableCell align="right">{emailcheck?.disposableCheck}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">DNS Check</TableCell>
              <TableCell align="right">{emailcheck?.dnsCheck}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Domain</TableCell>
              <TableCell align="right">{emailcheck?.domain}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Email Address</TableCell>
              <TableCell align="right">{emailcheck?.emailAddress}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Format Check</TableCell>
              <TableCell align="right">{emailcheck?.formatCheck}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Free Check</TableCell>
              <TableCell align="right">{emailcheck?.freeCheck}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">SMTP Check</TableCell>
              <TableCell align="right">{emailcheck?.smtpCheck}</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        <br />
      <h4>Output parameters</h4>
      <div>
      <TableContainer component={Paper} sx={{ width:"70%" }}>
      <Table aria-label="simple table">
        
        <TableBody>
         
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Catch All Check</TableCell>
              <TableCell align="right">Tells you whether or not this mail server has a “catch-all” address. This refers to a special type of address that can receive emails for any number of non-existent email addresses under a particular domain. Catch-all addresses are common in businesses where if you send an email to test@hi.com and another email to non-existent test2@hi.com, both of those emails will go into the same inbox. Possible values are 'true' or 'false'. May be 'null' for invalid or non-existing emails.</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Disposable Check</TableCell>
              <TableCell align="right">	Tells you whether or not the email address is disposable (created via a service like Mailinator). This helps you check for abuse. This value will be 'false' if the email is not disposable, and 'true' otherwise. May be 'null' for invalid or non-existing emails.</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">DNS Check</TableCell>
              <TableCell align="right">	Ensures that the domain in the email address, eg: gmail.com, is a valid domain. This value will be 'true' if the domain is good and 'false' otherwise. May be 'null' for invalid or non-existing emails.</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Domain</TableCell>
              <TableCell align="right">An email domain is the part of an email address that comes after the @ symbol. For personal emails, it is most often gmail.com, outlook.com or yahoo.com. However, in a business context, companies are almost certain to have their own email domain.</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">Email Address</TableCell>
              <TableCell align="right">The email address to be verified.</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">format Check</TableCell>
              <TableCell align="right">	Lets you know if there are any syntax errors in the email address. This is a basic check that’s done to catch any simple typos or major errors. This value will be 'true' if there are no errors, and 'false' otherwise. Behind the scenes, the API service is handling all these types of verification checks for you in a number of interesting ways.</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">free Check</TableCell>
              <TableCell align="right">	Check to see if the email address is from a free email provider like Gmail or not. This value will be 'false' if the email address is not free, and 'true' otherwise. May be 'null' for invalid or non-existing emails.</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">smtp Check</TableCell>
              <TableCell align="right">	Checks if the email address exists and can receive emails by using SMTP connection and email-sending emulation techniques. This value will be 'true' if the email address exists and can receive email over SMTP, and 'false' if the email address does not exist on the target SMTP server or temporarily couldn't receive messages. The value will be null if the SMTP request could not be completed, mailbox verification is not supported on the target mailbox provider, or not applicable.</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      <br /><br /><br />
        
        <h4>FAQs</h4>
        <hr /><br /><br />
        <div >
          <Slide right duration={1000}>
        <h4>Why Email verification is important?</h4>
        <p>Due to fears of SPAM and data leaks, many users online are reluctant to give out a real email address and frequently use fake emails or temporary inboxes from disposable email services. These services also provide an easy solution for fraudsters to create duplicate accounts and bypass registration filters. Using a simple email verifier performs real-time expert email validation to ensure users are entering valid emails with healthy reputation scores.
  
  Protect your company from malicious users with email fraud prevention by IPQS. A reverse email lookup can detect accounts with fake emails, disposable inboxes, or even stolen user data. Validating emails in real-time through an API can greatly decrease fraudulent behavior and improve the value of your user base. It can also be helpful for detecting typos from users with good intentions, such as when a user accidentally misspells their email address.
  
  Beyond user quality, email verification is an important practice to ensure your email can be successfully delivered directly into a user's inbox, rather than landing in the SPAM folder or bouncing back due to being blacklisted. The IPQS email verifier removes spamtraps and invalid emails from your contact lists. Only messaging valid emails that are active with the mail service provider will ensure you can maintain a healthy sender score and avoid blacklists. It's best to validate marketing lists every 6 months at a minimum.</p>
        <h4>How to Use the Email Address Verifier?</h4>
        <p>Simply enter the email address in the email validator to verify an email address with instant results. If you'd like to verify a bulk email address list or query results via an API, please create a free account, which will allow you to upload an email marketing CSV list. Results are instant and are always performed with fresh data, so you can confidently verify email addresses with our service for any mail service provider. Reduce bounces for mail providers in any country. Reverse email lookups can also identify user data and demographics associated with the email address.</p>
        <h4>Check If An Email Address is Valid</h4>
        <p>Using the verification tool above, you can check if an email address is valid and determine if the email is an active inbox, that's ready to accept mail. This indicates that the email account is active and a real user is behind the email address. Taking these measures ensures you can send your client or prospect a successful message in the future. One of the most frustrating parts of running a business is having a good lead, but not being able to get in touch with them. In other situations, fake accounts may be causing problems which are likely using invalid email addresses.</p>
        <h4>How to Use the Email Address Verifier?</h4>
        <p>Simply enter the email address in the email validator to verify an email address with instant results. If you'd like to verify a bulk email address list or query results via an API, please create a free account, which will allow you to upload an email marketing CSV list. Results are instant and are always performed with fresh data, so you can confidently verify email addresses with our service for any mail service provider. Reduce bounces for mail providers in any country. Reverse email lookups can also identify user data and demographics associated with the email address.</p>
        </Slide>
        </div>
        </center>
      </Wrapper>
      </main>
  
    );
  };
  


const Wrapper = styled.section`
text-align: center;

.text_area{
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
}
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  width: 80%;
  background: #f1f1f1;
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

export default EmailVerifer;
