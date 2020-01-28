import React from 'react';
import "./App.css";
import logo from "./static/logo.png";
import head1 from "./static/head1.png";
class HeaderNav extends React.Component<{}, {}> 
{

    constructor(props: any)
    {
        super(props);
    }
    render() 
    {
        return (
            <div>
                <nav className="navbar bg-grey">
                    <div>
                        <img src={logo} alt="" className="image" />
                    </div>
                    <ul className="nav-rest flex-cross-center">
                        <li><a data-scroll href="#features">Features</a></li> 
                        <li><a data-scroll href="#benefits">Benefits</a></li>
                    </ul>
                    <ul className="nav-rest flex-cross-center">
                        <li><a href="#">Log in</a></li>
                        <li className="join"><a data-scroll href="#signup" className="join-button">Join Bridge</a></li>
                    </ul>

                </nav>
                <section className="mission-statement">
                    <div 
                    className="d-flex flex-cross-center"
                    style={{flexBasis: "40%"}}>
                        <h1 className="big-text"
                        style={{fontWeight: 500, marginTop: 0}}>
                            The fastest growing <br/>
                            <span className="bigger-text"
                            style={{fontWeight: 700}}>
                                network of <br/>
                                mental health <br/>
                                professionals.
                            </span>
                        </h1>
                    </div>
                    <div
                    className="d-flex flex-cross-center"
                    style={{flexBasis: "60%"}}>
                        <img src={head1} alt="" className="headImg1" />
                    </div>
                    
                </section>
            </div>

        )
    }
}

export default HeaderNav;