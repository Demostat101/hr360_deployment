import Events from "./bottomComponents/Events";
import Announcements from "./bottomComponents/Announcements";
import Celebrations from "./bottomComponents/Celebration";
import { Context } from "../../contexts/DashBoardContext";

const BottomComponent = () => {
  const { open } = Context();
  return (
    <main
      className={
        open
          ? "w-[100%] h-[311.1px] open-container"
          : "w-[100%] h-[342.55px] close-container "
      }
    >
      <Events />
      <Announcements />
      <Celebrations />
    </main>
  );
};

export default BottomComponent;
