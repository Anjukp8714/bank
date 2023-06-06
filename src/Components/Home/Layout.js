import React from 'react';
import Home from './Home';

const Layout = ({ children }) => {
  return (
    <div>
      <Home />
     
      {children}
    </div>
  );
};

export default Layout;
