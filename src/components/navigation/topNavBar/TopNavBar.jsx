import React, { useState } from "react";
// import Pic from "/src/assets/woman.jfif";
import { FaBars } from "react-icons/fa";
import SearchInput from "../../dashBoardComponents/SearchInput";
import { Context } from "../../../contexts/DashBoardContext";


const TopNavBar = () => {
  const [isLogin] = useState(true);
  const { open, handleOpenBar,userName,surName /* ,menu,handleMenuChange */ } = Context();
  


  return (
    <>
      <header
        className={
          !open
            ? "w-[100%] border-solid pl-[25px] pr-[35px] bg-[#FFFFFF] border-r h-[86px] flex flex-col justify-center"
            : "w-[100%] border-solid pl-[25px] pr-[35px] bg-[#FFFFFF] h-[78px] flex flex-col justify-center"
        }
      >
        <div
          className={
            open
              ? "w-[100%] bg-[#FFFFFF] h-[58px] flex-1 flex justify-between place-items-center"
              : "w-[100%] bg-[#FFFFFF] h-[63.85px] flex-1 flex justify-between place-items-center"
          }
        >
          <div
            className="cursor-pointer /* toggle-width-icons */"
            onClick={handleOpenBar}
          >
            {open ? (
              <FaBars size={25} className="text-[#176B87]" />
            ) : (
              <FaBars size={25} className="text-[#176B87]" />
            )}
          </div>

          {/* <div className="hidden menu-icon" onClick={handleMenuChange}>
            {
              !menu ? <FaBars size={25}/> : <FaTimes/>
            }
          </div> */}
          <div className="flex place-items-center w-[50%] h-[58px] bg-[rgb(255,255,255)] top-bar-search">
            <SearchInput />
            <div className="relative w-[50px] h-[50px] bg-[#FFFFFF] border-2 ml-4 rounded-full flex place-items-center justify-center text-[28px] font-[500] text-[#176B87]">
              <span>{userName.slice(0,1)}</span>
              <span>{surName.slice(0,1)}</span>
              {/* <img
                src={Pic}
                alt="siteImage"
                className="w-[50px] h-[50px] rounded-full ml-4 bg-[#FFFFFF] object-cover"
              /> */}
              <span
                className={
                  isLogin
                    ? " absolute w-[8.57px] h-[8.57px] bg-[#16E704] rounded-full top-9 right-[0px]"
                    : " absolute  w-[8.57px] h-[8.57px] bg-red-600 rounded-full top-9 right-[0px]"
                }
              ></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopNavBar;
