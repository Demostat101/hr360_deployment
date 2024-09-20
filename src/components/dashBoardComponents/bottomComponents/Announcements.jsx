import { Context } from "../../../contexts/DashBoardContext";
import { announcementArray } from "./AnnouncementsArray";

const Announcements = () => {
  const { open } = Context();
  return (
    <div
      className={
        open
          ? "w-[100%] pb-[15px] flex flex-col justify-between h-[311.1px] bg-[#FFFFFF] rounded-lg shadow-lg"
          : "w-[100%] flex flex-col justify-between rounded-lg shadow-lg h-[342.55px] bg-[#FFFFFF] pb-[15px]"
      }
    >
      {/* top container */}
      <div
        className={
          open
            ? "w-[100%] border-[1.17px]  border-[#ECEEF6] h-[55px] flex place-items-center justify-between gap-[10px] pl-[20px] pr-[20px]"
            : "w-[100%] h-[60.44px] flex place-items-center justify-between gap-[11.01px] pr-[20px] pl-[20px] border-[1.18px] border-[#ECEEF6] "
        }
      >
        <h2
          className={
            open
              ? "w-[136px] h-[24px] font-[500] text-[16px] leading-[24px]"
              : "w-[150px] h-[26px] font-[500] text-[17.62px] leading-[26.43px]"
          }
        >
          Announcement
        </h2>
        <button
          className={
            open
              ? "w-[110px] h-[31px] rounded-lg border-[#E3EFF3] border-solid border-2 text-[#969696]"
              : "w-[121.12px] h-[34.01px] rounded-lg border-solid border-[#E3EFF3] border-[2px] text-[#969696]"
          }
        >
          Create
        </button>
      </div>
      {/* Container holding all boxes */}
      <div
        className={
          open
            ? "flex flex-col justify-between w-full gap-4 pl-[15px] pr-[15px]"
            : "flex flex-col justify-between w-full gap-4 pl-[20px] pr-[20px]"
        }
      >
        {/* Each box */}

        {announcementArray.map(({ employee, dateTime, icon }, index) => {
          return (
            <div
              key={index}
              className={
                open
                  ? " w-[100%] h-[44.83px] flex place-items-center justify-between"
                  : " w-[100%] place-items-center h-[49.41px] flex justify-between "
              }
            >
              {/* inner box */}

              <div
                className={
                  open
                    ? "w-[199.65px] h-[44.83px] gap-[5.83px]"
                    : "w-[219.83px] h-[49.41px] gap-[6.41px]"
                }
              >
                <h3
                  className={
                    open
                      ? "w-[144px] h-[21px] font-[500] text-[14px] leading-[21px]"
                      : "w-[158px] h-[23px] font-[500] text-[15.41px] leading-[23.12px]"
                  }
                >
                  {employee}
                </h3>
                <small
                  className={
                    open
                      ? "w-[199.65px] text-[#A9A9A9] h-[18px] font-[400] text-[12px] leading-[18px]"
                      : "w-[219.83px] text-[#A9A9A9] h-[20px] font-[400] text-[13.21px] leading-[19.82px] text-nowrap"
                  }
                >
                  {dateTime}
                </small>
              </div>

              <div>{icon}</div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex text-center justify-center">
        <a className=" underline text-blue-500" href="#">
          View All Announcements
        </a>
      </div>
    </div>
  );
};

export default Announcements;
