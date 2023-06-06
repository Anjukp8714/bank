import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { Item } = Menu;

const Home = () => {
  return (
    <div className="container"> 
      
      <Menu mode="horizontal">
        <Item key="home">
          <Link to="/userdata">Home</Link>
        </Item>
        <Item key="deposit">
          <Link to="/deposit">Deposit</Link>
        </Item>
        <Item key="withdraw">
          <Link to="/withdraw">Withdraw</Link>
        </Item>
        <Item key="transfer">
          <Link to="/transfer">Transfer</Link>
        </Item>
        <Item key="statement">
          <Link to="/statement">Statement</Link>
        </Item>
        <Item key="login">
          <Link to="/">Login</Link>
        </Item>
      </Menu>
    </div>
  );
};

export default Home;
