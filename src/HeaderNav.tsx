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
                <nav className="navbar">
                    <img src={logo} alt="" className="image" />
                    <ul className="nav-rest">
                        <li>Features</li>
                        <li>Benefits</li>
                        <li>Log in</li>
                        <li><a href="#" className="join-button">Join Bridge</a></li>
                    </ul>
                </nav>
                <section className="mission-statement">
                    <div>
                        <p className="big-text bold-text">
                            The fastest growing <br/>
                            <span className="bigger-text bold-text">
                                network of <br/>
                                mental health <br/>
                                professionals.
                            </span>
                        </p>
                    </div>
                    
                    <img src={head1} alt="" className="headImg1" />
                    
                </section>
            </div>

        )
    }
}

export default HeaderNav;