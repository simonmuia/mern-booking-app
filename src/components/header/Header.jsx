import React, { useState } from "react";
import Categories from "../../utils/HeaderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import FilterInputs from "./filterComponents/FilterInputs";

const Header = ({ type }) => {
  //add useState hook to label selected link
  const [selectedHeaderItem, setselectedHeaderItem] = useState("");
  return (
    // Define  header Wrapper
    <div className="flex lg:relative sm:pb-10 flex-col px-[3rem] md:px-[3rem] sm:px-3 pt-10 bg-company-blue  ">
      
          <div className={type === "list" ? "text-white mt-[20px]" : "text-white   mt-[20px] mb-[100px]"}>
            {/* Header List */}
            <div className="flex w-100  flex-grow gap-[10rem]  lg:flex-row md:flex-row  sm:flex-col sm:gap-1">
              {/*Header list item  */}

              {Object.entries(Categories).map(([key, { icon, title }]) => (
                <div
                  onClick={() => {
                    setselectedHeaderItem(title);
                  }}
                  className={
                    title === selectedHeaderItem
                      ? "headerlist-item text-white  rounded-[20px] flex p-[10px] items-center gap-[10px] cursor-pointer"
                      : `p-[11px] max-w-screen-2xl text-gray-300  transition duration-300 rounded-[20px] flex items-center gap-[10px] cursor-pointer hover:p-[10px] hover:text-white hover:border-white hover:border-[1px]`
                  }
                  key={key}
                >
                  <FontAwesomeIcon icon={icon} />
                  <span>{title}</span>
                </div>
              ))}
            </div>

            {/* Header Description */}
            { type !== "list" &&
            <>
            <div className="flex flex-col gap-6 mt-10 items-start  text-white">
              <h1 className="text-3xl  font-bold">
                A lifetime of discounts? It's Genius.
              </h1>
              <p>
                Get rewarded for your travels-unlock instant savings of 10% or
                more with a free MyBooking App
              </p>
              <button
                className="rounded-md mt-4 p-[10px] bg-[#0071c2]
        "
              >
                SignIn / Register
              </button>
            </div>

            {/* Filter Inputs collections */}
            <FilterInputs/></>}
          </div>
    </div>
  );
};

export default Header;
