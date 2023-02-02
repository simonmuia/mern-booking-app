import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TextInput } from 'flowbite-react'
import React from 'react'

const FilterInputs = () => {
  return (
    // Input Lists
    <div className='p-5 bottom-[-35px] gap-5 flex justify-between lg:flex-row rounded-md lg:absolute  w-[90%] text-gray-500 sm:   sm:flex-col bg-white border-2 border-[#febb02]'>
        {/* place search */}
        <div className='flex flex-row items-center gap-4'>
            <FontAwesomeIcon icon={faBed}/>
            <TextInput
            type="text"
            placeholder='Where are you going?'
            className=''
            autoComplete='off'
            />
        </div>

        {/* Booking dates*/}
        <div className='flex flex-row items-center gap-4'>
            <FontAwesomeIcon icon={faCalendarDays}/>
            <span>date to date</span>
        </div>

        {/* place search */}
        <div className='flex flex-row items-center gap-4'>
            <FontAwesomeIcon icon={faPerson}/>
            <span>2 Adults 2 children 1 room</span>
        </div>
        

    </div>
  )
}

export default FilterInputs