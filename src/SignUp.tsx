import React from 'react';
import {Button, Popup} from 'semantic-ui-react'
import "./App.css";
import "./SignUp.css";
import s_phone from "./static/slanted_phone.png"
import instagram from "./static/Instagram.png"
import facebook from "./static/Facebook.png"
import linkedin from "./static/LinkedIn@2x.png"
import StateDropDown from './states'

const FindBridge: React.FC = () =>
{
    return (
    <div className="how-find-form">
        <select className="how-find-form-dropmenu">
            <option value="" disabled selected>How did you hear about Bridge?</option>
            <option value="GG">Google</option>
            <option value="FB">Facebook</option>
            <option value="LI">LinkedIn</option>
            <option value="IG">Instagram</option>
            <option value="FC">From a colleague</option>
            <option value="FF">From a friend</option>
            <option value="FO">From my organization</option>
            <option value="OR">Other</option>
        </select>
    </div>
    );
}

const PopupText: React.FC = () =>
{
    return(
        <Popup content='Thanks for joining!' />
    );
}

class SignUp extends React.Component<{}, {}> 
{

    constructor(props: any)
    {
        super(props);
    }
    render() 
    {
        return (
                <div id="signup" style={{marginTop:"100px"}}>
                    <div className="d-flex flex-center" style={{marginBottom:"100px"}}>
                        <div style={{flexBasis:"30%", padding:"30px"}}>
                            <div>
                                <p className="d-flex flex-center x-large-text bold-text">
                                    Ready to join your colleagues?
                                </p>
                            </div>
                            <div>
                                <form>
                                    <label>
                                        <div className="name-form">
                                            <input type="text" placeholder="First Name"className="name-form-items"/>
                                            <input type="text" placeholder="Last Name" className="name-form-items"/>
                                        </div>
                                        <div className="info-form">
                                            <input type="text" placeholder="Email" className="info-form-email"/>
                                            <select className="info-form-provider">
                                                <option value="" disabled selected>Provider type</option>
                                                <option value="ANP">ANP</option>
                                                <option value="LCSW">LCSW</option>
                                                <option value="LMFT">LMFT</option>
                                                <option value="LMHC">LPA</option>
                                                <option value="LPC">LPC</option>    
                                                <option value="Ph.D">Ph.D</option>                                            
                                                <option value="Psy.D">Psy.D</option>
                                                <option value="Psycht">Psychiatrist</option>
                                            </select>
                                        </div>
                                        <div className="loc-form">
                                            <StateDropDown>
                                            </StateDropDown>
                                            <input type="text" placeholder="City" className="loc-form-city" />
                                        </div>
                                        <FindBridge></FindBridge>
                                    </label>
                                </form>
                            </div>
                            <div className="d-flex flex-end">
                                <p style={{fontSize: "12px", fontWeight: "bold"}}>for more details
                                <span style={{display: "inline-block", paddingLeft: "15px"}}><a href="#" className="submit-button">Submit</a></span></p>
                            </div>
                        </div>
                        <div style={{flexBasis:"30%"}} className="d-flex flex-cross-center">
                            <img src={s_phone} alt="" style={{width:"80%"}}/>
                        </div>
                    </div>
                    <div className="bot-bar" style={{textAlign:"center"}}>
                        <div className="d-flex">
                            <div style={{marginRight:"30px"}}>
                                <p style={{color:"white", fontSize:"12px"}}>
                                    <span style={{ fontWeight:"bold"}}>
                                        Features
                                    </span><br></br>
                                    <span style={{color:"white"}}>
                                        Connect<br></br>
                                        Availability<br></br>
                                        Refer<br></br>
                                        Accept
                                    </span>
                                </p>
                            </div>
                            <div>
                            <p style={{color:"white", fontSize:"12px"}}>
                                <span style={{ fontWeight:"bold"}}>
                                    Benefits
                                </span><br></br>
                                <span style={{color:"white"}}>
                                    Collaborate<br></br>
                                    Referrals<br></br>
                                    Growth<br></br>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="d-flex flex-space-around">
                            <p style={{color:"white", fontSize:"12px"}}>
                                <span style={{ fontWeight:"bold"}}>
                                    Follow Us
                                </span><br></br>
                                <a href="https://www.instagram.com/yourbridge.io/" target="_blank">
                                    <img src={instagram} alt="" style={{width:"10%", marginTop: "15px", marginRight:"10px"}}/>                        
                                </a>
                                <a href="https://www.facebook.com/Bridge-106202354272895/?modal=admin_todo_tour" target="_blank">
                                    <img src={facebook} alt="" style={{width:"10%", marginTop: "15px", marginRight:"10px"}}/>                        
                                </a>
                                <a href="https://www.linkedin.com/company/yourbridge/?viewAsMember=true" target="_blank">
                                    <img src={linkedin} alt="" style={{width:"10%", marginTop: "15px", marginRight:"10px"}}/>                        
                                </a>
                            </p>
                            <a href="#" className="contact-button" style={{alignSelf:"flex-start", marginTop:"40px", marginRight:"40px"}}>Contact Us</a>                            
                            <div className="flex-column">
                            <p className="signed-up-text">
                                Signed Up?
                            </p>
                            <a href="#" className="login-button" style={{alignSelf:"flex-start"}}>Log in</a>
                            </div>                            
                        </div>
                    </div>
                </div>
            
        )
    }
}


export default SignUp;