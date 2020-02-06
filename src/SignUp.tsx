import React from 'react';
import {Button, Popup} from 'semantic-ui-react'
import "./App.css";
import "./SignUp.css";
import s_phone from "./static/slanted_phone.png"
import instagram from "./static/Instagram.png"
import facebook from "./static/Facebook.png"
import linkedin from "./static/LinkedIn@2x.png"
import Form from "./Form"

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
                                <Form>                                    
                                </Form>
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