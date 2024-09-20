import EmployeeTurnOver from "./EmployeeTurnOver";
import HiredVsLeft from "./HiredVsLeft";
import TeamPerformanceRating from "./TeamPerformanceRating";

const AnalyticsComponent = () => {
  return (
    <div className="w-full mt-[25px] flex gap-[20px]">
      <div className="flex flex-col justify-between w-[90%]">
        <EmployeeTurnOver />
        <HiredVsLeft />
      </div>
      <TeamPerformanceRating />
    </div>
  );
};

export default AnalyticsComponent;
