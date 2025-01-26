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
      <div className="max-w-[50rem] w-full flex flex-col gap-[40px] border-[1px] border-[#ECEEF6] bg-[#F6F7FA]">
        <div className="w-full h-[80px] bg-[#FFFFFF] flex justify-between gap-5 place-items-center px-[30px]">
          <span className="font-[500] text-[18px] leading-[27px]">
            Select Announcement Platform
          </span>
          <FaTimes
            className="text-[#1C1B1F] cursor-pointer"
            size={24}
            onClick={closePost}
          />
        </div>

        <div className=" grid md:grid-cols-2 gap-[30px] px-4">
          <Link
            to="intranet-announcement"
            className=" flex h-[16rem] max-w-[18rem] md:max-w-full w-full flex-col place-items-center justify-center  bg-white cursor-pointer"
          >
            <TbWorldUp className="text-[#464646]" size={40} />
            <div className="font-[500] text-[32px] leading-[48px] text-[#464646]">
              Intranet
            </div>
          </Link>
          <Link
            to="email-announcement"
            className=" h-[16rem] max-w-[18rem] md:max-w-full w-full flex flex-col place-items-center justify-center  bg-white cursor-pointer"
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
