import React from 'react';
import logo from './logo.svg';
import SignUp from './SignUp';
import HeaderNav from './HeaderNav';
import Features from './Features';
import ValueProps from './ValueProps';
import './App.css';

const App: React.FC = () => {
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
    </div>
  );
}

export default App;
