import React from 'react'
import './Mail.css'
import mail from '../Resources/mail.jpeg'
const Mail = () => {
  return (
    <div className='mail'>
      <div className="one">
         <h1>Subscribe to the newsletter.</h1>
         <p>Now you can get 20% off on your first order</p>
      </div>
      
       <div className="second">
       <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
       </div>
    </div>
  )
}

export default Mail
