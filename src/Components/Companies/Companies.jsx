import React from 'react'
import './Companies.css'
import c1 from '../Resources/prologis.png'
import c2 from '../Resources/tower.png'
import c3 from '../Resources/equinix.png'
import c4 from '../Resources/realty.png'
const Companies = () => {
  return (
    <div className='c-wrapper' style={{backgroundColor:'white'}}>
       <div className="paddings innerWidth flexCenter c-container">
         <img src={c1} alt="" />
         <img src={c2} alt="" />
         <img src={c3} alt="" />
         <img src={c4} alt="" />
       </div>
    </div>
  )
}

export default Companies
