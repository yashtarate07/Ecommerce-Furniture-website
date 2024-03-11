import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import logo from '../Resources/logo.png';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <div className="contact-us-container">
            <div className="left">
            <Link className="btn btn-ghost text-xl"><img src={logo} style={{height:"40px",position:'relative',top:'-130px'}} alt="logo" />
    <h3 className='ganesh'style={{color:"#f54748",position:'relative',top:'-130px'}}>Shree Ganesh <br/><span style={{color:"#313e5e",position:'relative',top:'-10px',fontSize:'15px',fontFamily: 'Inria Sans'}}>Furniture</span></h3>
    </Link>

    <h1 style={{color:'rgb(206,14,14)'}}>Discover
Most Suitable
Furniture.</h1>
          <p>Get behind the wheel of your dream car. Explore <br/>our extensive inventory and take the first step <br/> towards your next adventure.</p>
            </div>
            <div className="contact-us-content">
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, please feel free to contact us using the form below:</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <input type="tel" name="mobile" placeholder="Your Mobile" value={formData.mobile} onChange={handleChange} required />
                    <input type="text" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;