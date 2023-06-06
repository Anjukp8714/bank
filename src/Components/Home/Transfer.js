import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Home from './Home';

const { Title } = Typography;

const Transfer = () => {
  const [amount, setamount] = useState('');

    const  handleamountChange = (event) =>{
        setamount(event.target.val)
    }
  
    const handleWithdraw =()=>{
        console.log(test)
    }

  return (
    <div className='form'>
    <Home/>
    <div style={{ width: '300px', margin: '0 auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
       
      <Title level={4} style={{ textAlign: 'left', marginBottom: '24px' }}>
        Withdraw Money
      </Title>

      <Form onFinish={handleWithdraw} requiredMark={false}>
        <Form.Item
          label="Email address"
          name="Amount"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: 'Enter Amount to withdraw' }]}
        >
          <Input placeholder="Enter email" value={amount} onChange={handleamountChange} />
        </Form.Item>

        <Form.Item
          label="Amount"
          name="Amount"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: 'Enter Amount to transfer' }]}
        >
          <Input placeholder="amount" value={amount} onChange={handleamountChange} />
        </Form.Item>
       

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Transfer
          </Button>
        </Form.Item>

      </Form>

    </div>

    </div>
  );
};

export default Transfer;
