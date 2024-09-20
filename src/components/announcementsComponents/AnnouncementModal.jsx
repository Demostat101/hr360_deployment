import { FaTimes } from "react-icons/fa";
import { TbWorldUp } from "react-icons/tb";
import { TbMailForward } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/DashBoardContext";

const AnnouncementModal = () => {
  const { setOpenModal } = Context();

  const closePost = () => {
    setOpenModal(false);
  };
  return (
    <div className="w-full flex flex-col place-items-center">
      <div className="w-[808px] h-[366px] flex flex-col gap-[40px] border-[1px] border-[#ECEEF6] bg-[#F6F7FA]">
        <div className="w-full h-[80px] bg-[#FFFFFF] flex justify-between place-items-center px-[30px]">
          <span className="font-[500] text-[18px] leading-[27px]">
            Select Announcement Platform
          </span>
          <FaTimes
            className="text-[#1C1B1F] cursor-pointer"
            size={24}
            onClick={closePost}
          />
        </div>

        <div className="flex gap-[30px] justify-center">
          <Link
            to="intranet-announcement"
            className="w-[340px] h-[206px] flex flex-col place-items-center justify-center  bg-white cursor-pointer"
          >
            <TbWorldUp className="text-[#464646]" size={40} />
            <div className="font-[500] text-[32px] leading-[48px] text-[#464646]">
              Intranet
            </div>
          </Link>
          <Link
            to="email-announcement"
            className="w-[340px] h-[206px] flex flex-col place-items-center justify-center  bg-white cursor-pointer"
          >
            <TbMailForward className="text-[#464646]" size={40} />
            <div className="font-[500] text-[32px] leading-[48px] text-[#464646]">
              E-Mail
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
