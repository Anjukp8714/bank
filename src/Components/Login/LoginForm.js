import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Title } = Typography;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

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
    // Perform login logic here
    console.log('Email:', values.email);
    console.log('Password:', values.password);

    // Retrieve registration data from local storage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (values.email === userData.email && values.password === userData.password) {
        navigate('/home');
        // Redirect to home page upon successful login
        // window.location.href = '/home';
        return;
      }
    }

    // Invalid login, display error message or perform other actions
    console.log('Invalid login');
  };
  

  return (
    <div className='form'>
      <div className='tophead'>
      <Title level={1} style={{ textAlign: 'center', marginBottom: '24px' }}>
        ABC BANK
      </Title>
      </div>
    <div style={{ width: '300px', margin: '0 auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
       
      <Title level={4} style={{ textAlign: 'left', marginBottom: '24px' }}>
        Login to your bank account
      </Title>

      <Form onFinish={handleSubmit} requiredMark={false}>
        <Form.Item
          label="Email address"
          name="email"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: 'Please enter your email' }]}
        >
          <Input placeholder="Email" value={email} onChange={handleEmailChange} />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
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
        <Checkbox checked={rememberMe} onChange={handleRememberMeChange}>Remember Me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign in
          </Button>
        </Form.Item>

      </Form>

    </div>

          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
 
    </div>
  );
};

export default LoginForm;
