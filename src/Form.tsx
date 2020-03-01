import "./SignUp.css"
import "./App.css"
import React from 'react';
import {Button, Popup} from 'semantic-ui-react'
import StateDropDown from './states'
import axios from 'axios'

const FindBridge: React.FC = () =>
{
    return (
    <div className="how-find-form">
        <select className="how-find-form-dropmenu" name="HowFoundBridge" aria-label="How did you hear about Bridge?">
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

class Form extends React.Component<{handleSubmit: (e: React.SyntheticEvent) => void}, {}>
{
    constructor(props: any)
    {
        super(props);
    }
    handleSubmit(e: React.SyntheticEvent) {
       console.log("ayy");
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
                <div id="form">
                    <div>
                        <form 
                        id="bridge-form"
                        onSubmit={this.handleSubmit}>
                            <label>
                                <div className="name-form">
                                    <input type="text" placeholder="First Name"className="name-form-items" aria-label="first name"/>
                                    <input type="text" placeholder="Last Name" className="name-form-items" aria-label="last name"/>
                                </div>
                                <div className="info-form">
                                    <input type="text" placeholder="Email" className="info-form-email" aria-label="email"/>
                                    <select className="info-form-provider" name="provider type" aria-label="provider type">
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
                        </form>
                    </div>
                    <div className="d-flex flex-end">
                        <p className="more-details">for more details
                        <span style={{display: "inline-block", paddingLeft: "15px"}}><PopupText></PopupText></span></p>
                    </div>                    
                </div>
        )
    }
}
export default Form;