import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import React, { useState,useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";


//Define clickoutside function
let useClickOutside = (handler) => {
  /*
  - The defined domNode detects when user clicks outsite the popup component
  and closes the component.
  -It keeps the component open only when user is using it.
  */
//  useRef is used to prevent re-rendering by useState 
  let domNode = useRef();

  useEffect(() => {
    let mayBehandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", mayBehandler);
    return () => {
      document.removeEventListener("mousedown", mayBehandler);
    };
  });
  return domNode;
};



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

  // Re-Define domNode to run clickoutside function
  let domNode = useClickOutside(() => {
    setOpenDate(false);
  });


  return (
     <div className="flex  " ref={domNode}>

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
         className="lg:top-[50px] w-[30%] absolute md:bottom-[-40px] sm:bottom-[-12rem] z-[2]"
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