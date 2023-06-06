import React from 'react';
import { Table } from 'antd';
import Home from './Home';

const UserData = () => {
  // Retrieve registration data from local storage
  const storedUserData = localStorage.getItem('userData');
  let name = '';
  let email = '';
  let accountBalance = 0;

  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    name = userData.name;
    email = userData.email;
    // Retrieve account balance from user data or calculate it as per your logic
    accountBalance = 1000; // Replace this with your logic to retrieve the account balance
  }

  const dataSource = [
    {
      key: '1',
      data: 'Name',
      value: name,
    },
    {
      key: '2',
      data: 'Email',
      value: email,
    },
    {
      key: '3',
      data: 'Account Balance',
      value: accountBalance,
    },
  ];

  return (
    <div className='container'>
        <Home/>
      <h1>Welcome  {name}</h1>
      <Table dataSource={dataSource} pagination={false} style={{ width: '300px', margin: '0 auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        
        <Table.Column  dataIndex="value" key="value" />
      </Table>
    </div>
  );
};

export default UserData;
