import HiredVsLeftGraph from "./HiredVsLeftGraph";
import { graphLegend } from "./HiredVsLeftGraph";

const HiredVsLeft = () => {
  return (
    <div className="w-[100%] h-[285.72px] flex flex-col shadow-md rounded-lg justify-between p-[15px] bg-white">
      <div className="w-full h-[43.15px] flex justify-between place-items-center ">
        <span className="font-[600] text-[16.27px] leading-[24.41px] text-black opacity-80">
          Hired Vs Left
        </span>
        <div className="bg-white h-full border-[1.16px] border-[#ECEEF6] px-[13.86px] py-[6.35px] rounded-lg cursor-pointer">
          <select
            className="bg-white focus:outline-none cursor-pointer"
            name=""
            id=""
          >
            <option value="">Jun 2021 - May 2022</option>
            <option value="">Finance</option>
            <option value="">HR</option>
            <option value="">IT</option>
          </select>
        </div>
      </div>
      {/* Graph */}
      <div className="w-full px-[20px]">
        <div className="w-full h-[200px] ">
          <HiredVsLeftGraph />
        </div>
        <div className="flex justify-center gap-[12.71px] w-full">
          {graphLegend.map(({ title, color }, index) => {
            return (
              <div className="flex place-items-center gap-[10px]" key={index}>
                <div
                  style={{
                    width: "11.55px",
                    height: "11.55px",
                    backgroundColor: color,
                    borderRadius: "50%",
                  }}
                ></div>
                <div className="font-[500] text-[13.86px] leading-[20.8px]">
                  {title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HiredVsLeft;
