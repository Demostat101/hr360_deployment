import { FaArrowLeftLong } from "react-icons/fa6";
import ErrorPageImage from "../assets/errorpage.jfif"
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-[100vh] flex flex-col place-items-center justify-center bg-[#F6F7FA]">
      <div className="w-[90%] h-[450px] flex place-items-center justify-between">
        <div className="w-[49%]">
          <div className="w-full text-[#464646]">
            <div className="font-[700] text-[48px] leading-[72px] ">Ooops...</div>
            <div className="font-[400] text-[48px] leading-[72px]">Page not found</div>
            <div className="font-[400] text-[18px] leading-[36px] mt-[5%]">The page you are looking for might have been removed,
            had its name changed, or is temporarily unavailable.</div>
          </div>

          <button className="flex place-items-center px-[35px] py-[15px] gap-[10px] bg-[#176B87] text-white rounded-[10px] mt-[10%]" onClick={()=> navigate(-1)}><FaArrowLeftLong size={24} /> <span className="font-[600] text-[18px] leading-[27px]">Go Back</span></button>
          
        </div>
        <div className="w-[49%] h-full"><img className="w-full h-full object-fill" src={ErrorPageImage} alt="" /></div>
      </div>
    </div>
  );
};

export default Error;
