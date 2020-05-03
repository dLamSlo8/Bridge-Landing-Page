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
import StateDropDown from './states';
import ProviderType from './provider';
import axios from 'axios';
import { FormControl } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

const FindBridge: React.FC<{valid: boolean, handleChange: (e: React.SyntheticEvent) => void}> = (props: any) =>
{
    return (
    <div className="how-find-form form-padding">
       
          { props.valid ? 
            <FormControl variant="outlined" className="how-find-form-dropmenu">
               <InputLabel>How did you hear about Bridge?</InputLabel>
               <Select label="How did you hear about Bridge?" native onChange={props.handleChange} name="howFoundBridge" aria-label="How did you hear about Bridge?" style={{color: "#A9A9A9"}}>
                     <option value="" disabled selected />
                     <option value="Google">Google</option>
                     <option value="Facebook">Facebook</option>
                     <option value="LinkedIn">LinkedIn</option>
                     <option value="Instagram">Instagram</option>
                     <option value="From a colleague">From a colleague</option>
                     <option value="From a friend">From a friend</option>
                     <option value="From my organization">From my organization</option>
                     <option value="Other">Other</option>
               </Select> 
            </FormControl> :
            <FormControl variant="outlined" error className="how-find-form-dropmenu">
               <InputLabel>How did you hear about Bridge?</InputLabel>
               <Select label="How did you hear about Bridge?" native onChange={props.handleChange} name="howFoundBridge" aria-label="How did you hear about Bridge?" style={{color: "#A9A9A9"}}>
                     <option value="" disabled selected />
                     <option value="Google">Google</option>
                     <option value="Facebook">Facebook</option>
                     <option value="LinkedIn">LinkedIn</option>
                     <option value="Instagram">Instagram</option>
                     <option value="From a colleague">From a colleague</option>
                     <option value="From a friend">From a friend</option>
                     <option value="From my organization">From my organization</option>
                     <option value="Other">Other</option>
               </Select>
               <FormHelperText>Required field.</FormHelperText>
            </FormControl>

         }
       
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
                                          validate: {[name: string]: boolean},
                                          other: boolean}> 
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            submitted: false,
            validate: {
               first_name: true,
               last_name: true,
               email_required: true,
               email_valid: true,
               provider: true,
               state: true,
               city: true,
               discover_reason: true,
               other: true
            },
            other: false
        }
        this.handleDiscoverChange = this.handleDiscoverChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDiscoverChange(e: React.SyntheticEvent) {
      e.preventDefault();
      let target = e.target as any;
      this.setState({other: (target.value === "Other")});
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
            state: target.state.value,
            city: target.city.value,
            discover_reason: this.state.other ? target.other.value : target.howFoundBridge.value
        }
        
         this.setState({validate: {
            first_name: !!formData.first_name,
            last_name: !!formData.last_name,
            email_required: !!formData.email,
            email_valid: emailRegex.test(formData.email),
            provider: !!formData.provider,
            state: !!formData.state,
            city: !!formData.city,
            discover_reason: !!formData.discover_reason,
            other: this.state.other ? !!target.other.value : true
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


       let validate = this.state.validate;
       console.log(validate.provider);
        return (
                <div id="signup">
                    <div className="signup-form">
                        
                       {
                          this.state.submitted ? (
                             <div className="d-flex flex-cross-center submitted-text">
                                 <h3 className="header-heavy" style={{color: "black"}}>
                                    Thank you for joining our mailing list. Please look forward to future updates from Bridge!</h3>
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
                                             {
                                                validate.first_name ? 
                                                <TextField variant="outlined" label="First Name" className="name-form-first" aria-label="first name" name="firstName"/> :    
                                                <TextField error id="outlined-error-helper-text" className="name-form-first" label="First Name" helperText="Required field." variant="outlined"/>                                                                                                 
                                             }
                                             {
                                                validate.last_name ?
                                                <TextField variant="outlined" label="Last Name" className="name-form-last" aria-label="last name" name="lastName"/> :
                                                <TextField error id="outlined-error-helper-text" className="name-form-last" label="Last Name" helperText="Required field." variant="outlined"/>                                                                                                 
                                             }

                                          </div>
                                          <div className="info-form form-padding">
                                             {
                                                validate.email_required && validate.email_valid ?
                                                <TextField variant="outlined" label="Email" className="info-form-email" aria-label="email" name="email"/> :                               
                                                <TextField error id="outlined-error-helper-text" className="info-form-email" label="Email" helperText={!validate.email_required ? "Required field." : "Invalid email."} variant="outlined"/>                                                                            
                                             }
                                             <ProviderType valid={validate.provider} />
                                          </div>
                                          <div className="loc-form form-padding">
                                              <StateDropDown valid={validate.state} />
                                              {
                                                 validate.city ? 
                                                 <TextField variant="outlined" label="City" className="loc-form-city" name="city" aria-label="city"/> :
                                                 <TextField error id="outlined-error-helper-text" className="loc-form-city"  label="City" helperText="Required field." variant="outlined"/>                                                                            
                                              }
                                          </div>
                                          <FindBridge 
                                          valid={validate.discover_reason}
                                          handleChange={this.handleDiscoverChange}></FindBridge>
                                          {this.state.other && <div className="form-padding">
                                             {validate.other ? 
                                             <TextField variant="outlined" className="loc-form-other" label="Other Reason" aria-label="other" name="other"/> :
                                             <TextField className="loc-form-other" error id="outlined-error-helper-text" label="Other Reason" helperText="Required field." variant="outlined" />}
                                             </div> }
                                                              
                                      </label>
                                      <div className="d-flex flex-start form-padding submit-form">
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
                        <div className="d-flex flex-space-around flex-cross-center">
                            <img src={logo} alt=""/>                                                                                
                            <div className="d-flex flex-column flex-space-around" style={{color:"white", fontSize:"1.2rem"}}>
                                <span>
                                    Follow Us
                                </span><br></br>
                                <div style={{marginLeft: "0.8em"}}>
                                <a href="https://www.instagram.com/yourbridge.io/" target="_blank">
                                    <img src={instagram} alt="" style={{width:"10%", marginRight:"0.7em"}}/>                        
                                </a>
                                <a href="https://www.facebook.com/Bridge-106202354272895/" target="_blank">
                                    <img src={facebook} alt="" style={{width:"10%", marginRight:"0.7rem"}}/>                        
                                </a>
                                <a href="https://www.linkedin.com/company/yourbridge/" target="_blank">
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