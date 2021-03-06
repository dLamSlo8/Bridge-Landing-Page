import React from 'react';
import "./App.css";
import "./SignUp.css";
import s_phone from "./static/slanted_phone.png"
import socials from "./static/socials.png"
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

class HeaderNav extends React.Component<{}, {}> 
{

    constructor(props: any)
    {
        super(props);
    }
    render() 
    {
        return (
                <div>
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
                        <div style={{flexBasis:"30%"}} className="d-flex flex-center">
                            <img src={s_phone} alt="" className="image"/>
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
                            <img src={socials} alt="" style={{width:"25%", marginRight:"40px"}}/>                        
                            <a href="#" className="contact-button" style={{alignSelf:"flex-start", marginTop:"30px", marginRight:"40px"}}>Contact Us</a>                            
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


export default HeaderNav;