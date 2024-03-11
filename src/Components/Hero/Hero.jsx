import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import hero from './hero.jpg';
import CountUp from 'react-countup'
import Values from '../Values/Values';
import Companies from '../Companies/Companies';
import Clients from '../clients/Clients'
import Offer from '../Offer/Offer';
import Mail from '../mail/Mail';
import Popular from '../Popular/Popular';
import AllProducts from '../AllProducts/AllProducts'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
   <>
    <section className="hero-wrapper" >
    <div className="paddings innerWidth hero-container ">
        <div className="flexColStart hero-left">
              <div className="hero-tittle">
                <div className="orange"/>

                
                 <motion.h1
                 initial= {{opacity:0, y:"2rem"}}
                 animate={{ opacity:1 ,y:0}}
                 transition={{ duration:3,type:"spring"}}
                 >Discover <br/>Most Suitable <br />Furniture.</motion.h1>    
              </div>
              <div className="felxColStart secondaryText hero-des">
                <span>Find a verirty of Furnitures that suit you very easily <br />Forget all difficulties in finding a residence for you.</span>
              </div>

              {/* search bar */}
             <div className="flexCenter search-bar">

              <HiLocationMarker color="var(--blue)" size={25}/>
              <input type='text' placeholder='Search for furnitures...'></input>
              <button className='button'>Search</button>
              </div> 

                  {/* counting */}
                  <div class="flexCenter stats" style={{ backgroundColor:'var(--black)'}}>
    <div class="flexColCenter stat">
        <span>
            <CountUp start={1000} end={9000} duration={5}/>
            <span>+</span>
        </span>
        <span class='secondaryText'>Premium Products</span>
    </div>

    <div class="flexColCenter stat">
        <span>
            <CountUp start={1950} end={2000} duration={5}/>
            <span>+</span>
        </span>
        <span class='secondaryText'>Happy Customers</span>
    </div>

    <div class="flexColCenter stat">
        <span>
            <CountUp end={21} />
            <span>+</span>
        </span>
        <span class='secondaryText'>Award Winning</span>
    </div>
</div>
</div>
         {/* right */}
        <div className="flexCenter hero-right">
           <motion.div
           initial={{x:"7rem",opacity:0}}
           animate={{x:0, opacity:1}}
           transition={{duration:3,
            type:'spring'
        }}
            className="image-container">
              <img src={hero} alt="" />
           </motion.div>
        </div>
    </div>
   </section>

   <div>
     <Companies/>
   </div>
   <Popular/>
  
   <Values/>
   <AllProducts/>
   
   <Offer/>
  <Clients/>
  
   </>
  )
}

export default Hero
