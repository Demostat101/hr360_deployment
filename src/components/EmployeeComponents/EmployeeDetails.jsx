import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { BsDiagram3 } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { TbCalendarTime } from "react-icons/tb";
import { Context } from "../../contexts/DashBoardContext";


const EmployeeDetails = () => {
  const { pathname } = useLocation();

  const { isLoading,data } = Context();
  const { id } = useParams();
  const employeeFilter = data.filter(
    (employee) => employee._id.toString() === id
  );

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <main className="w-full p-[25px]">
<section className="w-full h-full flex flex-col gap-[45px]">
  <div className="w-full pb-20 pt-2 md:py-10 rounded-xl flex flex-col justify-center bg-white pl-[20px] shadow-lg">
    {isLoading && (
      <div className="w-full h-full flex justify-center place-items-center">
        <div className="loading"></div>
      </div>
    )}

    {!isLoading && data.length && (
      <>
        {employeeFilter.map((employee) => {
          return (
            <div key={employee._id} className="max-w-[589.17px]  md:flex gap-[10.97px] md:place-items-center">
              <div className="w-[180.85px] h-[180.85px] rounded-lg text-center bg-[#F6F7FA] text-[#a3c3ce]">
                <span className="text-[100px]">{employee.firstName.slice(0, 1)}</span>
                <span className="text-[100px]">{employee.lastName.slice(0, 1)}</span>
              </div>

              <div className="w-fit h-[150.38px]">
                <div className="w-fit h-[70.95px] p-[5.49px] flex flex-col gap-[10.97px]">
                  <h3 className="font-[600] text-sm md:text-[17.56px] leading-[26.33px] text-nowrap flex gap-[8px]">
                    <span>{employee.firstName}</span>
                    <span>{employee.lastName}</span>
                  </h3>
                  <small className="font-[400] text-[15.36px] leading-[23.04px] text-black opacity-60 text-nowrap">
                    {employee.officialDetails.jobTitle}
                  </small>
                </div>

                <div className="w-full h-[79px] p-[5.49px]  md:flex gap-[2rem] md:gap-[52.67px]">
                  <div className="w-[132.17px] md:h-[68.46px] flex flex-col gap-[16.46px]">
                    <div className="w-fit h-[26px] flex gap-[6.58px] place-items-center">
                      <BsDiagram3 size={23} className="text-[#176B87]" />
                      <span className="font-[500] text-sm md:text-[17.56px] leading-[26.33px] text-black opacity-70 text-nowrap">
                        {employee.officialDetails.department}
                      </span>
                    </div>
                    <div className="w-fit h-[26px] flex gap-[6.58px] place-items-center">
                      <TbCalendarTime size={23} className="text-[#176B87]" />
                      <span className="font-[500] text-sm md:text-[17.56px]leading-[26.33px] text-black opacity-70 text-nowrap">
                        <span>
                          {months[
                            Number(employee.officialDetails.startingDate.slice(5, 7)) - 1
                          ]}
                        </span>
                        <span>
                          {" "}
                          {employee.officialDetails.startingDate.slice(8, 10)}
                          <sup>
                            {Number(
                              employee.officialDetails.startingDate.slice(8, 10)
                            ) === 1 ||
                            Number(
                              employee.officialDetails.startingDate.slice(8, 10)
                            ) === 21 ||
                            Number(
                              employee.officialDetails.startingDate.slice(8, 10)
                            ) === 31
                              ? "st"
                              : Number(
                                  employee.officialDetails.startingDate.slice(8, 10)
                                ) === 2 ||
                                Number(
                                  employee.officialDetails.startingDate.slice(8, 10)
                                ) === 22
                              ? "nd"
                              : Number(
                                  employee.officialDetails.startingDate.slice(8, 10)
                                ) === 3 ||
                                Number(
                                  employee.officialDetails.startingDate.slice(8, 10)
                                ) === 23
                              ? "rd"
                              : "th"}
                          </sup>
                          ,
                        </span>
                        <span className="ml-1">
                          {employee.officialDetails.startingDate.slice(0, 4)}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="md:w-[190.17px] text-wrap mt-2 flex flex-col gap-[16.46px]">
                    <div className="w-fit h-[26px]  gap-[6.58px] place-items-center hidden sm:flex">
                      <MdEmail size={23} className="text-[#176B87] md:overflow-visible" />
                      <span className="font-[500] text-sm md:text-[17.56px] leading-[26.33px] text-black opacity-70 text-wrap">
                        {employee.officialDetails.email}
                      </span>
                    </div>
                    <div className="w-fit h-[26px] flex gap-[6.58px] place-items-center">
                      <FaPhone size={23} className="text-[#176B87]" />
                      <span className="font-[500] text-sm md:text-[17.56px] leading-[26.33px] text-black opacity-70 flex gap-2 ">
                        <span>{employee.officialDetails.phoneNo.code}</span>
                        <span>{employee.officialDetails.phoneNo.phone}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    )}
  </div>

  <div className="w-full h-full flex flex-col gap-[10px]">
    <div className=" overflow-x-auto max-w-full hide-scrollbar">
    <div className="border-2 min-w-[50rem] ">
      {employeeFilter.map((val) => {
        return (
          <nav
            key={val._id}
            className="w-full h-[74.32px] rounded-[10px] shadow-md bg-white flex place-items-center px-[20px] border-[1.75px] border-[#ECEEF6]"
          >
            <div className="w-full h-full flex gap-[10px]">
              <button>
                <NavLink
                  className={
                    pathname === `/layout/employee/${id}`
                      ? "py-[9px] px-[40px] font-[400] text-[14px] leading-[21px] text-black opacity-70 bg-[#E1EDFD] rounded-[10px] border-[1px] border-[#a5b5bb]"
                      : "py-[9px] px-[40px] font-[400] text-[14px] leading-[21px] text-black bg-white opacity-70 border-[1px] border-[#a5b5bb] rounded-[10px]"
                  }
                >
                  Employee Details
                </NavLink>
              </button>
              <button>
                <NavLink
                  className={
                    pathname === `/layout/employee/${id}/employee-payslip`
                      ? "py-[9px] px-[40px] font-[400] text-[14px] leading-[21px] text-black opacity-70 bg-[#E1EDFD] rounded-[10px] border-[1px] border-[#a5b5bb]"
                      : "py-[9px] px-[40px] font-[400] text-[14px] leading-[21px] text-black opacity-70 border-[1px] border-[#a5b5bb] rounded-[10px] bg-white"
                  }
                  to={`/layout/employee/${id}/employee-payslip`}
                >
                  Payslip
                </NavLink>
              </button>
              <button>
                <NavLink
                  className={
                    pathname === `/layout/employee/${id}/employee-leave-history`
                      ? "py-[9px] px-[40px] font-[400] text-[14px] leading-[21px] text-black opacity-70 bg-[#E1EDFD] rounded-[10px] border-[1px] border-[#a5b5bb]"
                      : "py-[9px] px-[40px] font-[400] text-[14px] leading-[21px] text-black opacity-70 border-[1px] border-[#a5b5bb] rounded-[10px] bg-white"
                  }
                  to={`/layout/employee/${id}/employee-leave-history`}
                >
                  Leave History
                </NavLink>
              </button>
            </div>
            <div className="py-[9px] px-[40px] bg-[#E0ECFC] rounded-[10px] border-[1px] border-[#176B87] font-[400] text-[14px] leading-[21px] text-[#176B87] text-nowrap">
              {val.active ? "Active" : "On Leave"}
            </div>
          </nav>
        );
      })}
    </div>
    </div>
    <Outlet />
  </div>
</section>

    </main>
  );
};

export default EmployeeDetails;
