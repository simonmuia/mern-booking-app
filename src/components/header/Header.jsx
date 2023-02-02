import React, { useState } from "react";
import Categories from "../../utils/HeaderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css'

const Header = () => {
  //add useState hook to label selected link
  const [selectedHeaderItem, setselectedHeaderItem] = useState("");
   return (
    // Define  header Wrapper
    <div className="flex justify-center pb-10 px-10 pt-10 bg-[#003580]">
      {/* Define Header Container */}
      <div className=" w-max max-w-[1024px] mt-[20px] mb-[100px]">
        {/* Header List */}
        <div className="flex gap-10">
          {/*Header list item  */}

          {Object.entries(Categories).map(([key, { icon, title }]) => (
            <div
              onClick={() => {
                setselectedHeaderItem(title);
              }}
             
              className={
                title === selectedHeaderItem
                  ? "headerlist-item rounded-[20px] text-white flex p-[10px] items-center gap-[10px] cursor-pointer"
                  : `p-[11px] rounded-[20px] text-white flex items-center gap-[10px] cursor-pointer hover:p-[10px] hover:border-white hover:border-[1px]`
              }
              key={key}
            >
              <FontAwesomeIcon icon={icon} />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
