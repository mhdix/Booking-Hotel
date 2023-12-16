import React from "react";
import { MdLocationOn } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { SlCalender } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const Header = () => {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
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
          <div id="optionDropDown" onClick={() => setOpenOptions(!openOptions)}>
            adult {options.adult} &bull; children {options.children} &bull; room {options.room}
          </div>
          {openOptions && (
            <GuestOptionList handleOptions={handleOptions} options={options} />
          )}
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

function GuestOptionList({ options, handleOptions }) {
  return (
    <div className="guestOptions">
      <OptionItem
        handleOptions={handleOptions}
        type="adult"
        options={options}
        minLimit={1}
      />
      <OptionItem
        handleOptions={handleOptions}
        type="children"
        options={options}
        minLimit={0}
      />
      <OptionItem
        handleOptions={handleOptions}
        type="room"
        options={options}
        minLimit={1}
      />
    </div>
  );
}

function OptionItem({ options, type, minLimit, handleOptions }) {
  return (
    <div className="guestOptionItem">
      <span className="optionText">{type}</span>
      <div className="optionCounter">
        <button
          onClick={() => handleOptions(type, "dec")}
          className="optionCounterBtn"
          disabled={options[type] <= minLimit}
        >
          <FiMinus className="icon" />
        </button>
        <span className="optionCounterNumber">{options[type]}</span>
        <button
          className="optionCounterBtn"
          onClick={() => handleOptions(type, "inc")}
        >
          <FiPlus className="icon" />
        </button>
      </div>
    </div>
  );
}