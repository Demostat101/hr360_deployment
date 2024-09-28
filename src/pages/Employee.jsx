import EmpTable from "../components/EmployeeComponents/EmpTable";
import { FaPlus } from "react-icons/fa";
import { Context } from "../contexts/DashBoardContext";

const Employee = () => {
  const {
    isLoading,
    fetchError,
    data,
    open,
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
          className={
            open
              ? "w-full h-[129px] mb-[25px]"
              : "w-full h-[127.67px] mb-[25px]"
          }
        >
          {/* employ over view and add employ */}
          <header
            className={
              open
                ? "w-full h-[54px] flex justify-between place-items-center "
                : "w-full h-[59.7px] flex justify-between place-items-center"
            }
          >
            <span
              className={
                open
                  ? " h-[54px] font-[600] text-[26px] leading-[39px] "
                  : " font-[600] text-[26px] leading-[39px]"
              }
            >
              Employee Overview
            </span>
            <button
              className={
                open
                  ? " w-[194px] h-[54px] flex gap-[10px] rounded-lg justify-center place-items-center bg-[#176B87] text-white font-[500] text-[14px] leading-[21px]"
                  : "w-[194px] h-[59.7px] flex gap-[11.05px] rounded-lg justify-center place-items-center bg-[#176B87] text-white font-[500] text-[15.48px] leading-[23.22px]"
              }
            >
              <FaPlus size={20} /> Add Employee
            </button>
          </header>

          {/* Searched By page */}
          <div
            className={
              open
                ? " w-[444px] h-[71px] text-[#969696] grid gap-[5px]"
                : "w-[429.48px] h-[68.25px] text-[#969696] grid gap-[4.48px]"
            }
          >
            <span
              className={
                open
                  ? " font-[400] text-[14px] leading-[21px]"
                  : "font-[400] text-[13.54px] leading-[20.31px]"
              }
            >
              Search by:
            </span>
            <div
              className={
                open
                  ? " w-[100%] h-[45px] flex gap-[16px]"
                  : "w-[100%] h-[43.41px] flex gap-[15.48px]"
              }
            >
              <div>
                <input
                  className={
                    open
                      ? " w-[126px] h-[45px] grid justify-center text-center focus:outline-none place-items-center bg-white rounded-lg font-[400] text-[18px]"
                      : "w-[121.88px] h-[43.41px] grid justify-center text-center focus:outline-none place-items-center bg-white rounded-lg font-[400] text-[17.41px]"
                  }
                  type="text"
                  placeholder="Name"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className={
                    open
                      ? "w-[144px] h-[45px] grid justify-center place-items-center text-center focus:outline-none bg-white rounded-lg font-[400] text-[18px]"
                      : "w-[139.29px] h-[43.41px] grid justify-center place-items-center text-center focus:outline-none bg-white rounded-lg font-[400] text-[17.41px] "
                  }
                  type="text"
                  placeholder="Emp.ID"
                  value={searchEmpID}
                  onChange={(e) => setSearchEmpID(e.target.value)}
                />
              </div>
              <div
                className={
                  open
                    ? "w-[142px] h-[45px] bg-white pl-[20px] pr-[20px] rounded-lg grid place-items-center font-[400] text-[18px]"
                    : "w-[137.36px] h-[43.41px] bg-white pl-[20px] pr-[20px] rounded-lg grid place-items-center font-[400] text-[17.41px]"
                }
              >
                <select
                  name=""
                  id=""
                  className=" outline-none bg-white"
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
        </div>

        {/* Table Bar */}
        <div className={open ? "w-full h-[635.29px]" : "w-full h-[700px]"}>
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
