import React from 'react';
import {Button, Popup} from 'semantic-ui-react'
import {Select, MenuItem, TextField, InputLabel }from '@material-ui/core/';
import "./App.css";
import "./SignUp.css";
import wireframeGraphic from "./static/wireframeGraphic@2x.png"
import instagram from "./static/Instagram.png"
import facebook from "./static/Facebook.png"
import linkedin from "./static/LinkedIn@2x.png"
import logo from "./static/bridge_logo_1.0_singleColor_white.png"
import StateDropDown from './states'
import axios from 'axios';
import { FormControl } from '@material-ui/core';

const FindBridge: React.FC = () =>
{
    return (
    <div className="how-find-form form-padding">
        <FormControl>
            <InputLabel style={{paddingLeft: "1rem"}}>How did you hear about Bridge?</InputLabel>
            <Select native variant="outlined" className="how-find-form-dropmenu" name="howFoundBridge" aria-label="How did you hear about Bridge?" style={{height:"75.5%", width: "33rem"}}>
                <option value="" disabled selected></option>
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Instagram">Instagram</option>
                <option value="From a colleague">From a colleague</option>
                <option value="From a friend">From a friend</option>
                <option value="From my organization">From my organization</option>
                <option value="Other">Other</option>
            </Select>
        </FormControl>
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

class SignUp extends React.Component<{}, {submitted: boolean,
                                          validate: {[name: string]: boolean}}> 
{

    constructor(props: any)
    {
        super(props);
        this.state = {
            submitted: false,
            validate: {
               first_name: false,
               last_name: false,
               email: false,
               provider: false,
               state: false,
               city: false,
               discover_reason: false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        let target = e.target as any;
        let valid = false;
        let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        let formData = {
            first_name: target.firstName.value,
            last_name: target.lastName.value,
            email: target.email.value,
            provider: target.providerType.value,
            state: target.states.value,
            city: target.city.value,
            discover_reason: target.howFoundBridge.value
        }
        
         this.setState({validate: {
            first_name: !!formData.first_name,
            last_name: !!formData.last_name,
            email: !!formData.email && emailRegex.test(formData.email),
            provider: !!formData.provider,
            state: !!formData.state,
            city: !!formData.city,
            discover_reason: !!formData.discover_reason
            }}, () => {
            console.log(this.state.validate);
            console.log(formData);

            valid = !Object.values(this.state.validate).some((value: boolean) => !value);
            if (valid) {
               console.log("Valid data!");
               axios.post("https://pont-bridge.appspot.com/api/subscriber/create",
               formData)
               .then((res: any) => {
                   console.log(res);
                   console.log(res.data);
               })
               this.setState({submitted: true});
            }
            else {
               console.log("Not valid data!");
            }
            }
         );
    }

    render() 
    {
        return (
                <div id="signup">
                    <div className="signup-form">
                        
                       {
                          this.state.submitted ? (
                             <div className="d-flex flex-cross-center submitted-text">
                                 <h3 className="header-heavy" style={{color: "black"}}>
                                    Thank you for joining our mailing list. Please look forward to future updates to Bridge!</h3>
                              </div>
                          ) :
                     
                           (<div>
                              <div>
                                  <h3 className="header-heavy" style={{color: "black"}}>
                                      Ready to join your colleagues?
                                  </h3>
                                  <p className="body-text" style={{color: "var(--light-gray)"}}>
                                      For more details and updates on product launches join our mailing list     
                                  </p>
                              </div>
                              <div>
                                  <form onSubmit={this.handleSubmit}>
                                      <label>
                                          <div className="name-form">
                                              <TextField required variant="outlined" placeholder="First Name"className="name-form-items" style={{marginRight: "1.5rem"}} aria-label="first name" name="firstName"/>                                                                                                    
                                              <TextField required variant="outlined" placeholder="Last Name" className="name-form-items" aria-label="last name" name="lastName"/>
                                          </div>
                                          <div className="info-form form-padding">
                                              <TextField variant="outlined" required placeholder="Email" className="info-form-email" style={{marginRight: "1.5rem"}} aria-label="email" name="email"/>                                    
                                              <FormControl>
                                                <InputLabel style={{paddingLeft:"1rem"}}>Provider Type</InputLabel>
                                                <Select native required variant="outlined" labelId="providerType" className="info-form-provider" name="providerType" 
                                                aria-label="provider type" style={{height:"75.5%", width:"11.5rem"}}>
                                                    <option value="" disabled selected></option>                                        
                                                    <option value="Counselor">Counselor</option>                                                    
                                                    <option value="Psychiatrist">Psychiatrist</option>
                                                    <option value="Psychologist">Psychologist</option>
                                                    <option value="Therapist">Therapist</option>                                            
                                                </Select>                                        
                                              </FormControl>
                                              
                                          </div>
                                          <div className="loc-form form-padding">
                                              <StateDropDown>
                                              </StateDropDown>
                                              <TextField required variant="outlined" placeholder="City" className="loc-form-city" name="city" aria-label="city"/>
                                          </div>
                                          <FindBridge></FindBridge>
                                      </label>
                                      <div className="d-flex flex-start form-padding">
                                          <input type="submit" className="land-btn submit-button" value="Submit"></input>                                        
                                      </div>
                              </form>
                          </div>

                           </div>
                           )
                        }
                        <div className="wireframe">
                            <img src={wireframeGraphic} alt=""/>
                        </div>

                    </div>
                          
                    <div className="bot-bar" style={{textAlign:"center", marginTop:"5em"}}>
                        <div className="d-flex flex-space-around flex-wrap">
                            <img src={logo} alt=""/>                                                    
                            <p style={{color: "white", paddingTop: "1em"}}>
                                Copyright © 2020 Bridge Technology, Inc. All Rights Reserved
                            </p>
                            <div className="d-flex flex-column" style={{color:"white", fontSize:"1.2rem"}}>
                                <span>
                                    Follow Us
                                </span><br></br>
                                <div style={{marginLeft: "0.8em"}}>
                                <a href="https://www.instagram.com/yourbridge.io/" target="_blank">
                                    <img src={instagram} alt="" style={{width:"10%", marginRight:"0.7em"}}/>                        
                                </a>
                                <a href="https://www.facebook.com/Bridge-106202354272895/?modal=admin_todo_tour" target="_blank">
                                    <img src={facebook} alt="" style={{width:"10%", marginRight:"0.7rem"}}/>                        
                                </a>
                                <a href="https://www.linkedin.com/company/yourbridge/?viewAsMember=true" target="_blank">
                                    <img src={linkedin} alt="" style={{width:"10%", marginRight:"0.7rem"}}/>                        
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