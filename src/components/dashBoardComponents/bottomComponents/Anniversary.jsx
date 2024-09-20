import { Context } from "../../../contexts/DashBoardContext";
import { Box3Data1 } from "./CelebrationArray";

import React from "react";

const Anniversary = () => {
  const { open } = Context();
  return (
    <>
      {Box3Data1.map(({ img, department, name, date }, index) => {
        return (
          <div
            key={index}
            className={
              open
                ? " w-[100%] h-[50.1px] flex justify-between place-items-center pl-[15px] pr-[15px]"
                : " w-[100%] h-[55.17px] flex justify-between place-items-center pl-[15px] pr-[15px]"
            }
          >
            {/* picture and name div */}

            <div
              className={
                open
                  ? " w-[175.1px] h-[50.1px] place-items-center flex gap-[15px]"
                  : " w-[192.68px] place-items-center flex h-[55.17px] gap-[16.52px]"
              }
            >
              <img
                src={img}
                alt=""
                className={
                  open
                    ? "w-[50.1px] h-[50.1px] rounded-full object-cover"
                    : "w-[55.17px] h-[55.17px] rounded-full object-cover"
                }
              />
              {/* name container */}

              <div
                className={
                  open
                    ? " w-[110px] h-[39px] flex flex-col"
                    : " w-[121px] h-[43px] flex flex-col"
                }
              >
                <span
                  className={
                    open
                      ? " font-[500] text-nowrap text-[14px] leading-[21px]"
                      : " font-[500] text-nowrap text-[15.41px] leading-[23.12px]"
                  }
                >
                  {name}
                </span>
                <small
                  className={
                    open
                      ? " font-[400] text-[#A9A9A9] text-[12px] leading-[18px]"
                      : " font-[400] text-[#A9A9A9] text-[13.21px] leading-[19.82px]"
                  }
                >
                  {department}
                </small>
              </div>
            </div>

            <div
              className={
                open
                  ? " font-[400] text-[14px] leading-[21px]"
                  : " font-[400] text-[15.41px] leading-[23.12px]"
              }
            >
              {date}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Anniversary;
