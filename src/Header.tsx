import React from 'react';
import ReactGA from 'react-ga';
import "./App.css";
import './Header.css';
import logo from "./static/bridge_logo.png";
import border from "./static/header-image-gradient-border.png";
import overlay from "./static/header-image-gradient-overlay.png";
import header from "./static/header-image-new.jpg";
import chat from "./static/header-chat-image.png";

class Header extends React.Component<{}, {}> {

   render() {
      return (
         <div>
            <header className="land-header">
                  <div>
                     <img 
                     className="land-logo" src={logo} alt="Bridge Logo"/>
                  </div>

               {/* <nav
               className="flex flex-cross-center">
                  <a 
                  className="land-btn land-header-btn"
                  href="#">Login</a>
               </nav> */}
            </header>
            <div className="land-header-section">
               <div className="land-header-images">
                  <img src={header} alt="Header image"/>
                  <img 
                  className="land-overlay"
                  src={overlay} alt="Overlay"/>
                  <img 
                  className="land-overlay" 
                  src={border} alt="Border"/>
               </div>
               <div
               className="land-text-overlay">
                  <h1
                  style={{marginBottom: 0}} 
                  className="header-heavy">Consult. Refer. Grow.</h1>
                  <h4 className="body-heavy professional-platform">Connecting mental health professionals 
                  across all license types on a secure referral and messaging platform</h4>
                  <a 
                  className="land-btn land-join-btn"
                  href="#signup"
                  onClick={ () =>  ReactGA.event({
                     category: 'User',
                     action: 'Join'})}>Join</a>
               </div>

            </div>
         </div>

      )
   }
}

export default Header;