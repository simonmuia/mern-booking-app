import React from 'react'
import PropertyListItem from './PropertyListItem'

const propertyList = () => {
  return (
    // Wrapper
    <div className=' flex
    flex-col
    items-center
    mt-10
    overflow-x-scroll
    scrollbar-hide
   scroll-smooth
   pb-10
   '>
    
       <PropertyListItem/>
        
    </div>
  )
}

export default propertyList