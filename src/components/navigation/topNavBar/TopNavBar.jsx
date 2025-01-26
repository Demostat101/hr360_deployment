import React, { useState } from "react";
// import Pic from "/src/assets/woman.jfif";
import { FaBars } from "react-icons/fa";
import SearchInput from "../../dashBoardComponents/SearchInput";
import { Context } from "../../../contexts/DashBoardContext";

const TopNavBar = () => {
  const [isLogin] = useState(true);
  const { userName, surName, setOpen } = Context();

  

  return (
    <>
      <header className="w-[100%] sticky top-0 z-30 border-solid pl-[25px] pr-[35px] bg-[#FFFFFF] h-[86px] flex flex-col justify-center">
        <div className="w-[100%] bg-[#FFFFFF] h-[63.85px] flex justify-between lg:justify-end place-items-center">
          <div onClick={()=>setOpen(true)} className="cursor-pointer lg:hidden">
            <FaBars size={25} className="text-[#176B87]" />
          </div>

          <div className="flex place-items-center lg:w-fit h-[58px] bg-[rgb(255,255,255)] ">
            <SearchInput />
            <>
              {
                userName && 
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
                        ? "absolute w-[8.57px] h-[8.57px] bg-[#16E704] rounded-full top-9 right-[0px]"
                        : "absolute w-[8.57px] h-[8.57px] bg-red-600 rounded-full top-9 right-[0px]"
                    }
                  ></span>
                </div>
              }
            </>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopNavBar;
