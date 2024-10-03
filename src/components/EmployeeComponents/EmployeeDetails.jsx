import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import Image from "../../assets/ajayiImage.jfif";
import { BsDiagram3 } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { TbCalendarTime } from "react-icons/tb";
import { Context } from "../../contexts/DashBoardContext";
import { useAxiosFetch } from "../../hooks/UseAxiosFetch";

const EmployeeDetails = () => {
  const { pathname } = useLocation();

  const { open, isLoading } = Context();
  const { data } = useAxiosFetch(
    `https://hr360employeescrudbackend.onrender.com/employees`
  );
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
        <div
          className={
            open
              ? "w-full h-[208.08px] rounded-xl flex flex-col justify-center bg-white pl-[20px] shadow-md border-[1.75px] border-[#ECEEF6]"
              : "w-full h-[245.01px] rounded-xl flex flex-col justify-center bg-white pl-[20px] shadow-md border-[1.75px] border-[#ECEEF6]"
          }
        >
          {isLoading && (
            <div className="w-full h-full flex justify-center place-items-center">
              <div className="loading "></div>
            </div>
          )}

          {!isLoading && (
            <>
              {employeeFilter.map((employee) => {
                return (
                  <div
                    key={employee._id}
                    className={
                      open
                        ? "w-[536.94px] h-[164.37px] flex gap-[10px] place-items-center "
                        : "w-[589.17px] h-[180.35px] flex gap-[10.97px] place-items-center"
                    }
                  >
                    {/* <div className={
                    open
                      ? "w-[164.37px] h-[164.37px] border-2 text-[40px]"
                      : "w-[180.85px] h-[180.85px] border-2 text-[45px]"
                  }>
                    <span>{employee.firstName.slice(0,1)}</span>
                    <span>{employee.lastName.slice(0,1)}</span>

                </div> */}
                    <img
                      src={Image}
                      alt=""
                      className={
                        open
                          ? "w-[164.37px] h-[164.37px] object-cover"
                          : "w-[180.85px] h-[180.85px] object-cover"
                      }
                    />
                    <div
                      className={
                        open ? "w-fit h-[138px] " : "w-fit h-[150.38px]"
                      }
                    >
                      <div
                        className={
                          open
                            ? "w-fit h-[65px] p-[5px] flex flex-col gap-[10px]"
                            : "w-fit h-[70.95px] p-[5.49px] flex flex-col gap-[10.97px]"
                        }
                      >
                        <h3
                          className={
                            open
                              ? "font-[600] text-[16px] leading-[24px] text-nowrap flex gap-[8px]"
                              : "font-[600] text-[17.56px] leading-[26.33px] text-nowrap flex gap-[8px"
                          }
                        >
                          <span>{employee.firstName}</span>
                          <span>{employee.lastName}</span>
                        </h3>
                        <small
                          className={
                            open
                              ? "font-[400] text-[14px] leading-[21px] text-black opacity-60 text-nowrap"
                              : "font-[400] text-[15.36px] leading-[23.04px] text-black opacity-60 text-nowrap"
                          }
                        >
                          {employee.officialDetails.jobTitle}
                        </small>
                      </div>

                      <div
                        className={
                          open
                            ? "w-full h-[73px] p-[5px] flex gap-[48px]"
                            : "w-full h-[79px] p-[5.49px] flex gap-[52.67px]"
                        }
                      >
                        <div
                          className={
                            open
                              ? "w-[120.31px] h-[63px] flex flex-col gap-[15px]"
                              : "w-[132.17px] h-[68.46px] flex flex-col gap-[16.46px]"
                          }
                        >
                          <div
                            className={
                              open
                                ? "w-fit h-[24px] flex gap-[6px] place-items-center"
                                : "w-fit h-[26px] flex gap-[6.58px] place-items-center"
                            }
                          >
                            {" "}
                            <BsDiagram3
                              size={23}
                              className="text-[#176B87]"
                            />{" "}
                            <span
                              className={
                                open
                                  ? "font-[500] text-[16px] leading-[24px] text-black opacity-70 text-nowrap"
                                  : "font-[500] text-[17.56px] leading-[26.33px] text-black opacity-70 text-nowrap"
                              }
                            >
                              {employee.officialDetails.department}
                            </span>{" "}
                          </div>
                          <div
                            className={
                              open
                                ? "w-fit h-[24px] flex gap-[6px] place-items-center"
                                : "w-fit h-[26px] flex gap-[6.58px] place-items-center"
                            }
                          >
                            {" "}
                            <TbCalendarTime
                              size={23}
                              className="text-[#176B87]"
                            />{" "}
                            <span
                              className={
                                open
                                  ? "font-[500] text-[16px] leading-[24px] text-black opacity-70 text-nowrap"
                                  : "font-[500] text-[17.56px] leading-[26.33px] text-black opacity-70 text-nowrap"
                              }
                            >
                              <span>
                                {
                                  months[
                                    Number(
                                      employee.officialDetails.startingDate.slice(
                                        6,
                                        7
                                      ) - 1
                                    )
                                  ]
                                }
                              </span>
                              <span>
                                {" "}
                                {employee.officialDetails.startingDate.slice(
                                  8,
                                  10
                                )}
                                <sup>
                                  {Number(
                                    employee.officialDetails.startingDate.slice(
                                      8,
                                      10
                                    )
                                  ) === 1 ||
                                  Number(
                                    employee.officialDetails.startingDate.slice(
                                      8,
                                      10
                                    )
                                  ) === 21 ||
                                  Number(
                                    employee.officialDetails.startingDate.slice(
                                      8,
                                      10
                                    )
                                  ) === 31
                                    ? "st"
                                    : Number(
                                        employee.officialDetails.startingDate.slice(
                                          8,
                                          10
                                        )
                                      ) === 2 ||
                                      Number(
                                        employee.officialDetails.startingDate.slice(
                                          9,
                                          10
                                        )
                                      ) === 22
                                    ? "nd"
                                    : Number(
                                        employee.officialDetails.startingDate.slice(
                                          8,
                                          10
                                        )
                                      ) === 3 ||
                                      Number(
                                        employee.officialDetails.startingDate.slice(
                                          8,
                                          10
                                        )
                                      ) === 23
                                    ? "rd"
                                    : "th"}
                                </sup>
                                ,
                              </span>
                              <span className="ml-2">
                                {employee.officialDetails.startingDate.slice(
                                  0,
                                  4
                                )}
                              </span>
                            </span>{" "}
                          </div>
                        </div>

                        <div
                          className={
                            open
                              ? "w-[173.31px] h-[63px] flex flex-col gap-[15px]"
                              : "w-[190.17px] h-[68.46px] flex flex-col gap-[16.46px]"
                          }
                        >
                          <div
                            className={
                              open
                                ? "w-fit h-[24px] flex gap-[6px] place-items-center"
                                : "w-fit h-[26px] flex gap-[6.58px] place-items-center"
                            }
                          >
                            {" "}
                            <MdEmail
                              size={23}
                              className="text-[#176B87] overflow-visible"
                            />{" "}
                            <span
                              className={
                                open
                                  ? "font-[500] text-[16px] leading-[24px] text-black opacity-70"
                                  : "font-[500] text-[17.56px] leading-[26.33px] text-black opacity-70"
                              }
                            >
                              {employee.officialDetails.email}
                            </span>{" "}
                          </div>
                          <div
                            className={
                              open
                                ? "w-fit h-[24px] flex gap-[6px] place-items-center"
                                : "w-fit h-[26px] flex gap-[6.58px] place-items-center"
                            }
                          >
                            {" "}
                            <FaPhone
                              size={23}
                              className="text-[#176B87]"
                            />{" "}
                            <span
                              className={
                                open
                                  ? "font-[500] text-[16px] leading-[24px] text-black opacity-70 flex gap-2"
                                  : "font-[500] text-[17.56px] leading-[26.33px] text-black opacity-70 flex gap-2"
                              }
                            >
                              <span>
                                {employee.officialDetails.phoneNo.code}
                              </span>
                              <span>
                                {employee.officialDetails.phoneNo.phone}
                              </span>
                            </span>{" "}
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

        <div
          className={
            open
              ? "w-full h-full flex flex-col gap-[10px]"
              : "w-full h-full flex flex-col gap-[10px]"
          }
        >
          <div>
            {employeeFilter.map((val) => {
              return (
                <nav
                  key={val._id}
                  className={
                    open
                      ? "w-full h-[67.61px] rounded-[10px] border-[1.75px] border-[#ECEEF6] shadow-md bg-white flex place-items-center px-[20px]"
                      : "w-full h-[74.32px] rounded-[10px] shadow-md bg-white flex place-items-center px-[20px] border-[1.75px] border-[#ECEEF6]"
                  }
                >
                  <div className="w-full h-full flex gap-[10px]">
                    <button>
                      <NavLink
                        className={
                          (open && pathname === `/layout/employee/${id}`) ||
                          (!open && pathname === `/layout/employee/${id}`)
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
                          (open &&
                            pathname ===
                              `/layout/employee/${id}/employee-payslip`) ||
                          (!open &&
                            pathname ===
                              `/layout/employee/${id}/employee-payslip`)
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
                          (open &&
                            pathname ===
                              `/layout/employee/${id}/employee-leave-history`) ||
                          (!open &&
                            pathname ===
                              `/layout/employee/${id}/employee-leave-history`)
                            ? "py-[9px] px-[40px] font-[400] text-[14px] leading-[21px] text-black opacity-70 bg-[#E1EDFD] rounded-[10px] border-[1px] border-[#a5b5bb]"
                            : "py-[9px] px-[40px] font-[400] text-[14px] leading-[21px] text-black opacity-70 border-[1px] border-[#a5b5bb] rounded-[10px] bg-white"
                        }
                        to={`/layout/employee/${id}/employee-leave-history`}
                      >
                        Leave History
                      </NavLink>
                    </button>
                  </div>
                  <div
                    className={
                      open
                        ? "py-[9px] px-[40px] bg-[#E0ECFC] rounded-[10px] border-[1px] border-[#176B87] font-[400] text-[14px] leading-[21px] text-[#176B87] text-nowrap"
                        : "py-[9px] px-[40px] bg-[#E0ECFC] rounded-[10px] border-[1px] border-[#176B87] font-[400] text-[14px] leading-[21px] text-[#176B87] text-nowrap"
                    }
                  >
                    {val.active ? "Active" : "On Leave"}
                  </div>
                </nav>
              );
            })}
          </div>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default EmployeeDetails;
