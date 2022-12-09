import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import education from "../assets/education.png";
import phishingEd from "../assets/phishingEd.jpg";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import Faq from "react-faq-component";




const Hero  = () => {
  return (
    <main>
    <Wrapper className="section-center">
      
      <br /> <br />
      <article className="content">
      
        <div>
          <Slide left duration={1000}>
          <h1>
            <span className="title">CYBERCRIME IS ON THE RISE. <br /> RISE TO THE CHALLENGE.</span>
          </h1>
          </Slide>
          <img className="img-size1" src={education} alt="nice table" />

          <hr />
          <p>
          Because of the threat to online safety and national security, cyber security specialists are needed on a large scale to help combat everything from terror attacks to financial disasters. If you think you have the stuff to help prevent and predict these attacks, why not begin investigating cyber security education programs specially designed to help you succeed in this in-demand field?
         </p>
          <Slide right duration={1000}>
          <center>
          <table className="table">
            <tr>
              <th><h2>Cyber Security Awareness Topics</h2></th>
            </tr>
            <center>
            <tr>
              <td><li> Phishing attacks</li></td>
            </tr>
            <tr>
              <td><li>  Removable media</li></td>
            </tr>
            <tr>
              <td><li>  Passwords and Authentication</li></td>
            </tr>
            <tr>
              <td><li> Physical security</li></td>
            </tr>
            <tr>
              <td> <li> Mobile Device Security</li></td>
            </tr>
            <tr>
              <td><li> Working Remotely</li></td>
            </tr>
            <tr>
              <td><li> Public Wi-Fi</li></td>
            </tr>
            <tr>
              <td><li>  Cloud Security</li></td>
            </tr>
            <tr>
              <td><li> Social Media Use</li></td>
            </tr>
            <tr>
              <td><li> Internet and Email Use</li></td>
            </tr>
            <tr>
              <td><li> Social Engineering</li></td>
            </tr>
            <tr>
              <td><li> Security at Home</li></td>
            </tr>
            </center>
          </table>
          </center>
          <br /><br /><br />
          <hr />
          <h3>1.  Phishing attacks</h3>
          <p>Phishing remains one of the most effective avenues of attack for cyber criminals. Having doubled in 2020, phishing attacks steadily increased throughout 2021, with remote work making it harder for businesses to ensure their users aren't falling victim. 

              But why is phishing still such a threat to businesses in 2022?

              One major factor is due to how sophisticated these types of attacks have become. Attackers are now using smarter techniques to trick employees into compromising sensitive data or downloading malicious attachments. 

              For example, business email compromise (BEC) is a common form of phishing that uses prior research on a specific individual — such as a company's senior executive — in order to create an attack that can be incredibly difficult to distinguish from a real email.

              Partner these more intelligent attacks with the common misconception that phishing is 'easy to spot', then there is no wonder why many businesses are forecast to suffer a phishing-related breach in 2022.

              Employees need regular training on how the spot phishing attacks that use modern techniques, as well as how to report a phishing attack as soon as they believe they have been targeted.</p>
                  
              <img className="img-size" src={phishingEd} alt="nice table" />
          <hr /><br /><br />
          <h3>2.  Removable media</h3>
          <p>Another security awareness topic that is used daily by companies is removable media. Removable media is the portable storage medium that allows users to copy data to the device and then remove it from the device to another and vice versa. USB devices containing malware can be left for end-users to find when they plug this into their device.

            "Researchers dropped nearly 300 USB sticks on the University of Illinois Urbana-Champaign campus. 98% of these drives were picked up! In addition, 45% of these drives were not only picked up, but individuals clicked on the files they found inside"*

            As well as understanding the risks your employees need to know how to use these devices safely and responsibly in your business. There are numerous reasons a company would decide to use removable media in their environment. However, with all technologies, there will always be potential risks. As well as the devices themselves, it is important your employees are protecting the data on these devices. Whether it's personal or corporate, all data has some form of value.

            A few common examples of removable media you and your employees might use in the workplace are:

            USB sticks
            SD cards
            CDs
            Smartphones
            This security awareness topic should be included in your training and cover examples of removable media, why it's used in businesses, as well as how your employees can prevent the risks such as lost or stolen removable devices, malware infections and copyright infringement.</p>
          <hr /><br /><br />
          <h3>3.  Passwords and Authentication</h3>
          <p>A very simple but often overlooked element that can help your company's security is password security. Often commonly used passwords will be guessed by malicious actors in the hope of gaining access to your accounts. Using simple passwords, or having recognisable password patterns for employees can make it simple for cyber-criminals to access a large range of accounts. Once this information is stolen it can be made public or sold for profit on the deep web.

          Implementing randomised passwords can make it much more difficult for malicious actors to gain access to a range of accounts. Other steps, such as two-factor authentication, provide extra layers of security that protect the integrity of the account. </p>
          <hr /><br /><br />
          <h3>4.  Physical Security</h3>
          <p>If you're one of those people who leave their passwords on sticky notes on their desk, you may want to throw them away. Though many attacks are likely to happen through digital mediums, keeping sensitive physical documents secured is vital to the integrity of your company's security system.

            Simple awareness of the risks of leaving documents, unattended computers and passwords around the office space or home can reduce the security risk. By implementing a 'clean-desk' policy, the threat of unattended documents being stolen or copied can be significantly reduced.</p>
          <hr /><br /><br />
          <h3>5. Mobile Device Security</h3>
          <p>The changing landscape of IT technologies has improved the ability for flexible working environments, and along with it more sophisticated security attacks. With many people now having the option to work on the go using mobile devices, this increased connectivity has come with the risk of security breaches. For smaller companies this can be an effective way of saving budget, however, user-device accountability is an increasingly relevant aspect of training in 2022, especially for travelling or remote workers. The advent of malicious mobile apps has increased the risk of mobile phones containing malware which could potentially lead to a security breach.

            Best practice online courses for mobile device workers can help educate employees to avoid risks, without high-cost security protocols. Mobile devices should always have sensitive information password-protected, encrypted or with biometric authentication in the event of the device being lost or stolen. The safe use of personal devices is necessary training for any employees who work on their own devices.

            Best community practice is making sure workers should have to sign a mobile security policy.</p>
          <hr /><br /><br />
          <h3>6. Working Remotely</h3>
          <p>In 2021, the obvious need for remote working, combined with the increasing uptake, led to many companies taking drastic steps towards full time working from home policies. Remote working can be positive for companies and empowering for employees promoting increased productivity and greater work-life balance. This trend does however pose an increased threat to security breaches when not safely educated on the risks of remote working. Personal devices that are used for work purposes should remain locked when unattended and have anti-virus software installed. If a company wants to offer this incentive, it should focus on educating remote employees on safe working practices.

          Going into 2022 it is likely that this trend will continue. Though we hope to see offices reopening and a return to normal working life, companies have increasingly hired remote workers, and those who have adapted to WFH lifestyle may prefer to work this way. The need to train employees to understand and manage their own cybersecurity is apparent. As we've seen there is an increasing threat landscape targeting these individuals. Ensuring they keep security top of mind is a key theme of 2022.</p>
         <hr /><br /><br />
          <h3>7.  Public Wi-Fi</h3>
          <p>Some employees who need to work remotely, travelling on trains and working on the move may need extra training in understanding how to safely use public Wi-Fi services. Fake public Wi-Fi networks, often posing in coffee shops as free Wi-Fi, can leave end-users vulnerable to entering information into non-secure public servers.

            Educating your users on the safe use of public Wi-Fi and the common signs to spot a potential scam will increase the companies awareness and minimise risk. WIRED magazine provides a helpful guide on avoiding the risks of public Wi-Fi. </p>
         <hr /><br /><br />
          <h3>8.  Cloud Security</h3>
          <p>Cloud computing has revolutionised businesses, the way data is stored and accessed. These digital applications are transforming businesses, however, with large amounts of private data being stored remotely comes the risk of large-scale hacks. Many big companies are working on data protection, but by choosing the right cloud service provider cloud storage can be a much safer and cost-effective way of storing your company's data.

          As with the other topics mentioned, insider hacking is much more of a threat than to large scale cloud companies. Gartner predicts that by next year, 99% of all cloud security incidents will be the fault of the end-user. Therefore, cyber security awareness training can help guide employees through the secure use of cloud-based applications. </p>
          
          <hr /><br /><br />
          <h3>9. Social Media Use</h3>
          <p>We all share large parts of our lives on social media: from holidays to events and work. But oversharing can lead to sensitive information being available, making it easy for a malicious actor to pose as a trusted source (see: social engineering).

          Educating employees on protecting the privacy settings of their social media accounts, and preventing the spread of public information of your company will reduce the risk of the potential leverage that hackers can gain from this access to your personal network.</p>
          <hr /><br /><br />
          <h3>10.  Internet and Email Use</h3>
          <p>Some employees may have already been exposed to data breaches, by using simple or repeat emails for multiple accounts. One study found that 59% of end-users use the same password for every account. This means that if one account is compromised, a hacker can use this password on work and social media accounts to gain access to all of the user's information on these accounts.

          Often websites offer free software infected with malware, downloaded applications from trusted sources only is the best way to protect your computer from installing any malicious software. Educating employees on safe internet habits should be a key part of any IT induction, though some may see this training as obvious, it is a key part of the safety of any security programme.

          Many large websites have had large data breaches in recent years, if your information has been entered into these sites, it could have been made public and exposed your private information.</p>
          <hr /><br /><br />
          <h3>11.  Social engineering</h3>
          <p>Social engineering is a common technique malicious actors use to gain the trust of employees, offering valuable lures or using impersonation to gain access to valuable personal information. Employees need to be educated on security awareness topics that cover the most common social engineering techniques and the psychology of influence (for instance: scarcity, urgency and reciprocity), in order to combat these threats.

          For example, by posing as a viable client or offering incentives, private information can unwittingly be handed over to these malicious actors. Increasing employee awareness of the threat of these impersonations is critical in reducing the risk of social engineering.</p>
          <hr /><br /><br />
          <h3>12. Security at Home</h3>
          <p>Unfortunately, the threat of malicious actors does not stop when you leave the workplace. Many companies allow their employees to use their personal devices, which is a great cost-saving method and allows flexible working, however, there are risks associated with this. Unwittingly malware downloaded applications on personal devices can risk the integrity of the company's network if, for example, log-in details are compromised.

Additionally, The growing network of digital resources available to workers and companies has increased connectivity and productivity. However, these applications also pose a risk to the user, a study by Propeller found that phishing campaigns targeted to dropbox had a 13.6% click-through rate. Increasing employee knowledge, sharing encrypted files and authenticating downloads will reduce the risk.</p>


          
          
          
          
          
          
          
          
          
          </Slide>
        
       
   
          
        </div>
        
      </article>

  
     
    </Wrapper>
    </main>

  );
};


const Wrapper = styled.section`
text-align: center;
th{
  background-color: #EAE3D2;
}

.img-size{
  width:50rem;
  height:40rem;
}

.img-size1{
  width:40rem;
  height:30rem;
}

table{
  border: 1px solid;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left:20px;
  padding-right:20px;
  text-align: left;
  background-color: #F9F5EB;
}



form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

form.example button {
  float: left;
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

form.example button:hover {
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

export default Hero;
