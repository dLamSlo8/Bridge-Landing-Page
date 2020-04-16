import React from 'react';
import ReactGA from 'react-ga';
import "./App.css";
import "./Features.css";
import contact from "./static/feature-contact.svg";
import message from "./static/feature-message.svg";
import referral from "./static/feature-referral.svg";
ReactGA.initialize('UA-163426036-1'); 

class Features extends React.Component<{}, {}> {

   render() {
      return (
         <div className="land-features">
            <h2
            className="header-bold">Connecting Mental Healthcare</h2>
            <br/>
            <div 
            className="d-flex flex-space-between flex-wrap land-features-content">
               <div>
                  <img src={contact} alt="Contact"/>
                  <h4 className="body-heavy">Real-Time Professional Directory</h4>
                  <p className="body-text">Set your availability, consult with 
                  your colleagues, discover new connections, and expand your professional network.</p>
               </div>
               <div>
                  <img src={referral} alt="Referral"/>
                  <h4 className="body-heavy">Referral Management Software</h4>
                  <p className="body-text">Create accurate referrals, fast, find the best resources
                  for your clients, and accept the right clients for your practice.</p>
               </div>
               <div>
                  <img src={message} alt="Message"/>
                  <h4 className="body-heavy">HIPAA Compliant Messaging</h4>
                  <p className="body-text">Send and receive secure messages to verified professionals on a 
                     platform compliant with HIPAA guidelines.
                  </p>
               </div>
            </div>
            <div className="land-get-started d-flex flex-column flex-center flex-cross-center">
               <h3
               className="header-bold">Connect, communicate, and collaborate on a 
               modern, HIPAA-compliant platform.</h3>
               <a 
               className="land-btn land-get-started-btn" href="#signup" onClick={ () =>  ReactGA.event({
                  category: 'User',
                  action: 'Get Started'})}>Get Started</a>
            </div>
         </div>
      )
   }
}

export default Features;