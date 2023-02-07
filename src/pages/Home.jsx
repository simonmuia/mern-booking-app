import React from "react"
import Featured from "../components/featured/Featured"
import Header from "../components/header/Header"
import Navbar from "../components/navbar/Navbar"
import PropertyList from "../components/propertyList/PropertyList"

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
      <Featured/>

      <h1 className='text-2xl mt-10 font-bold'>Browse by Property Type</h1>
    <PropertyList/>
    </div>
    </div>
  )
}

export default Home