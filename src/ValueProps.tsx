import React from 'react';
import "./App.css";
import "./ValueProps.css";
import availability from "./static/bridge_icons_landingpage_1.0_availability.svg"
import clients from "./static/bridge_icons_landingpage_1.0_clients.svg"
import collaborate from "./static/bridge_icons_landingpage_1.0_collaborate.svg"

class ValueProps extends React.Component<{}, {}> 
{
    constructor(props: any)
    {
        super(props);
    }
    render() 
    {
        return (
            <div className="d-flex flex-column">
                <div className="d-flex flex-center flex-wrap">
                    <div className="d-flex flex-wrap flex-center" style={{flexBasis: "30%"}}>
                        <p className="value-prop-title" style={{paddingTop: "6rem"}}>
                            Consult with your colleagues
                        <p className="value-prop-para" style={{wordWrap: "normal"}}>
                            Stay up to date with your colleagues and discover new professional connections.
                        </p>
                        </p>                                                                
                    </div>                    
                        <img src={collaborate} alt="" style={{maxWidth: "50%", flexBasis: "30%"}}></img>                
                </div>
                <div className="d-flex flex-center flex-wrap">                
                    <img src={availability} alt="" style={{maxWidth: "50%", flexBasis: "30%"}}></img>    
                    <div className="d-flex flex-wrap flex-center" style={{flexBasis: "30%"}}>
                        <p className="value-prop-title" style={{paddingTop: "6rem"}}>
                            Set your availability
                        <p className="value-prop-para" style={{wordWrap: "normal"}}>
                            Notify your colleagues whether or not you are accepting new clients.
                        </p>
                        </p>                                                                
                    </div>            
                </div>
                <div className="d-flex flex-center flex-wrap"> 
                    <div className="d-flex flex-wrap flex-center" style={{flexBasis: "30%"}}>
                        <p className="value-prop-title" style={{paddingTop: "6rem"}}>
                            Accept the right clients for you
                        <p className="value-prop-para" style={{wordWrap: "normal"}}>
                            Receive appropriate referrals based on your preferences, availability, insurance type and specialties.
                        </p>
                        </p>                                                                
                    </div>                                      
                    <img src={clients} alt="" style={{maxWidth: "50%", flexBasis: "30%"}}></img> 
                </div>
            </div>
            
        )
        }
    }
    
export default ValueProps;