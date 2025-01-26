import { FaRegCalendarAlt } from "react-icons/fa";
import AnalyticsComponent from "../components/analyticsComponents/AnalyticsComponent";

const Analytics = () => {
  return (
    <div className="p-5 w-full">
      <div className="font-[600] text-[22px] leading-[33px] text-black opacity-90 mb-[25px]">
        {" "}
        Performance Analytics
      </div>
      <>
        <div className="text-[#969696] grid gap-[7px] max-w-[16rem]  md:max-w-[40rem] w-full">
          <span className=" font-[400] text-[14px] leading-[21px] text-[#969696]">
            Search By:
          </span>
          <div className=" w-[100%] grid md:grid-cols-3 gap-[15px]">
            <>
              <div className=" py-[9px] px-[10px] bg-white rounded-lg flex gap-2  justify-between font-[400] text-[16px] leading-[24px] text-[#dbcece]">
                <input
                  className=" h-[24px] focus:outline-none text-left max-w-[15rem] w-full"
                  type="text"
                  placeholder="Financial Year"
                />{" "}
                <FaRegCalendarAlt className="text-[#041419]" size={24} />
              </div>
            </>
            <>
              <div className="px-[10px] py-[9px] bg-white rounded-lg grid font-[400] text-[16px]">
                <select name="" id="" className=" outline-none bg-white">
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
            </>
            <div className="px-[10px] py-[9px] bg-white rounded-lg grid  font-[400] text-[16px]">
              <select name="" id="" className=" outline-none bg-white">
                <option value="" className="bg-white">
                  Department
                </option>

                <option value="IT" className="bg-white">
                  IT
                </option>
                <option value="Marketing" className="bg-white">
                  Marketing
                </option>
              </select>
            </div>
          </div>
        </div>
      </>
      <AnalyticsComponent />
    </div>
  );
};

export default Analytics;
