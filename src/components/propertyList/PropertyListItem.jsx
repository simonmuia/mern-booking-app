import React from 'react'
import { ItemCategoryList } from './utils/itemCategorylistData'

const PropertyListItem = () => {
  return (
    <div className='
   
    '>
      
      {/* Featured item list */}
      <div className='flex flex-row  space-x-5 '>
        {/* Import items from datalist */}
      {/* Item */}
      {ItemCategoryList.map((itemlist)=>(
      <div className='w-max h-max  cursor-pointer    '>
        <img className='object-cover w-[150px] rounded-lg' height={1080} width={1920} src={itemlist.url} alt={itemlist.alt} />
        {/* Item titles */}
        <div className=' left-5 text-company-blue bottom-5'>
          <h1 className='md:text-lg font-bold sm:text-lg'>{itemlist.name}</h1>
          <h2 className='md:text-basefont-bold sm:text-sm text-neutral-600'>{itemlist.description}</h2>
        </div>
      
      </div>))}

      </div>
     
      {/* <div className="absolute  
      right-0 bg-gradient-to-l 
      from-[#022a3a] 
      h-[100%]
       w-1/12
       z-2" /> */}
    </div>
  )
}

export default PropertyListItem