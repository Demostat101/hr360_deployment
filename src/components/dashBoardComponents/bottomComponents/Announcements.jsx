import { announcementArray } from "./AnnouncementsArray";

const Announcements = () => {
  return (
    <div className="w-[100%] pb-[15px] flex flex-col bg-[#FFFFFF] rounded-lg shadow-lg gap-6">
      {/* top container */}
      <div className="w-[100%] h-[60.44px] flex place-items-center justify-between gap-[11.01px] pr-[20px] pl-[20px] border-[1.18px] border-[#ECEEF6]">
        <h2 className="w-[150px] h-[26px] font-[500] text-[17.62px] leading-[26.43px]">
          Announcement
        </h2>
        <button className="w-[121.12px] h-[34.01px] rounded-lg border-solid border-[#E3EFF3] border-[2px] text-[#969696]">
          Create
        </button>
      </div>
      {/* Container holding all boxes */}
      <div className="flex flex-col justify-between w-full gap-4 pl-[20px] pr-[20px]">
        {/* Each box */}
        {announcementArray.map(({ employee, dateTime, icon }, index) => {
          return (
            <div
              key={index}
              className="w-[100%] place-items-center flex justify-between"
            >
              {/* inner box */}
              <div className="w-[219.83px] h-[49.41px] gap-[6.41px]">
                <h3 className="w-[158px] h-[23px] font-[500] text-[15.41px] leading-[23.12px]">
                  {employee}
                </h3>
                <small className="w-[219.83px] text-[#A9A9A9] h-[20px] font-[400] text-[13.21px] leading-[19.82px] text-nowrap">
                  {dateTime}
                </small>
              </div>
              <div>{icon}</div>
            </div>
          );
        })}
      </div>

      {/* <div className="w-full flex text-center justify-center">
        <a className="underline text-blue-500" href="#">
          View All Announcements
        </a>
      </div> */}
    </div>
  );
};

export default Announcements;
