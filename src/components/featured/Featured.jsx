import React from 'react'
import { ItemList } from './utils/itemlistData'

const Featured = () => {
  return (
    <div className='
    flex
    flex-col
    items-center
    mt-10
    relative 
    overflow-x-scroll
    scrollbar-hide
    '>
      
      {/* Featured item list */}
      <div className='flex  flex-row space-x-5 '>
        {/* Import items from datalist */}
      {/* Item */}
      {ItemList.map((itemlist)=>(
      <div className='relative first:ml-[88rem] last:pr-10 w-max h-max  cursor-pointer    '>
        <img className='object-cover w-[350px] rounded-lg' height={1080} width={1920} src={itemlist.url} alt={itemlist.alt} />
        {/* Item titles */}
        <div className='absolute left-5 text-white bottom-5'>
          <h1 className='md:text-2xl font-bold sm:text-lg'>{itemlist.name}</h1>
          <h2 className='md:text-basefont-bold sm:text-sm'>{itemlist.description}</h2>
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

export default Featured