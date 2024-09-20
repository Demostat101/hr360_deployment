import { useState } from "react";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import DashCalender from "./DashCalender";
import { Context } from "../../contexts/DashBoardContext";

const MiddleComponent = () => {
  const [graph, setGraph] = useState(false);

  const { open } = Context();
  return (
    <main
      className={
        open
          ? "w-[100%] h-[290.71px] open-grid"
          : "w-[100%] h-[325.59px] close-grid"
      }
    >
      {/* Graph container / left side container */}
      <div
        className={
          open
            ? "w-[100%] flex flex-col border-solid shadow-lg pt-[10px] rounded-lg bg-[#FFFFFF] gap-[15px] h-[295px]"
            : "w-[100%] shadow-lg rounded-lg  bg-[#FFFFFF] gap-[17px] pt-[10px] flex flex-col h-[324.81px]"
        }
      >
        {/* Top component inside graph with drop downs */}
        <div
          className={
            open
              ? "w-[100%] h-[42px] justify-between flex place-items-center employee-container"
              : "w-[100%] h-[45.82px] justify-between flex place-items-center employee-container"
          }
        >
          {/* graph top content */}
          <div
            className={
              open
                ? "w-[256px] pl-[15px] text-nowrap h-[24px] text-[16px] leading-[24px] font-[500] overview-container"
                : "w-[282px] h-[26px] text-nowrap text-[17.62px] leading-[26.43px] pl-[15px] font-[500] overview-container"
            }
          >
            Employee Availability Overview
          </div>

          <div
            className={
              open
                ? "w-[288px] h-[42px] flex gap-[10px]"
                : "w-[317.11px] h-[45.82px] flex gap-[11.01px]"
            }
          >
            {/* left drop down */}
            <div
              className={
                open
                  ? "w-[108px] text-[#969696] rounded-lg  justify-center place-items-center border-solid border-[1px] border-[#E3EFF3] h-[42px] flex flex-col gap-[10px]"
                  : "w-[118.91px] h-[45.82px] justify-center rounded-lg place-items-center border-solid border-[1px] border-[#E3EFF3]  text-[#969696] flex flex-col gap-[11.01px]"
              }
            >
              {/* left drop down select */}

              <select className=" outline-none w-full bg-white" name="" id="">
                <option value="Sale" className="bg-white">
                  Sales
                </option>
                <option value="Nosale" className="bg-white">
                  No Sales
                </option>
              </select>
            </div>

            {/* right drop down */}

            <div
              className={
                open
                  ? "w-[170px] flex flex-col justify-center mr-[25px] rounded-lg place-items-center text-[#969696] h-[42px] gap-[10px] border-solid border-[1px] border-[#E3EFF3]"
                  : "w-[187.18px] h-[45.82px] gap-[11.01px] border-solid rounded-lg mr-[25px] flex flex-col justify-center place-items-center border-[1.1px] border-[#E3EFF3] text-[#969696]"
              }
            >
              {/* right drop down select */}

              <select
                onChange={() => setGraph((prev) => !prev)}
                className=" outline-none w-full bg-white"
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

        {/* graph page */}

        <div
          className={
            open
              ? "w-full flex flex-col place-items-center"
              : "w-full flex flex-col place-items-center"
          }
        >
          <div
            className={
              open
                ? "w-[90%] h-[230px] pr-[30px] pb-[15px]"
                : "w-[90%] h-[250px] pr-[30px] pb-[15px] "
            }
          >
            {graph ? <Graph2 /> : <Graph1 />}
          </div>
        </div>
      </div>

      {/* Calender container */}

      <div
        className={
          open
            ? "w-[100%] bg-[#FFFFFF] flex justify-evenly flex-col rounded-lg shadow-lg h-[295.71px]"
            : "w-[100%] flex justify-evenly flex-col bg-[#FFFFFF] h-[325.59px] rounded-lg shadow-lg"
        }
      >
        <DashCalender />
        <hr className="mt-3" />
        <div
          className={
            open
              ? "w-full flex flex-col h-[40.7px] justify-center place-items-center"
              : "w-full flex flex-col h-[40.7px] justify-center place-items-center"
          }
        >
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
