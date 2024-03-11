import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Popular.css'; // Make sure to add your custom CSS file for styling
import data from './data.json'
// Install Swiper components

const Popular = () => {
  return (
   <div className="popular">
      <div className="toppop">
              <h3 style={{color:'orange'}}>Best  Selling </h3>
              <h1 className='primaryText'>Top Products</h1>
      </div>

      <div className="lowerpop">
      <Swiper
      spaceBetween={80}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="slide-item">
            <img src={item.image} alt={item.name} />
            <p className='price' style={{color:'#1f3e72'}}><span  style={{color:'orange'}}>$</span  >{item.price}</p>
            <h3 className='naming primaryText' style={{fontSize:'23px'}}>{item.name}</h3>

            <div className="rating rating-lg" style={{position:'relative',top:'-10px'}}>
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
</div>
           <button className='but button' style={{position:'relative',top:'-20px',left:'40%'}}>Buy Now</button> 
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
   </div>
  );
};

export default Popular;
