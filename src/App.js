import React from 'react';
import './App.css';
import LoginForm from './Components/Login/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RegistrationForm from './Components/Registration/RegistrationForm';
import Home from './Components/Home/Home';
import RegistrationForm from './Components/Registartion/RegistrationForm';
import Deposit from './Components/Home/Deposit';
import Withdraw from './Components/Home/Withdraw';
import Transfer from './Components/Home/Transfer';
import Statement from './Components/Home/Statement';
import UserData from './Components/Home/UserData';

function App() {
  return (
    <div className="App">
           
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={ <RegistrationForm/>} />
          <Route path="/home" element={ <UserData/>} />
          <Route path="/deposit" element={ <Deposit/>} />
          <Route path="/withdraw" element={ <Withdraw/>} />
          <Route path="/transfer" element={ <Transfer/>} />
          <Route path="/statement" element={ <Statement/>} />
          <Route path="/userdata" element={ <UserData/>} />
        </Routes>

       
      </Router>
      
    </div>
  );
}

export default App;
