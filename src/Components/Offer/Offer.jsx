import React from 'react';
import off from '../Resources/off.png';
import './Offer.css';

const Offer = () => {
  return (
    <div className='main-offer' style={{backgroundImage:`url(${off})`,backgroundRepeat:'no-repeat'}} >
      <div className="left-offer">
        <h4>World's Best Sofa</h4>
        <h1 className='primaryText'>SALE ENDS IN 1 DAY.</h1>
        <button className=' btn-off button'>Order Now</button>
      </div>
      {/* <div className="right-offer">
        <img src={off} alt="" />
      </div> */}
    </div>
  );
};

export default Offer;
