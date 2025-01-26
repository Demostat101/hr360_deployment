import EmpTable from "../components/EmployeeComponents/EmpTable";
import { FaPlus } from "react-icons/fa";
import { Context } from "../contexts/DashBoardContext";
import { NavLink } from "react-router-dom";

const Employee = () => {
  const {
    isLoading,
    fetchError,
    data,
    searchName,
    setSearchName,
    searchEmpID,
    setSearchEmpID,
    setSearchEmpRegion,
  } = Context();

  return (
    <div className="w-full p-[25px]">
      <div className="w-full">
        {/* Top Bar */}
        <div
          className="w-full  mb-[25px]"
        >
          {/* employ over view and add employ */}
          <header
            className="w-full gap-5 flex-wrap flex justify-between place-items-center "
          >
            <span
              className=" h-[54px] font-[600] text-[26px] leading-[39px] "
            >
              Employee Overview
            </span>
            <NavLink to='/layout/add-employee'
              className=" px-6 py-4 flex gap-[10px] rounded-lg justify-center place-items-center bg-[#176B87] text-white font-[500] text-[14px] leading-[21px]"
            >
              <FaPlus size={20} /> Add Employee
            </NavLink>
          </header>

          {/* Searched By page */}
          <div className=" w-[5rem] md:max-w-[24rem] md:w-full  mt-5 text-[#969696]">
  <span className="font-[400] text-[14px] leading-[21px]">
    Search by:
  </span>

  <div className=" w-full max-w-[4rem] md:max-w-[24rem] grid gap-5 md:grid-cols-3 mt-5">
  
      <input
        className=" h-[45px] px-3 text-left focus:outline-none bg-white rounded-lg font-[400] text-[18px] placeholder:text-gray-400"
        type="text"
        placeholder="Name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
    
    
      <input
        className=" h-[45px]  px-3 text-left focus:outline-none bg-white rounded-lg font-[400] text-[18px] placeholder:text-gray-400"
        type="text"
        placeholder="Emp.ID"
        value={searchEmpID}
        onChange={(e) => setSearchEmpID(e.target.value)}
      />
  
   
      <select
        name=""
        id=""
        className="outline-none bg-white h-[45px] px-3 rounded-lg text-left font-[400] text-[18px]"
        onChange={(e) => setSearchEmpRegion(e.target.value)}
      >
        <option value="" className="bg-white">
          Region
        </option>
        <option value="Abuja" className="bg-white">
          Abuja
        </option>
        <option value="Lagos" className="bg-white">
          Lagos
        </option>
      </select>
  
  </div>
  
</div>

        </div>

        {/* Table Bar */}
        <div className= "w-full" >
          {(isLoading || (!isLoading && fetchError)) && (
            <div className="w-full h-full">
              {isLoading && (
                <div className="w-full h-96 flex flex-col justify-center place-items-center">
                  <div className="loading"></div>
                </div>
              )}

              {!isLoading && fetchError && (
                <div className="w-full h-32 flex flex-col justify-center place-items-center text-center">
                  <div className="text-red-600">{fetchError}</div>
                </div>
              )}
            </div>
          )}

          {!isLoading && !fetchError && data.length ? <EmpTable /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Employee;
