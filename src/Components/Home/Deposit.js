import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Home from './Home';

const { Title } = Typography;

const Deposit = () => {
  const [amount, setamount] = useState('');

    const  handleamountChange = (event) =>{
        setamount(event.target.val)
    }
  
    const handleDposite =()=>{
        console.log(test)
    }

  return (
    <div className='form'>
    <Home/>
    <div style={{ width: '300px', margin: '0 auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
       
      <Title level={4} style={{ textAlign: 'left', marginBottom: '24px' }}>
        Deposite Money
      </Title>

      <Form onFinish={handleDposite} requiredMark={false}>
        <Form.Item
          label="Amount"
          name="Amount"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: 'Enter Amount to deposite' }]}
        >
          <Input placeholder="amount" value={amount} onChange={handleamountChange} />
        </Form.Item>

       

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Deposite
          </Button>
        </Form.Item>

      </Form>

    </div>

    </div>
  );
};

export default Deposit;
