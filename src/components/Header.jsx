import React from "react";
import { MdLocationOn } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { SlCalender } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [destination, setDestination] = useState("");
  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            name="destination"
            id="destination"
            placeholder="where to go ? "
            className="headerSearchInput"
          />
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <SlCalender className="headerIcon dateIcon" />
          <div className="dateDropDown">2023/06/23</div>
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <div id="optionDropDown">1 adult &bull; 2 children &bull; 1 room</div>
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <CiSearch className="headerIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
