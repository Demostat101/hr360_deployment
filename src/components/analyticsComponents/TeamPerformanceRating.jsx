import TeamPerformanceRatingGraph, {
  data,
  COLORS,
} from "./TeamPerformanceRatingGraph";

const TeamPerformanceRating = () => {
  return (
    <div className="w-[40%] flex flex-col place-items-center h-[600px] p-5 bg-white shadow-md rounded-lg ">
      <div className="flex flex-col gap-[50px] h-[100%]">
        <div className="font-[600] text-[16.66px] leading-[24.99px]">
          Team Performance Rating
        </div>

        <div className="w-[380px]  h-[389px]">
          <TeamPerformanceRatingGraph />
        </div>
        <div className="flex justify-center gap-[12.71px] w-full mt-[20px]">
          {data.map(({ name }, index) => {
            return (
              <div className="flex place-items-center gap-[10px]" key={index}>
                <div
                  style={{
                    width: "11.55px",
                    height: "11.55px",
                    backgroundColor: COLORS[index],
                    borderRadius: "50%",
                  }}
                ></div>
                <div className="font-[500] text-[13.86px] leading-[20.8px]">
                  {name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamPerformanceRating;
