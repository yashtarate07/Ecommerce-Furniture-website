import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Resources/logo.png';
const Navbar = () => {
  return (
    <>
    <div className='nav'>
      <div className="navbar bg-base-100"style={{ backgroundColor:'#131110' }}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        
      </div>
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <div className=" flex-none gap-2">
    <div className="form-control"style={{height:'33px',position:'relative',left:"5%"}}>
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    </div>

    <div className=" navbar-end"style={{position:'relative',left:'60%',top:'-40px'}}>
    <Link to="/login" className="btn" style={{fontSize:'15px',}}>Login</Link>
  </div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Service</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
      
    </div>
    <Link className="btn btn-ghost text-xl"><img src={logo} style={{height:"40px"}} alt="logo" />
    <h3 className='ganesh'style={{color:"#f54748"}}>Shree Ganesh <br/><span style={{color:"#313e5e",position:'relative',top:'-10px',fontSize:'15px',fontFamily: 'Inria Sans'}}>Furniture</span></h3>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'> About</Link></li>
      <li><Link to='/services'>Service</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </div>
 
      {/* cart */}
  <div className='cart' style={{color:'white',}}>
  <div className="  flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item" style={{fontSize:'20px',color:'white',background:'#4066ff'}}>8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block" style={{color:'white',fontSize:'20px;'}}>View cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div className="login navbar-end"style={{position:'relative',left:'-5%'}}>
    <Link to='/signin' className=" button">Login</Link>
  </div>
</div>

    </div>
    </>
  )
}

export default Navbar