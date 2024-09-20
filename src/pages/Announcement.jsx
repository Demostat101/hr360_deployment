import { Outlet } from "react-router-dom";

const Announcement = () => {
  return (
    <div className="w-full p-[20px]">
      <Outlet />
    </div>
  );
};

export default Announcement;
