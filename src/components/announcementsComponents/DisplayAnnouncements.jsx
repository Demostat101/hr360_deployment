import { MdCampaign } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import AnnouncementPlatform from "./AnnouncementPlatform";
import AnnouncementModal from "./AnnouncementModal";
import AnnouncementPage from "./AnnouncementPage";
import { Context } from "../../contexts/DashBoardContext";

const DisplayAnnouncements = () => {
  const { setOpenModal } = Context();

  const openPost = () => {
    setOpenModal(true);
  };
  return (
    <div className="px-[20px]">
      <AnnouncementPlatform>
        <AnnouncementModal />
      </AnnouncementPlatform>
      <div>
        <div className="flex justify-between">
          <div>
            <div className="flex gap-[10px] place-items-center">
              {" "}
              <MdCampaign className="text-yellow-400" size={40} />{" "}
              <span className="font-[600] text-[21.42px] leading-[32.13px]">
                Announcement
              </span>
            </div>
            <p className="font-[400] text-[16px] leading-[24px]">
              Post update and important information to keep your co-workers in a
              loop
            </p>
          </div>

          <div
            className=" w-[254px] h-[54px] flex gap-[16px] rounded-lg justify-center place-items-center bg-[#176B87] text-white cursor-pointer"
            onClick={openPost}
          >
            <FaPlus size={20} />{" "}
            <span className="font-[500] text-[14px] leading-[21px]">
              Create Announcement
            </span>
          </div>
        </div>
        <AnnouncementPage />
      </div>
    </div>
  );
};

export default DisplayAnnouncements;
