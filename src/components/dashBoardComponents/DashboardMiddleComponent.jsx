import { useState } from "react";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import DashCalender from "./DashCalender";

const MiddleComponent = () => {
  const [graph, setGraph] = useState(false);

  return (
    <main className="w-full grid md:grid-cols-[3fr_1fr] xl:grid-cols-[2.1fr_1fr] gap-5">
      {/* Graph container / left side container */}
      <div className=" flex flex-col border-solid shadow-lg pt-[10px] rounded-lg bg-[#FFFFFF] gap-[15px]">
        {/* Top component inside graph with drop downs */}
       <>
       <div className=" min-w-[20rem] h-[42px] justify-between gap-5 flex place-items-center flex-nowrap employee-container">
          {/* graph top content */}
          <div className="w-[256px] w-full pl-[15px] text-nowrap h-[24px] text-[16px] leading-[24px] font-[500] overview-container">
            Employee Availability Overview
          </div>

          <div className="max-w-[288px] w-full h-[42px] flex gap-[10px]">
            {/* left drop down */}
            <div className="w-[108px] text-[#969696] rounded-lg justify-center place-items-center border-solid border-[1px] border-[#E3EFF3] h-[42px] flex flex-col gap-[10px]">
              <select className="outline-none w-full bg-white" name="" id="">
                <option value="Sale" className="bg-white">
                  Sales
                </option>
                <option value="Nosale" className="bg-white">
                  No Sales
                </option>
              </select>
            </div>

            {/* right drop down */}
            <div className="w-[170px] flex flex-col justify-center mr-[25px] rounded-lg place-items-center text-[#969696] h-[42px] gap-[10px] border-solid border-[1px] border-[#E3EFF3]">
              <select
                onChange={() => setGraph((prev) => !prev)}
                className="outline-none w-full bg-white"
                name=""
                id=""
              >
                <option value="jan-jun" className="bg-white">
                  jan-jun 2024
                </option>
                <option value="jul-dec" className="bg-white">
                  jul-dec 2024
                </option>
              </select>
            </div>
          </div>
        </div>
       </>

        {/* graph page */}
        <div className="w-full flex flex-col place-items-center mt-5">
          <div className="w-[90%] min-h-[16rem] xl:min-h-[16rem] pr-[30px] pb-[15px]">
            {graph ? <Graph2 /> : <Graph1 />}
          </div>
        </div>
      </div>

      {/* Calender container */}
      <div className=" bg-[#FFFFFF] flex justify-evenly flex-col rounded-lg shadow-lg">
        <DashCalender />
        <hr className="mt-3" />
        <div className="w-full flex flex-col h-[40.7px] justify-center place-items-center">
          <div className="w-[100%] h-[100%] justify-center gap-[10px] flex">
            <div className="flex w-[100px] h-[100%] justify-center place-items-center gap-[5px]">
              <span className="w-[10px] h-[10px] rounded-full bg-red-500"></span>{" "}
              <span>holiday</span>
            </div>
            <div className="flex w-[100px] h-[100%] justify-center place-items-center gap-[5px]">
              <span className="w-[10px] h-[10px] rounded-full bg-yellow-500"></span>{" "}
              <span>meetings</span>
            </div>
            <div className="flex w-[100px] h-[100%] justify-center place-items-center gap-[5px]">
              <span className="w-[10px] h-[10px] rounded-full bg-blue-500"></span>{" "}
              <span>events</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MiddleComponent;
