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
    absolute 
     p-5 
     lg:bottom-[-50px]
     md:bottom-[255px] 
     sm:self-center 
     mt-10
     gap-5 
     flex 
     text-center
     justify-between 
     lg:flex-row rounded-md   
     w-[90%] text-neutral-400 
     sm:flex-col

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
