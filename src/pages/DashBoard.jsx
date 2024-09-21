import BottomComponent from "../components/dashBoardComponents/DashboardBottomComponent";
import MiddleComponent from "../components/dashBoardComponents/DashboardMiddleComponent";
import TopComponent from "../components/dashBoardComponents/DashboardTopComponent";
import { Context } from "../contexts/DashBoardContext";

const DashBoard = () => {
  const { open, userName } = Context();
  const date = new Date();
  const time = date.getHours()
  
  
  return (
    <main className="w-full flex flex-col min-h-screen p-[25px]">
      <div
        className={open ? "w-[100%] h-[978.82px] " : "w-[100%]  h-[1077.8px] "}
      >
        <h1
          className={
            open
              ? "font-[600] text-[24px] leading-[39px]"
              : "font-[600] text-[26px] leading-[42.94px] "
          }
        >
          Good {time >=12 ?  time>=16 ? "Evening": "Afternoon" : "Morning" }, {userName}{" "}
        </h1>
        {/* container holding all contents */}
        <div
          className={
            open
              ? "w-[100%] 2xl:h-[914.82px] mt-[23px] flex flex-col gap-[25px]"
              : "w-[100%] 2xl:h-[1007.28px]  mt-[50px] flex flex-col gap-[27.53px]"
          }
        >
          <TopComponent />
          <MiddleComponent />
          <BottomComponent />
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
