import React from 'react';
import 'normalize.css';
import logo from './logo.svg';
import SignUp from './SignUp';
import HeaderNav from './HeaderNav';
import Features from './Features';
import ValueProps from './ValueProps';
import CopyrightBar from './CopyrightBar';
import SmoothScroll from 'smooth-scroll';
import './App.css';

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
        <HeaderNav>
        </HeaderNav>
        <ValueProps>
        </ValueProps>
        <Features>
        </Features>
        <SignUp>
        </SignUp>
        <CopyrightBar>
        </CopyrightBar>
      </div>
    );
  }

}

export default App;
