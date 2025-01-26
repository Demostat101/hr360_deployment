import EmployeeTurnOver from "./EmployeeTurnOver";
import HiredVsLeft from "./HiredVsLeft";
import TeamPerformanceRating from "./TeamPerformanceRating";

const AnalyticsComponent = () => {
  return (
    <div className="w-full mt-[25px] grid  xl:grid-cols-2 gap-[20px]">
      <div className=" grid gap-5">
        <EmployeeTurnOver />
        <HiredVsLeft />
      </div>
      <TeamPerformanceRating />
    </div>
  );
};

export default AnalyticsComponent;
