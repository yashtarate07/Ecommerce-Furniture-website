import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import logo from '../Resources/logo.png'
const Footer = () => {
 
  return (
    <div style={{position:'relative',top:'220px' ,}}>
      
      <div className='mail'>
      <div className="one">
         <h1 className='primaryText'>Subscribe to the newsletter.</h1>
         <p >Now you can get 20% off on your first order</p>
      </div>
      
       <div className="second">
     
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="button" style={{height:"50px"}}>Subscribe</button>
      </div>
       </div>
    </div>


      <footer className="footer p-10 bg-base-200 text-base-content" style={{backgroundColor:'white'}}>
  <aside>
  <Link className="btn btn-ghost text-xl"><img src={logo} style={{height:"40px"}} alt="logo" />
    <h3 className='ganesh'style={{color:"#f54748"}}>Shree Ganesh <br/><span style={{color:"#313e5e",position:'relative',top:'-10px',fontSize:'15px',fontFamily: 'Inria Sans'}}>Furniture</span></h3>
    </Link>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <Link className="link link-hover">Branding</Link>
    <Link className="link link-hover">Design</Link>
    <Link className="link link-hover">Marketing</Link>
    <Link className="link link-hover">Advertisement</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <Link className="link link-hover">About us</Link>
    <Link className="link link-hover">Contact</Link>
    <Link className="link link-hover">Jobs</Link>
    <Link className="link link-hover">Press kit</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <Link className="link link-hover">Terms of use</Link>
    <Link className="link link-hover">Privacy policy</Link>
    <Link className="link link-hover">Cookie policy</Link>
  </nav>
</footer>

     
    </div>
  )
}

export default Footer
