import React from "react";
import Categories from "./HeaderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
const Header = () => {
  return (
    // Define  header Wrapper
    <div className="flex justify-center pb-10 px-10 pt-10 bg-[#003580]" >
      {/* Define Header Container */}
      <div className="text-white w-max max-w-[1024px] mt-[20px] mb-[100px]">

        {/* Header List */}
        <div className="flex gap-10">
             {/*Header list item  */}

      {Object.entries(Categories).map(([key, { icon, title }]) => (
        <div  className="flex p-[10px] items-center gap-[10px] cursor-pointer hover:border-white" key={key}>
          <FontAwesomeIcon   icon={icon} />
          <span>{title}</span>
        </div>
      ))}
        </div>

      </div>
     
    </div>
  );
};

export default Header;
