import { Box3Data1 } from "./CelebrationArray";


const Anniversary = () => {
  return (
    <>
      {Box3Data1.map(({ img, department, name, date }, index) => {
        return (
          <div
            key={index}
            className="w-[100%] h-[55.17px] flex justify-between place-items-center pl-[15px] pr-[15px]"
          >
            {/* picture and name div */}
            <div className="w-[192.68px] h-[55.17px] place-items-center flex gap-[16.52px]">
              <img
                src={img}
                alt=""
                className="w-[55.17px] h-[55.17px] rounded-full object-cover"
              />
              {/* name container */}
              <div className="w-[121px] h-[43px] flex flex-col">
                <span className="font-[500] text-nowrap text-[15.41px] leading-[23.12px]">
                  {name}
                </span>
                <small className="font-[400] text-[#A9A9A9] text-[13.21px] leading-[19.82px]">
                  {department}
                </small>
              </div>
            </div>

            <div className="font-[400] text-[15.41px] leading-[23.12px]">
              {date}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Anniversary;
