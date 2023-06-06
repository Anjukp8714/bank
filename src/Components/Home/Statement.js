import React from 'react';
import { Table, Typography } from 'antd';
import Home from './Home';
const { Title } = Typography;

const Statement = () => {
  const statementData = [
    { date: '2023-06-01', amount: 100, type: 'Deposit', details: 'Received from XYZ', balance: 500 },
    { date: '2023-06-02', amount: 50, type: 'Withdrawal', details: 'Paid to ABC', balance: 450 },
    { date: '2023-06-03', amount: 200, type: 'Deposit', details: 'Received from PQR', balance: 650 },
  ];

  const columns = [
    { title: 'Date', dataIndex: 'date' },
    { title: 'Amount', dataIndex: 'amount' },
    { title: 'Type', dataIndex: 'type' },
    { title: 'Details', dataIndex: 'details' },
    { title: 'Balance', dataIndex: 'balance' },
  ];

  return (
    <div>
        <Home/>
      <Title level={2}>Statement</Title>
      <Table dataSource={statementData} columns={columns} />
    </div>
  );
};

export default Statement;
