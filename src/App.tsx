import React from 'react';
import logo from './logo.svg';
import HeaderNav from './HeaderNav';
import Features from './Features';
import ValueProps from './ValueProps';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <HeaderNav>
      </HeaderNav>
      <ValueProps />
      <Features>
      </Features>
    </div>
  );
}

export default App;
