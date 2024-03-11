import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AllProducts.css'; // Your CSS file for styling
import data from './products.json'
const Testimonials = () => {
   
    const [currentSlide, setCurrentSlide] = useState(0);

    
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    return (
        <div className="prod-container">
           <div className="prod-main">
           <div className="prod-up">
           <h3 style={{color:'orange'}}>Best  Selling </h3>
              <h1 className='primaryText'>All Products</h1>
             </div>


           <div className="prod-down">
           <Slider {...settings}>
                {data.map((prod, index) => (
                    <div
                        key={index}
                        className="prod-item"
                        style={{ color: index === currentSlide ? 'black' : 'gray' }}
                    >
                       <div className="productss">
                           <span> <img src={prod.image} alt="img" /></span> <span className='prod-names'>
                           <p className='price' style={{color:'#1f3e72'}}><span  style={{color:'orange'}}>$</span  >{prod.price}</p>
                           <h3 className='naming primaryText' style={{fontSize:'23px'}}>{prod.name}</h3>
                             <p style={{fontSize:'15px',color:'orange',paddingLeft:'8px'}} >{prod.des}</p>
                           </span>
                       </div>

                       <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>

 
     <button className='button' style={{position:'relative',top:'25px'}} >Buy Now</button> 
                    </div>
                ))}

{data.map((prod, index) => (
                    <div
                        key={index}
                        className="prod-item"
                        style={{ color: index === currentSlide ? 'black' : 'gray' }}
                    >
                       <div className="productss">
                           <span> <img src={prod.image} alt="img" /></span> <span className='prod-names'>
                           <p className='price' style={{color:'#1f3e72'}}><span  style={{color:'orange'}}>$</span  >{prod.price}</p>
                           <h3 className='naming primaryText' style={{fontSize:'23px'}}>{prod.name}</h3>
                             <p style={{fontSize:'15px',color:'orange',paddingLeft:'8px'}} >{prod.des}</p>
                           </span>
                       </div>

                       <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>

 
     <button className='button' style={{position:'relative',top:'25px'}} >Buy Now</button> 
                    </div>
                ))}
{data.map((prod, index) => (
                    <div
                        key={index}
                        className="prod-item"
                        style={{ color: index === currentSlide ? 'black' : 'gray' }}
                    >
                       <div className="productss">
                           <span> <img src={prod.image} alt="img" /></span> <span className='prod-names'>
                           <p className='price' style={{color:'#1f3e72'}}><span  style={{color:'orange'}}>$</span  >{prod.price}</p>
                           <h3 className='naming primaryText' style={{fontSize:'23px'}}>{prod.name}</h3>
                             <p style={{fontSize:'15px',color:'orange',paddingLeft:'8px'}} >{prod.des}</p>
                           </span>
                       </div>

                       <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>

 
     <button className='button' style={{position:'relative',top:'25px'}} >Buy Now</button> 
                    </div>
                ))}




            </Slider>
           </div>
           </div>
        </div>
    );
};

export default Testimonials;
