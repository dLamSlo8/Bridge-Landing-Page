import React from 'react';
import {Button, Popup} from 'semantic-ui-react'
import "./App.css";
import "./SignUp.css";
import s_phone from "./static/slanted_phone.png"
import instagram from "./static/Instagram.png"
import facebook from "./static/Facebook.png"
import linkedin from "./static/LinkedIn@2x.png"
import StateDropDown from './states'
import axios from 'axios';

const FindBridge: React.FC = () =>
{
    return (
    <div className="how-find-form">
        <select className="how-find-form-dropmenu" name="howFoundBridge" aria-label="How did you hear about Bridge?">
            <option value="" disabled selected>How did you hear about Bridge?</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Instagram">Instagram</option>
            <option value="From a colleague">From a colleague</option>
            <option value="From a friend">From a friend</option>
            <option value="From my organization">From my organization</option>
            <option value="Other">Other</option>
        </select>
    </div>
    );
}

const PopupText: React.FC = () =>
{
    return(
    <Popup content='Thanks for joining!' hoverable={false}
           trigger={<button type="submit" className="submit-button">Submit</button>}
           on="click"
           position="bottom center"
           offset="0 25%"
           opacity="1.0"
           />
    );
}

class SignUp extends React.Component<{}, {}> 
{

    constructor(props: any)
    {
        super(props);
    }

    handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        let target = e.target as any;
        let formData = {
            first_name: target.firstName.value,
            last_name: target.lastName.value,
            email: target.email.value,
            provider: target.providerType.value,
            state: target.states.value,
            city: target.city.value,
            discover_reason: target.howFoundBridge.value
        }
        console.log(formData);
        axios.post("https://pont-bridge.appspot.com/api/subscriber/create",
        formData)
        .then((res: any) => {
            console.log(res);
            console.log(res.data);
        })
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
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        <div className="name-form">
                                            <input type="text" placeholder="First Name"className="name-form-items" aria-label="first name" name="firstName"/>
                                            <input type="text" placeholder="Last Name" className="name-form-items" aria-label="last name" name="lastName"/>
                                        </div>
                                        <div className="info-form">
                                            <input type="text" placeholder="Email" className="info-form-email" aria-label="email" name="email"/>
                                            <select className="info-form-provider" name="providerType" aria-label="provider type">
                                                <option value="" disabled selected>Provider type</option>                                        
                                                <option value="Counselor">Counselor</option>                                                    
                                                <option value="Psychiatrist">Psychiatrist</option>
                                                <option value="Psychologist">Psychologist</option>
                                                <option value="Therapist">Therapist</option>                                            
                                            </select>
                                        </div>
                                        <div className="loc-form">
                                            <StateDropDown>
                                            </StateDropDown>
                                            <input type="text" placeholder="City" className="loc-form-city" name="city" aria-label="city"/>
                                        </div>
                                        <FindBridge></FindBridge>
                                    </label>
                                    <div className="d-flex flex-end">
                                        <p style={{fontSize: "12px", fontWeight: "bold"}}>for more details
                                        <span style={{display: "inline-block", paddingLeft: "15px"}}><PopupText></PopupText></span></p>
                                    </div>
                            </form>
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