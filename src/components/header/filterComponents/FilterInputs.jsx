import {faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DateFilter from "./dateFilter/DateFilter";
import PlaceComponent from "./placeFilter/PlaceComponent";
import PeopleFilter from './peopleFilter/PeopleFilter'
;
const FilterInputs = () => {


  return (
    // Input Lists
    <div className="
    md:absolute
    relative
     p-5 
     bottom-[-2.5rem]
     md:gap-20 
     flex 
     text-center
     items-center
     self-center
     lg:flex-row 
     rounded-md 
     h-max
   text-neutral-400 
     sm:flex-col
     sm:items-start
     md:flex-row
     md:justify-between
    bg-white border-2 
    border-[#febb02]
     ">
      <PlaceComponent />

      <DateFilter />

      <PeopleFilter/>

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
