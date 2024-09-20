import React from "react";
import { CiSearch } from "react-icons/ci";
import { LiaSlidersHSolid } from "react-icons/lia";

const SearchInput = () => {
  return (
    <form
      className="w-[100%] h-[58px] bg-[#FFFFFF] flex flex-col place-items-center border-solid border-2 border-[#ECEEF6] rounded-md p-[15px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className=" w-[100%] h-[100%]  flex justify-between place-items-center pr-[25px]">
        <div className="flex h-full place-items-center w-full gap-6 pl-[25px]">
          <CiSearch size={28} className="text-[#D4D4D4]" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full outline-none bg-[#FFFFFF]"
          />
        </div>
        <LiaSlidersHSolid size={28} className="text-[#A3A3A3]" />
      </div>
    </form>
  );
};

export default SearchInput;
