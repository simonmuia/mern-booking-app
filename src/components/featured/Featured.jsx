import React from 'react'
import { ItemList } from './utils/itemlistData'

const Featured = () => {
  return (
    <div className='
    flex
    flex-col
    items-center
    md:mt-[6rem]
    sm:mt-[13rem]
    
    '>
      {/* Featured item list */}
      <div className='flex justify-between w-max-lg gap-3'>
        {/* Import items from datalist */}
      {/* Item */}
      {ItemList.map((itemlist)=>(
      <div className='relative  overflow-hidden '>
        <img className='object-cover w-[250px] rounded-lg' src={itemlist.url} alt={itemlist.alt} />
        {/* Item titles */}
        <div className='absolute left-5 text-white bottom-5'>
          <h1 className='md:text-2xl font-bold sm:text-lg'>{itemlist.name}</h1>
          <h2 className='md:text-basefont-bold sm:text-sm'>{itemlist.description}</h2>
        </div>
      
      </div>))}

      </div>
    </div>
  )
}

export default Featured