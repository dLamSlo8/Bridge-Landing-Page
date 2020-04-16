import React from 'react';
import ReactGA from 'react-ga';
import 'normalize.css';
import logo from './logo.svg';
import SignUp from './SignUp';
import HeaderNav from './HeaderNav';
import Features from './Features';
import ValueProps from './ValueProps';
import CopyrightBar from './CopyrightBar';
import SmoothScroll from 'smooth-scroll';
import Header from './Header';
import './App.css';

ReactGA.initialize('UA-163426036-1');
ReactGA.pageview("landing");  

class App extends React.Component<{}, {}> {
  constructor(props: any)
  {
    super(props);
  }
  componentDidMount()
  {
    let scroll = new SmoothScroll('a[href*="#"]');
  }
  render() {
    return (
      <div>
       <Header />
       <Features />
        <ValueProps></ValueProps>
        <hr style={{border: "none", height:"1.125px", background: "black", width: "85vw"}}></hr>
        <SignUp></SignUp>

      </div>
    );
  }

}

export default App;
