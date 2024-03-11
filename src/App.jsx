import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Values from './Components/Values/Values';
import Contact from './Components/Contact/Contact';
import AllProducts from './Components/AllProducts/AllProducts.jsx';
import Signin from './Components/Signin/Signin.jsx'
import Signup from './Components/Signup/Signup.jsx';
function App() {
  

  return (
    <>
      <div className="app">
         <BrowserRouter>
          <Navbar/>
          <Routes>
             <Route path='/' element={<Hero/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/services' element={<Values/>}/>
             <Route path='/products' element={<AllProducts/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/signin' element={<Signin/>}/>
             <Route path="/signup" element={<Signup/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
