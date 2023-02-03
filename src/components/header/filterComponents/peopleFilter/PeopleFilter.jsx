import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

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

const PeopleFilter = () => {
  //   Open options
  const [openOptions, setOpenOptions] = useState(false);

  // Update the people filter component
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // Re-Define domNode to run clickoutside function
  let domNode = useClickOutside(() => {
    setOpenOptions(false);
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
    <div className="flex  gap-5 ">
      <div className="flex flex-row items-center gap-4">
        <FontAwesomeIcon icon={faPerson} />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="flex-1 md:cursor-pointer md:flex md:flex-row bsm:flex flex w-[100%] gap-10 sm:grid sm:gap-1"
        >
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
    ${options.room === 1 ? `${options.room} room` : `${options.room} rooms`}
  `}
          </div>
        </span>
      </div>

      {/* Add counter buttons wrapper */}

      {openOptions && (
        <div
          ref={domNode}
          className="flex 
          absolute 
          md:self-start 
          sm-[550px]:self-center 
          h-max lg:top-[50px] 
          md:bottom-[90px] 
          sm:bottom-[-7rem] 
          bg-white 
          z-[2]
          p-10 
          shadow-md 
          rounded-md  
          flex-col gap-2"
        >
          {/* Adult Count */}
          <div className="flex  gap-3 justify-between">
            <span>{`${options.adult === 1 ? "Adult" : "Adults"}`}</span>
            <div className="flex gap-2">
              <button
                disabled={options.adult <= 1}
                onClick={() => handleOption("adult", "d")}
                className={
                  options.adult <= 1
                    ? "cursor-not-allowed font-bold text-neutral-300 border-2 w-6 border-neutral-300 rounded-smhover:bg-blue-300 "
                    : " cursor-pointer font-bold text-company-blue border-2 w-6 border-blue-300 rounded-sm hover:bg-blue-300 hover:text-white active:bg-blue-500 transition duration-400"
                }
              >
                -
              </button>
              <span className=" cursor-not-allowed w-10 text-center text-black rounded-md">
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
                    ? "cursor-not-allowed font-bold text-neutral-300 border-2 w-6 border-neutral-300 rounded-smhover:bg-blue-300 "
                    : " cursor-pointer font-bold text-company-blue border-2 w-6 border-blue-300 rounded-sm hover:bg-blue-300 hover:text-white active:bg-blue-500 transition duration-400"
                }
              >
                -
              </button>
              <span className="cursor-not-allowed w-10 text-center text-black rounded-md">
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
                    ? "cursor-not-allowed font-bold text-neutral-300 border-2 w-6 border-neutral-300 rounded-smhover:bg-blue-300 "
                    : " cursor-pointer font-bold text-company-blue border-2 w-6 border-blue-300 rounded-sm hover:bg-blue-300 hover:text-white active:bg-blue-500 transition duration-400"
                }
              >
                -
              </button>
              <span className="cursor-not-allowed w-10 text-center text-black rounded-md">
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
      )}
    </div>
  );
};

export default PeopleFilter;
