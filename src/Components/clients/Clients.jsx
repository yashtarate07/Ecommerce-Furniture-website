import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Clients.css'; 
import data from './clientdata.json'
const Testimonials = () => {
   
    const [currentSlide, setCurrentSlide] = useState(0);

    
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    return (
        <div className="testimonials-container"  style={{position:'relative',top:'150px'}}>
           <div className="main">
           <div className="client-up">
             <h2 className='primaryText'>What Our Customers Say</h2>
             </div>


           <div className="client-down">
           <Slider {...settings}>
                {data.map((testimonial, index) => (
                    <div
                        key={index}
                        className="testimonial-item"
                        style={{ color: index === currentSlide ? 'black' : 'gray' }}
                    >
                       <div className="user">
                           <span> <img src={testimonial.img} alt="img" /></span> <span className='names'>
                             <h2 id='myname' style={{fontSize:'20px'}} className='primaryText'>{testimonial.name}</h2>
                             <p id='mydes' style={{fontSize:'15px',color:'orange',paddingLeft:'8px'}} >{testimonial.des}</p>
                           </span>
                       </div>
~
                       <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>

 
                        <p className='mytxt' style={{fontSize:'18px',color:"gray"}}>{testimonial.text}</p>
                    </div>
                ))}
            </Slider>
           </div>
           </div>
        </div>
    );
};

export default Testimonials;
