import React from 'react';
import "./App.css";
import bar from "./static/Benefits Icons.png";

class Features extends React.Component<{}, {}> 
{
    constructor(props: any)
    {
        super(props);
    }
    render() 
    {
        return (
            <div>
                <section className="start">
                    <h1 className="intro"
                    style={{fontSize: "2em", fontWeight: 700}}>
                        With Bridge, <br/>
                    </h1>
                </section>
                <nav className="collab">
                    <ul className="with-bridge">
                        <li>
                            <h1 className="main1 bigish-text">
                            Feel collaborative <br/>
                            even in private <br/>
                            practice <br/><br/>
                            <p className="submain1">
                                Avoid burnout, stay up to date with your <br/>
                                colleagues, groups, and organizations. 
                            </p>
                            </h1>
                        </li>
                        <li><h1 className="main1 bigish-text">
                            Save time on <br/>
                            accurate <br/>
                            referrals <br/><br/>
                            <p className="submain1">
                                With easy referral generation, find <br/>
                                the optimal professional for a <br/>
                                client in need. 
                            </p>
                            </h1></li>
                        <li><h1 className="main1 bigish-text">
                            Grow a stable, <br/>
                            healthy practice <br/><br/><br/>
                            <p className="submain1">
                                Grow your network and find the <br/>
                                right clients for your practice.
                            </p>
                            </h1></li>
                        
                    </ul>
                    <br/><br/><br/><br/>
                </nav>
                    <img src={bar} alt="" className="bar" />      
            </div>
        )
    }
}

export default Features;