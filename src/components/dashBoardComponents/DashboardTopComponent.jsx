import { HiOutlineUserGroup } from "react-icons/hi";
import { EmployeeStore } from "./DashboardTopComponentStore";

const TopComponent = () => {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* container holding all cards */}
      {EmployeeStore.map(({ total, employee, update }, index) => {
        return (
          <div key={index}>
            {/* single container inside container holding all cards */}
            <div>
              {/* container inside single container */}

              <div className="w-[100%] rounded-lg relative max-h-[202.44px] pt-[40px] pb-[10px] shadow-lg bg-[#FFFFFF] pl-[16px] mt-[25.57px] flex flex-col justify-center">
                {/* top small box */}
                <div className="w-[78.85px] bg-white flex rounded-lg flex-col justify-center place-items-center absolute top-[-25px] left-5 h-[64.99px] box">
                  {/* inner box holding the image */}
                  <div
                    className={
                      total === "69,560"
                        ? "w-[69.26px] flex justify-center place-items-center shadow-lg rounded-lg h-[50.08px] bg-[#176B87]"
                        : total === "27"
                        ? "w-[76.26px] flex justify-center place-items-center shadow-lg rounded-lg h-[54.14px] bg-[#B0AB25]"
                        : total === "11"
                        ? "w-[76.26px] flex justify-center place-items-center shadow-lg rounded-lg h-[54.14px] bg-[#B1206E]"
                        : "w-[76.26px] flex justify-center place-items-center shadow-lg rounded-lg h-[54.14px] bg-black"
                    }
                  >
                    <HiOutlineUserGroup className="w-[35.19px] text-[#FFFFFF] h-[35.19px]" />
                  </div>
                </div>

                {/* text box under the image container */}
                <div className="w-[213.51px] h-[127.87px] flex flex-col justify-evenly">
                  {/* box holding employee and figure */}

                  <div className="w-[165px] h-[63px] flex flex-col gap-[5px]">
                    <span className="text-[22.02px] leading[33.03px] font-[600]">
                      {total}
                    </span>
                    <span className="text-[19.82px] leading[29.73px] font-[400] text-nowrap">
                      {employee}
                    </span>
                  </div>

                  {/* paragraph text under employee and figure */}

                  <p className="text-[13.21px] leading[19.82px] font-[400] text-nowrap text-[#969696] update-container">
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
