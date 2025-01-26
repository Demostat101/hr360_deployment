import Anniversary from "./Anniversary";
import Birthday from "./Birthday";
import useLocalStorage from "use-local-storage";

const Celebrations = () => {
  const [toggle, setToggle] = useLocalStorage(false);

  return (
    <div className="w-[100%] bg-white rounded-lg shadow-lg pt-[15px] h-[100%] flex flex-col gap-[15px]">
      {/* top bar */}
      <div className="w-[100%] h-[34.13px] p-[15px] flex justify-between place-items-center">
        {/* top bar left */}
        <div className="w-[105px] h-[26px] font-[500] text-[17.63px] leading-[26.43px]">
          Celebration
        </div>

        {/* top right bar */}
        <div className="w-[140.94px] h-[34.13px] flex flex-col justify-center place-items-center rounded-lg border-[#E3EFF3] border-solid border-2">
          <select className="outline-none bg-white text-[#969696]" name="" id="">
            <option value="" className="bg-white">
              This week
            </option>
            <option value="" className="bg-white">
              Last week
            </option>
          </select>
        </div>
      </div>

      <div className="w-[100%] pt-[20px] h-[23px] justify-center flex place-items-center">
        <div className="w-[200px] flex justify-center gap-[100px] relative cursor-pointer text-[#A5A5A5]">
          <div
            className={`w-[74px] h-[23px] font-[400] text-[15.41px] leading-[23.12px] ${!toggle ? "birth" :  ""}`}
            onClick={() => setToggle(false)}
          >
            Birthday
          </div>
         
          <div
            className={`w-[149px] h-[23px] font-[400] text-[15.41px] leading-[23.12px] ${ toggle ? "anniversary" :  ""}`}
            onClick={() => setToggle(true)}
           
          >
            Anniversary
          </div>
        </div>
      </div>
      <hr />

      {/* images and date */}
      <div className="flex flex-col w-full place-items-center gap-[20px]">
        {/* single image card */}
        {!toggle ? <Birthday /> : <Anniversary />}
      </div>
    </div>
  );
};

export default Celebrations;
