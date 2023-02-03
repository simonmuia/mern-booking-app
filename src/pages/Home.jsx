import React from "react"
import Featured from "../components/featured/Featured"
import Header from "../components/header/Header"
import Navbar from "../components/navbar/Navbar"

const Home = () => {
  return (
    
    <div>
    <Navbar/>
    <Header/>
    {/* Browse by property type */}
    <div className=' 
    md:mt-[6rem]
    sm:mt-[13rem]
    px-[3rem]
    sm:px-5
    '>
      <h1 className='text-2xl font-bold'>Browse by Property Type</h1>
    <Featured/>
    </div>
    
    <Featured/>
    </div>
  )
}

export default Home