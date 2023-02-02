import {
  faBed,
  faCalendarDays,
  faPerson,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./filterInputs.css";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
const FilterInputs = () => {
  // useState to activate date selector component library
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false)
  return (
    // Input Lists
    <div className="p-5 bottom-[-35px] sm:self-center gap-5 flex justify-between lg:flex-row rounded-md lg:absolute  w-[90%] text-neutral-400 sm:   sm:flex-col bg-white border-2 border-[#febb02]">
      {/* place search */}
      <div className="flex flex-row items-center gap-4">
        <FontAwesomeIcon icon={faBed} />
        <input
          className="border-transparent focus:border-transparent focus:ring-0"
          type="text"
          placeholder="Where are you going?"
          autoComplete="off"
        />
      </div>

      {/* Booking dates*/}
      <div className="flex flex-col">
        {/* Date inputs */}
        <div className='flex flex-row items-center gap-4'>
        <FontAwesomeIcon icon={faCalendarDays} />
        <span onClick={()=>setOpenDate(!openDate)}>
         {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`} 
        </span>  
        </div> 
        {/* Date Range picker */}
        {openDate && <DateRange className="lg:top-[50px] absolute bottom-[-40px]"
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />}
      </div>

      {/* place search */}
      <div className="flex flex-row items-center gap-4">
        <FontAwesomeIcon icon={faPerson} />
        <span>2 Adults 2 children 1 room</span>
      </div>
      {/* Search Button */}
      <div className="flex text-center sm:self-center">
        <button className="text-company-blue text-2xl">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default FilterInputs;
