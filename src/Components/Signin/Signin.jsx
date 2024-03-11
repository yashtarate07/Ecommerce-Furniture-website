import React from 'react'
import "./Signin.css"
import {Link} from 'react-router-dom'
const Signin = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex justify-center items-center h-screen" >
          <div>
            <div className="title flex flex-col items-center">
               <h4 className='test-5xl font-bold'>Hello Again!</h4>
               <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                Explore More by connecting with us.
               </span>
            </div>

            <form action="" className="py-1">
              <div className="profile flex justify-center py-4">
                  <img src="" alt="alt img" />
              </div>
              <div className="textbox felx felx-col items-center gap-4">
                <input type="text" placeholder='Username' />
                <button type='submit'>Lets Go</button>
              </div>
              <div className="text-center py-4">
                <span className='text-gray-500'>Not a Member <Link to='/register' className="text-red-500">Register Now</Link></span>
              </div>
            </form>
          </div>

      </div>
    </div>
  )
}

export default Signin
