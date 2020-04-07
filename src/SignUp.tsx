import React from 'react';
import {Button, Popup} from 'semantic-ui-react'
import "./App.css";
import "./SignUp.css";
import wireframeGraphic from "./static/wireframeGraphic@2x.png"
import instagram from "./static/Instagram.png"
import facebook from "./static/Facebook.png"
import linkedin from "./static/LinkedIn@2x.png"
import logo from "./static/bridge_logo_1.0_singleColor_white.png"
import StateDropDown from './states'
import axios from 'axios';
import { Transform } from 'stream';

const FindBridge: React.FC = () =>
{
    return (
    <div className="how-find-form form-padding">
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
                <div id="signup">
                    <div className="d-flex flex-center flex-wrap">
                        <div style={{flexBasis:"35%", marginRight: "9em"}}>
                            <div>
                                <p className="d-flex flex-center x-large-text bold-text" style={{color: "black"}}>
                                    Ready to join your colleagues?
                                </p>
                                <p className="d-flex flex-center" style={{color: "dark-gray", fontSize: "1.4rem"}}>
                                    For more details and updates on product launches join our mailing list     
                                </p>
                            </div>
                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        <div className="name-form">
                                            <input type="text" placeholder="First Name"className="name-form-items" style={{marginRight: "20px"}} aria-label="first name" name="firstName"/>                                                                                                    
                                            <input type="text" placeholder="Last Name" className="name-form-items" aria-label="last name" name="lastName"/>
                                        </div>
                                        <div className="info-form form-padding">
                                            <input type="text" placeholder="Email" className="info-form-email" style={{marginRight: "20px"}} aria-label="email" name="email"/>
                                            <select className="info-form-provider" name="providerType" aria-label="provider type">
                                                <option value="" disabled selected>Provider type</option>                                        
                                                <option value="Counselor">Counselor</option>                                                    
                                                <option value="Psychiatrist">Psychiatrist</option>
                                                <option value="Psychologist">Psychologist</option>
                                                <option value="Therapist">Therapist</option>                                            
                                            </select>
                                        </div>
                                        <div className="loc-form form-padding">
                                            <StateDropDown>
                                            </StateDropDown>
                                            <input type="text" placeholder="City" className="loc-form-city" name="city" aria-label="city"/>
                                        </div>
                                        <FindBridge></FindBridge>
                                    </label>
                                    <div className="d-flex flex-start form-padding">
                                        <input type="submit" className="submit-button"></input>                                        
                                    </div>
                            </form>
                        </div>

                        </div>
                        <div style={{flexBasis:"35%", paddingTop: "2.5em"}} className="d-flex flex-cross-center">
                            <img src={wireframeGraphic} alt="" style={{minWidth:"100%", maxWidth:"100%"}}/>
                        </div>
                    </div>
                    <div className="bot-bar" style={{textAlign:"center", marginTop:"100px"}}>
                        <div className="d-flex flex-space-around">
                            <img src={logo} alt="" style={{maxWidth: "15%"}}/>                                                    
                            <p style={{color: "white"}}>
                            Copyright © 2020 Bridge Technology, Inc. All Rights Reserved
                            </p>
                            <div className="d-flex flex-column" style={{color:"white", fontSize:"1.2rem"}}>
                                <span>
                                    Follow Us
                                </span><br></br>
                                <div style={{marginLeft: "12px"}}>
                                <a href="https://www.instagram.com/yourbridge.io/" target="_blank">
                                    <img src={instagram} alt="" style={{width:"10%", marginRight:"10px"}}/>                        
                                </a>
                                <a href="https://www.facebook.com/Bridge-106202354272895/?modal=admin_todo_tour" target="_blank">
                                    <img src={facebook} alt="" style={{width:"10%", marginRight:"10px"}}/>                        
                                </a>
                                <a href="https://www.linkedin.com/company/yourbridge/?viewAsMember=true" target="_blank">
                                    <img src={linkedin} alt="" style={{width:"10%", marginRight:"10px"}}/>                        
                                </a>   </div>                         
                            </div>            
                        </div>
                        
                        <div className="d-flex flex-center">
                                                   
                        </div>
                    </div>
                </div>
            
        )
    }
}


export default SignUp;