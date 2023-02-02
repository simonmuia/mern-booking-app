import {
  faBed,
  faCalendarDays,
  faPerson,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./filterInputs.css";
import React, { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const FilterInputs = () => {
  // useState to activate date selector component library
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);

  //   Open options
  let [openOptions, setOpenOptions] = useState(false);
  let [adultCount, setAdultCount] = useState(0);
  let [childrenCount, setChildrenCount] = useState(0);
  let [roomCount, setRoomCount] = useState(0);

  const [options, setOptions] = useState({
    adult: adultCount,
    children: childrenCount,
    room: roomCount,
  });

  useEffect(() => {
    setAdultCount(adultCount);
  }, [adultCount]);

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
        <div className="flex flex-row items-center gap-4">
          <FontAwesomeIcon icon={faCalendarDays} />
          <span onClick={() => setOpenDate(!openDate)}>
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

   {/* Filter wrapper */}
      <div className="flex flex-row gap-5 ">
   {/* place search */}
      <div className="flex flex-row items-center gap-4">
        <FontAwesomeIcon icon={faPerson} />
        <span>
          {`${
            options.adult === 1
              ? `${options.adult} adult`
              : `${options.adult} adults`
          } . 
        
        ${
          options.children === 1
            ? `${options.children} child`
            : `${options.children} children`
        }. 
        
          ${
            options.room === 1
              ? `${options.room} room`
              : `${options.room} rooms`
          }
        
        `}
        </span>

        </div>
        {/* Add counter buttons wrapper */}
        <div className="flex absolute lg:top-[50px] w-max flex-col gap-2">

          {/* Adult Count */}
          <div className="flex  gap-3 justify-between">
            <span>Adult</span>
            <div className='flex gap-2'>
            <button
              onClick={() => {
                if (adultCount <= 0) {
                  setAdultCount(0);
                } else {
                  setAdultCount((adultCount -= 1));
                }
              }}
              className="font-bold text-company-blue"
            >
              -
            </button>
            <span className="bg-neutral-200 w-10 text-center text-black rounded-md">
              {`${adultCount}`}
            </span>
            <button
              onClick={() => {
                setAdultCount((adultCount += 1));
              }}
              className="font-bold text-company-blue"
            >
              +
            </button>
            </div>
          </div>

          {/* Children Count */}
          <div className="flex gap-5 justify-between">
          <span>Children</span>
          <div className='flex gap-2'>
            <button
              onClick={() => {
                if (childrenCount <= 0) {
                  setChildrenCount(0);
                } else {
                  setChildrenCount((childrenCount -= 1));
                }
              }}
              className="font-bold text-company-blue"
            >
              -
            </button>
            <span className="bg-neutral-200 w-10 text-center text-black rounded-md">
              {`${childrenCount}`}
            </span>

            <button
              onClick={() => {
                setChildrenCount((childrenCount += 1));
              }}
              className="font-bold text-company-blue"
            >
              +
            </button>
            </div>
          </div>

          {/* Room Count */}
          <div className="flex gap-5 justify-between ">
          <span>Rooms</span>
            <div className='flex gap-2'>
            <button
              onClick={() => {
                if (roomCount <= 0) {
                  setRoomCount(0);
                } else {
                  setRoomCount((roomCount -= 1));
                }
              }}
              className="font-bold text-company-blue"
            >
              -
            </button>
            <span className="bg-neutral-200 w-10 text-center text-black rounded-md">
              {`${roomCount}`}
            </span>
            <button
              onClick={() => {
                setRoomCount((roomCount += 1));
              }}
              className="font-bold text-company-blue"
            >
              +
            </button>
            </div>
           
          </div>
        </div>
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
