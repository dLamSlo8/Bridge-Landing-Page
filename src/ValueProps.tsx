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
            <div className="value-props">
                <div className="value-colleagues">
                    <div className="d-flex flex-column flex-center" style={{flexBasis: "30%"}}>
                        <h3 className="header-bold">
                            Consult with your colleagues</h3>
                        <p className="body-text value-prop-para">
                           Stay up-to-date with your colleagues’ offerings and discover new professional resources.
                        </p>                                                                
                    </div>                    
                    <img src={collaborate} alt=""></img>                
                </div>
                <div className="value-availability">                
                    <img src={availability} alt="" /> 
                    <div className="d-flex flex-column flex-center" style={{flexBasis: "30%"}}>
                        <h3 className="header-bold">
                           Set your availability
                        </h3>
                        <p className="body-text value-prop-para">
                           Notify your connections whether or not you are accepting new clients and quickly 
                           determine which colleagues are available.
                        </p>                                                                
                    </div>            
                </div>
                <div className="value-clients"> 
                    <div className="d-flex flex-column flex-center" style={{flexBasis: "30%"}}>
                        <h3 className="header-bold">
                            Accept the right clients for your practice</h3>
                        <p className="body-text value-prop-para">
                            Receive appropriate referrals based on your preferences, availability, insurance type and specialties.
                        </p>                                                                
                    </div>                                      
                    <img src={clients} alt=""></img> 
                </div>
            </div>
            
        )
        }
    }
    
export default ValueProps;