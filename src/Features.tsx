import React from 'react';
import "./App.css";
import "./Features.css";
import contact from "./static/feature-contact.svg";
import message from "./static/feature-message.svg";
import referral from "./static/feature-referral.svg";

class Features extends React.Component<{}, {}> {

   render() {
      return (
         <div className="land-features">
            <h1
            className="header-heavy">Connecting Mental Healthcare</h1>
            <br/>
            <div 
            className="d-flex flex-space-between flex-wrap">
               <div>
                  <img src={contact} alt="Contact"/>
                  <h2>Real-Time Professional Directory</h2>
                  <p className="body-text">Set your availability, consult with 
                  your colleagues, discover new connections, and expand your professional network.</p>
               </div>
               <div>
                  <img src={referral} alt="Referral"/>
                  <h2>Referral Management Software</h2>
                  <p className="body-text">Create accurate referrals, fast, find the best resources
                  for your clients, and accept the right clients for your practice.</p>
               </div>
               <div>
                  <img src={message} alt="Message"/>
                  <h2>HIPAA Compliant Messaging</h2>
                  <p>Send and receive secure messages to verified professionals on a 
                     platform compliant with HIPAA guidelines.
                  </p>
               </div>
            </div>
            <div className="land-get-started">
               <h2
               className="header-bold">Connect, communicate, and collaborate on a 
               modern, HIPAA-compliant platform.</h2>
               <a 
               className="land-get-started-btn" href="#">Get Started</a>
            </div>
         </div>
      )
   }
}

export default Features;