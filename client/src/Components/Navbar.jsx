import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import logo from "../Assets/msone-main-navbar-logo.webp";

const Navbar = () => {
  return (
    <div className="bg-black p-5 text-white items-center justify-between flex">
      <img src={logo} alt="" />

      <ul className="flex gap-5 font-bold text-lg cursor-pointer">
        <span className="flex items-center hover:text-blue-400">
          <li>പരിഭാഷകൾ</li>
          <RiArrowDropDownLine className="size-7" />
        </span>
        <span className="flex items-center hover:text-blue-400">
          <li>പ്രേഷകരോട്</li>
          <RiArrowDropDownLine className="size-7" />
        </span>
        <li className="hover:text-blue-400">ഞങ്ങളെക്കുറിച്ച്</li>
        <span className="flex items-center hover:text-blue-400">
          <li>പരിഭാഷകർ</li>
          <RiArrowDropDownLine className="size-8" />
        </span>
      </ul>
      <span className="flex items-center cursor-pointer hover:text-blue-400">
        <input
          className="placeholder-white hover:placeholder-blue-400 border p-2 rounded-lg "
          placeholder="Search"
          type="text"
        />
        <IoSearch className="size-6 absolute right-8" />
      </span>
    </div>
  );
};

export default Navbar;
