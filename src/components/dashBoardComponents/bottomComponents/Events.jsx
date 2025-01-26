import { eventArray } from "./EventsArray";

const Events = () => {
  return (
    <div className="w-[100%] bg-[#FFFFFF] flex flex-col gap-[30px] rounded-lg shadow-lg">
      {/* top box */}
      <div className="w-[100%] h-[63.51px] border-[1.28px] border-[#ECEEF6] flex flex-col justify-center leading-[26.43px] font-[500] text-[17.62] pl-[15px]">
        Upcoming Events
      </div>

      {/* Boxes */}
      <div className="flex flex-col gap-[20px] place-items-center pl-[15px] pr-[15px]">
        {/* 1st box */}
        {eventArray.map(({ date, time, title, month }, index) => {
          return (
            <div
              key={index}
              className="w-[100%] h-[62.22px] flex border-l-[5px] place-items-center border-l-[#176B87] rounded gap-[40px] border-[1.17px] border-[#ECEEF6]"
            >
              {/* small box */}
              <div className="w-[31px] h-[46px] pl-[30px] flex flex-col justify-center text-center place-items-center">
                <span>{date}</span> <span>{month}</span>
              </div>

              {/* 2nd Box */}
              <div className="w-[124px] h-[43px] flex flex-col justify-evenly">
                <span className="text-[15.4px] leading-[23.12px] text-nowrap font-[500]">
                  {title}
                </span>
                <span className="text-[13.21px] text-[#505050] leading-[19.82px] font-[400]">
                  {time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
