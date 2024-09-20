import { HiOutlineUserGroup } from "react-icons/hi";
import { EmployeeStore } from "./DashboardTopComponentStore";
import { Context } from "../../contexts/DashBoardContext";

const TopComponent = () => {
  const { open } = Context();
  return (
    <div
      className={
        open
          ? "w-full flex gap-[27px] top-box-wrap"
          : "w-full flex gap-[27px] top-box-wrap"
      }
    >
      {/* container holding all cards */}
      {EmployeeStore.map(({ total, employee, update }, index) => {
        return (
          <div key={index} className=" flex-1 ">
            {/* single container inside container holding all cards */}
            <div
              className={
                open
                  ? "max-w-[100%] max-h-[228.01px]"
                  : "max-w-[100%] max-h-[251.06px] "
              }
            >
              {/* container inside single container */}

              <div
                className={
                  open
                    ? "w-[100%] rounded-lg relative max-h-[202.44px] pt-[40px] pb-[10px] shadow-lg bg-[#FFFFFF] pl-[16px] mt-[25.57px] flex flex-col justify-center"
                    : " w-[100%] rounded-lg bg-[#FFFFFF] shadow-lg pt-[40px] pb-[10px] relative max-h-[222.9px] flex flex-col justify-center mt-[28.16px] pl-[16px]"
                }
              >
                {/* top small box */}
                <div
                  className={
                    open
                      ? "w-[78.85px] bg-white flex rounded-lg flex-col justify-center place-items-center absolute top-[-25px] left-5 h-[64.99px] box"
                      : "w-[86.81px] flex flex-col justify-center place-items-center rounded-lg bg-white absolute top-[-25px] left-5 h-[71.56px] box"
                  }
                >
                  {/* inner box holding the image */}
                  <div
                    className={
                      (open && total === "69,560") ||
                      (!open && total === "69,560")
                        ? "w-[69.26px] flex justify-center place-items-center shadow-lg  rounded-lg h-[50.08px] bg-[#176B87]"
                        : (open && total === "27") || (!open && total === "27")
                        ? "w-[76.26px] flex justify-center place-items-center shadow-lg  rounded-lg h-[54.14px] bg-[#B0AB25]"
                        : (open && total === "11") || (!open && total === "11")
                        ? "w-[76.26px] flex justify-center place-items-center shadow-lg  rounded-lg h-[54.14px] bg-[#B1206E]"
                        : "w-[76.26px] flex justify-center place-items-center shadow-lg  rounded-lg h-[54.14px] bg-black"
                    }
                  >
                    <HiOutlineUserGroup
                      className={
                        open
                          ? "w-[23.3px] h-[21.31px]  text-[#FFFFFF]"
                          : "w-[35.19px] text-[#FFFFFF] h-[35.19px]"
                      }
                    />
                  </div>
                </div>

                {/* text box under the image container */}
                <div
                  className={
                    open
                      ? "w-[193.92px] h-[116.14px] flex flex-col justify-evenly"
                      : "w-[213.51px] h-[127.87px] flex flex-col justify-evenly"
                  }
                >
                  {/* box holding employee and figure */}

                  <div
                    className={
                      open
                        ? "w-[150px] flex flex-col gap-[5px] h-[57px]"
                        : "w-[165px] h-[63px] flex flex-col gap-[5px]"
                    }
                  >
                    <span
                      className={
                        open
                          ? "text-[20px] leading[30px] font-[600] "
                          : "text-[22.02px] leading[33.03px] font-[600]"
                      }
                    >
                      {total}
                    </span>
                    <span
                      className={
                        open
                          ? "text-[18px] text-nowrap leading[27px] font-[400]"
                          : "text-[19.82px] leading[29.73px] font-[400] text-nowrap"
                      }
                    >
                      {employee}
                    </span>
                  </div>

                  {/* paragraph text under employee and figure */}

                  <p
                    className={
                      open
                        ? "text-[12px] leading[18px] font-[400] text-nowrap text-[#969696] update-container"
                        : "text-[13.21px] leading[19.82px] font-[400] text-nowrap text-[#969696] update-container"
                    }
                  >
                    {update}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopComponent;
