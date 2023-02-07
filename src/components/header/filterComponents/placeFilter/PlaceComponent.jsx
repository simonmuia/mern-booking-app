import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'

const PlaceComponent = () => {
  return (
    // Define Wrapper
    <div className="flex  flex-row items-center md:gap-4">

    <FontAwesomeIcon icon={faBed} />

    <input
      className="border-transparent md:w-max-[200px] w-[60%] focus:border-transparent focus:ring-0"
      type="text"
      placeholder="Where are you going?"
      autoComplete="off"
    />

  </div>
  )
}

export default PlaceComponent