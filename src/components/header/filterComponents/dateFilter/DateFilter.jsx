import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const DateFilter = () => {

     // useState to activate date selector component library
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);

  return (
     <div className="flex ">

     {/* Date inputs */}
     <div className="flex flex-row items-center gap-4">
       <FontAwesomeIcon icon={faCalendarDays} />
       <span className='cursor-pointer' onClick={() => setOpenDate(!openDate)}>
         {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
           date[0].endDate,
           "MM/dd/yyyy"
         )}`}
       </span>
     </div>


     {/* Date Range picker */}
     {openDate && (
       <DateRange
         className="lg:top-[50px] absolute bottom-[-40px]"
         editableDateInputs={true}
         onChange={(item) => setDate([item.selection])}
         moveRangeOnFirstSelection={false}
         ranges={date}
       />
     )}
   </div>


      )
}

export default DateFilter