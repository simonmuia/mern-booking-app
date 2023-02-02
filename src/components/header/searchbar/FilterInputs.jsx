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

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i"
            ? options[name] + 1
            : options[name] === 0
            ? (options[name] = 0)
            : options[name] - 1,
      };
    });
  };

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
      <div className="flex flex-col gap-5 ">
        {/* place search */}
        <div className="flex flex-row items-center gap-4">
          <FontAwesomeIcon icon={faPerson} />
          <span className="flex w-[100%] gap-10">
            <div className="w-[4rem]">
              {`${
                options.adult === 1
                  ? `${options.adult} adult`
                  : `${options.adult} adults`
              } `}
            </div>
            <div className="w-[5rem]">
              {` ${
                options.children === 1
                  ? `${options.children} child`
                  : `${options.children} children`
              }`}
            </div>
            <div className="w-[4rem]">
              {" "}
              {`
          ${
            options.room === 1
              ? `${options.room} room`
              : `${options.room} rooms`
          }
        `}
            </div>
          </span>
        </div>

        {/* Add counter buttons wrapper */}
        <div className="flex absolute md:self-start sm:self-center h-max lg:top-[50px] md:bottom-[90px] sm:bottom-[-22rem] bg-white p-10 shadow-md rounded-md  flex-col gap-2">
          {/* Adult Count */}
          <div className="flex  gap-3 justify-between">
            <span>{`${options.adult === 1 ? "Adult" : "Adults"}`}</span>
            <div className="flex gap-2">
              <button
                disabled={options.adult <= 1}
                onClick={() => handleOption("adult", "d")}
                className={
                  options.adult <= 1
                    ? "font-bold text-neutral-300 border-2 w-6 border-neutral-300 rounded-smhover:bg-blue-300 "
                    : " cursor-pointer font-bold text-company-blue border-2 w-6 border-blue-300 rounded-sm hover:bg-blue-300 hover:text-white active:bg-blue-500 transition duration-400"
                }
              >
                -
              </button>
              <span className=" w-10 text-center text-black rounded-md">
                {`${options.adult}`}
              </span>
              <button
                onClick={() => handleOption("adult", "i")}
                className="font-bold text-company-blue 
                border-2 w-6 border-blue-300 rounded-sm
                 hover:bg-blue-300 hover:text-white 
                 active:bg-blue-500 
                 transition duration-400 "
              >
                +
              </button>
            </div>
          </div>

          {/* Children Count */}
          <div className="flex w-[250px]  gap-5 justify-between">
            <span>{`${options.children === 1 ? "Child" : "Children"}`}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleOption("children", "d")}
                disabled={options.children === 0}
                className={
                  options.children === 0
                    ? "font-bold text-neutral-300 border-2 w-6 border-neutral-300 rounded-smhover:bg-blue-300 "
                    : " cursor-pointer font-bold text-company-blue border-2 w-6 border-blue-300 rounded-sm hover:bg-blue-300 hover:text-white active:bg-blue-500 transition duration-400"
                }
              >
                -
              </button>
              <span className=" w-10 text-center text-black rounded-md">
                {`${options.children}`}
              </span>

              <button
                onClick={() => handleOption("children", "i")}
                className="font-bold text-company-blue 
                border-2 w-6 border-blue-300 rounded-sm
                 hover:bg-blue-300 hover:text-white 
                 active:bg-blue-500 
                 transition duration-400 "
              >
                +
              </button>
            </div>
          </div>

          {/* Room Count */}
          <div className="flex gap-5 justify-between ">
            <span>{`${options.room === 1 ? "Room" : "Rooms"}`}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleOption("room", "d")}
                disabled={options.room <= 1}
                className={
                  options.room <= 1
                    ? "font-bold text-neutral-300 border-2 w-6 border-neutral-300 rounded-smhover:bg-blue-300 "
                    : " cursor-pointer font-bold text-company-blue border-2 w-6 border-blue-300 rounded-sm hover:bg-blue-300 hover:text-white active:bg-blue-500 transition duration-400"
                }
              >
                -
              </button>
              <span className=" w-10 text-center text-black rounded-md">
                {`${options.room}`}
              </span>
              <button
                onClick={() => handleOption("room", "i")}
                className="font-bold text-company-blue border-2 w-6 border-blue-300 rounded-sm hover:bg-blue-300 hover:text-white active:bg-blue-500 transition duration-400 "
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
