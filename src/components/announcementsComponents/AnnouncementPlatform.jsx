import ReactDom from "react-dom";
import { Context } from "../../contexts/DashBoardContext";

const AnnouncementPlatform = ({ children }) => {
  const { openModal } = Context();
  if (!openModal) return null;

  return ReactDom.createPortal(
    <div className="flex flex-col justify-center place-items-center">
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 z-20"></div>
      <div className="fixed h-screen z-20 top-0 bottom-0 left-0 right-0 flex justify-center place-items-center p">
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default AnnouncementPlatform;
