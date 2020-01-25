import React from 'react';
import './App.css';
import Typed from 'typed.js';
import accept from "./static/Accept.png";
import availability from "./static/Availability.png";
import connections from "./static/Connections.png";
import refer from "./static/Refer.png";

class ValueProps extends React.Component<{}, {}>
{
    constructor(props: any)
    {
        super(props);
    }

    componentDidMount()
    {
        let typed = new Typed('.typed', {
            strings: ["LMFT",
                        "LCSW",
                        "LPC",
                        "LMHC",
                        "Psy.D",
                        "Ph.D"],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity
        });
    }
    render()
    {
        let valuePropHeaders = [
            "Connect with your professional network",
            "Real-time availability", 
            "Create accurate referrals, fast",
            "Accept the right clients for your practice"
        ]

        let valuePropText = [
            "Stay up to date with your colleagues and discover " + 
            "new professional connections.",
            "Set your availability to notify your colleagues you " + 
            "are accepting new clients.",
            "Our referral generation tool will find you the best " + 
            "possible options based on a client's specific needs.",
            "Receive appropriate referrals based on your " + 
            "preferences, availability, and specialities."
        ]

        let valuePropImage = [
            connections,
            availability,
            refer,
            accept
        ]

        return (
            <div>
                <section className="join-us-segment">
                    <div className="d-flex">
                        <h1>Reduce</h1>
                        <p>
                            Burn-out <br/>
                            Isolation <br/>
                            Blind referrals <br/>
                        </p>
                    </div>
                    <div className="d-flex">
                        <h1>Enhance</h1>
                        <p>
                            Professional community <br/>
                            Referral accuracy <br/>
                            Practice stability <br/>
                        </p>
                    </div>
                    <div className="d-flex flex-cross-center">
                        <a 
                        href="#" 
                        className="join-button"
                        style={{fontSize: "1.5rem"}}>Join us</a>
                    </div>
                </section>
                <section className="site-spacing">
                    <h1 
                    className="text-center big-text"
                    style={{padding: "20px", marginBottom: "100px", fontWeight: 800}}>Bridge, the connectivity 
                    platform built specifically for mental health professionals.</h1>
                    <div className="d-flex flex-space-between">
                        {
                            valuePropHeaders.map( (value: string, idx: number) => {
                                return (<div style={{padding: "0px 30px"}}>
                                    <div className="d-flex flex-center">
                                        <img src={valuePropImage[idx]} alt="" />
                                    </div>
                                    <h1 className="text-center">{value}</h1>
                                    <p className="text-center">{valuePropText[idx]}</p>
                                </div>)
                            })
                        }
                    </div>
                </section>
                <section
                className="whether-segment bg-grey d-flex flex-center site-spacing"
                >
                    <div 
                    className="card bg-purple-gradient d-flex flex-center flex-cross-center"
                    style={{flexBasis: "30%"}}>
                        <h1 className="white">
                        Whether you're a: <br/>
                        <div className="text-center">
                            <span className="typed big-text">
                            </span>
                        </div>

                        </h1>
                    </div>
 
                    <div 
                    className="d-flex flex-column flex-space-around"
                    style={{padding: "0px 50px", flexBasis: "30%"}}>
                        <h1 
                        className="text-center"
                        style={{fontSize: "1.3rem"}}>Connect, communicate, and collaborate on
                        a modern, HIPAA-compliant platform.</h1>
                        <div className="d-flex flex-center">
                            <a 
                            href="#" 
                            className="join-button"
                            style={{fontSize: "1.5rem"}}>Get started</a>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default ValueProps;