import React, { useState } from 'react';
import './Signup.css';
import email from  '../Resources/login/email.png'
import person from  '../Resources/login/user.png'
import eye from  '../Resources/login/eye-hide.png'
const Signup = () => {
  const [action, setAction] = useState("Login");
  
  const[loginData , setLoginData] = useState({
    email : "",
    password: "" ,
  })

  const[signupData , setSignupData] = useState({
    username : "",
    email:"",
    password: "" ,
  })

 

  return (
    <div className="container">
        <div className="ha">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "login" ? <div></div> : <div className="input">
          <img src={person} alt=" Username" />
          <input placeholder="UserName" type="text" />
        </div>}
        <div className="input">
          <img src={email}alt="email id" />
          <input placeholder="email id" type="Email" />
        </div>
        <div className="input">
          <img src={eye} alt="password" />
          <input placeholder="password" type="PASSWORD" />
        </div>
      </div>
      {action === "sign up" ? <div></div> : <div className="forgot-password">LOST PASSWORD <span>click here!</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => { setAction("sign up") }}>SIGN UP</div>
        <div className={action === "sign up" ? "submit grey" : "submit"} onClick={() => { setAction("login") }}>LOGIN</div>
      </div>
      </div>
    </div>
  );
};
export default Signup;