import EmployeeTurnOverGraph from "./EmployeeTurnOverGraph";
import { graphLegend } from "./EmployeeTurnOverGraph";

const EmployeeTurnOver = () => {
  return (
    <div className="w-[99.5%] h-[277.7px] shadow-md rounded-lg p-[15px] bg-white flex flex-col justify-between">
      <div className="w-full h-[43.15px] flex justify-between place-items-center">
        <span className="font-[600] text-[16.27px] leading-[24.41px] text-black opacity-80">
          Employee Turn Over Rate
        </span>
        <div className="bg-white h-full border-[1.16px] border-[#ECEEF6] px-[13.86px] py-[6.35px] rounded-lg cursor-pointer">
          <select
            className="bg-white focus:outline-none cursor-pointer"
            name=""
            id=""
          >
            <option value="">ALL</option>
            <option value="">Finance</option>
            <option value="">HR</option>
            <option value="">IT</option>
          </select>
        </div>
      </div>
      {/* Graph */}
      <div className="w-full px-[20px]">
        <div className="w-full h-[100px] ">
          <EmployeeTurnOverGraph />
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

export default EmployeeTurnOver;
