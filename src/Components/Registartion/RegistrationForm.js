import React, { useState } from 'react';
import { Form, Input, Button, Typography, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (values) => {
   
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

   
    setName('');
    setEmail('');
    setPassword('');

   
  };

  return (
    <div>
       <div className='tophead'>
      <Title level={1} style={{ textAlign: 'center', marginBottom: '24px' }}>
        ABC BANK
      </Title>
      </div>
      <div className='reg-form' style={{ width: '300px', margin: '0 auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
      <Title level={4} style={{ textAlign: 'left', marginBottom: '24px' }}>
        Create New Account
      </Title>
    <Form onFinish={handleSubmit} requiredMark={false}>
      <Form.Item
        name="name"
        label="Name"
        labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Enter Name" value={name} onChange={handleNameChange} />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email address"
        labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Please enter your email' }]}
      >
        <Input placeholder="Email address" value={email} onChange={handleEmailChange} />
      </Form.Item>
      <Form.Item
        name="password"
        label = "password"
        labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox checked={rememberMe} onChange={handleRememberMeChange}>Agree Terms & privacy</Checkbox>
        </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default RegistrationForm;
