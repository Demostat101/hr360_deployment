import { Context } from "../../../contexts/DashBoardContext";
import Anniversary from "./Anniversary";
import Birthday from "./Birthday";
import useLocalStorage from "use-local-storage";

const Celebrations = () => {
  const [toggle, setToggle] = useLocalStorage(false);
  const { open } = Context();

  return (
    <div
      className={
        open
          ? " w-[100%] bg-white rounded-lg shadow-lg pt-[15px] h-[100%] flex flex-col gap-[15px]"
          : " w-[100%] h-[100%] bg-white shadow-lg rounded-lg  pt-[15px] flex flex-col gap-[20px]"
      }
    >
      {/* top bar */}

      <div
        className={
          open
            ? " w-[100%] h-[31px] p-[15px] flex justify-between place-items-center "
            : " w-[100%] flex justify-between p-[15px] h-[34.13px] place-items-center"
        }
      >
        {/* top bar left */}
        <div
          className={
            open
              ? "w-[95px] h-[24px] font-[500] text-[16px] leading-[24px] "
              : "w-[105px] h-[26px] font-[500] text-[17.63px] leading-[26.43px]"
          }
        >
          Celebration
        </div>

        {/* top right bar */}

        <div
          className={
            open
              ? "w-[128px] h-[31px] flex flex-col justify-center place-items-center rounded-lg border-[#E3EFF3] border-solid border-2"
              : "w-[140.94px] h-[34.13px] flex flex-col justify-center place-items-center rounded-lg border-[#E3EFF3] border-solid border-2"
          }
        >
          <select
            className=" outline-none bg-white text-[#969696]"
            name=""
            id=""
          >
            <option value="" className="bg-white">
              This week
            </option>
            <option value="" className="bg-white ">
              Last week
            </option>
          </select>
        </div>
      </div>

      <div
        className={
          open
            ? "w-[100%]  h-[21px] gap-[30px] flex place-items-center justify-center"
            : "w-[100%] pt-[20px]  h-[23px] justify-center flex place-items-center"
        }
      >
        <div className="w-[200px] flex justify-center gap-[100px] relative cursor-pointer text-[#A5A5A5]">
          <div
            className={
              (open
                ? "w-[67px] h-[21px] font-[400] text-[14px] leading-[21px] "
                : "w-[74px] h-[23px] font-[400] text-[15.41px] leading-[23.12px]",
              !toggle && !open ? "birth " : !toggle && open ? "births " : "")
            }
            onClick={() => setToggle(false)}
          >
            Birthday
          </div>

          <div
            className={
              (open
                ? "w-[136px] h-[21px] font-[400] text-[14px] leading-[21px]"
                : "w-[149px] h-[23px] font-[400] text-[15.41px] leading-[23.12px]",
              toggle && open
                ? "anniversary "
                : toggle && !open
                ? "anniversarys "
                : "")
            }
            onClick={() => setToggle(true)}
          >
            Anniversary
          </div>
        </div>
      </div>
      <hr />

      {/* images and date */}

      <div
        className={
          open
            ? "flex flex-col w-full place-items-center gap-[20px]"
            : "flex flex-col w-full place-items-center gap-[20px]"
        }
      >
        {/* single image card */}

        {!toggle ? <Birthday /> : <Anniversary />}
      </div>
    </div>
  );
};

export default Celebrations;
