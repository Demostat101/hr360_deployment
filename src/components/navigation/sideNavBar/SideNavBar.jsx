import { NavLink } from "react-router-dom";
import { Paths } from "./SideBarArray";
import SevenUpLogo from "../../../assets/SevenUpLogo.jfif";
import { Context } from "../../../contexts/DashBoardContext";

const SideNavBar = () => {
  const { open /* ,menu */ } = Context();
  return (
    <nav /* id="side-bar" */
      className={
        open
          ? "w-[250px] h-[100vh] trans bg-[#176B87] text-[#FFFFFF] pt-[20px] flex flex-col justify-between pb-[8px] "
          : "w-[130px] h-[100vh] transit bg-[#176B87] place-items-center text-white pt-[28px] flex flex-col justify-between pb-[12px]" /* ,
          open || menu ? "#side-bar hide-nav w-[250px] h-[100vh] trans bg-[#176B87] text-[#FFFFFF] pt-[100px] flex flex-col justify-between pb-[8px]" : !open || menu ?  "#side-bar hide-nav w-[130px] h-[100vh] transit bg-[#176B87] place-items-center text-white pt-[110px] flex flex-col justify-between pb-[12px]" : "#side-bar" */
      }
    >
      <ul
        className={
          open
            ? "w-[250px] trans bg-[#176B87] pl-8"
            : "w-[130px] transit bg-[#176B87] flex flex-col place-items-center "
        }
      >
        
          <h1 className={open ? " relative w-[100%] h-[60px] text-[40px] font-[600] mb-[40px]" : " relative w-[100%] h-[60px] text-[20px] font-[600] text-center"}>
            HR 360{" "}
            <sup className={open ? " absolute top-1 right-[-1] text-[20px]" : " absolute top-0 right-[-1] text-[10px]"}>
              <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
            </sup>
          </h1>

        {Paths.map((path, index) => {
          return (
            <NavLink
              className={
                !open
                  ? "pl-0 m-1"
                  : "flex flex-col gap-2 mb-3 pl-4 place-items-center"
              }
              to={path.to}
              key={index}
            >
              <li
                className={
                  !open
                    ? "w-[80px] h-[80px] flex flex-col justify-center place-items-center"
                    : "w-[221px] flex h-[50px] place-items-center gap-4 font-bold pl-3 justify-left"
                }
              >
                <span
                  className={
                    path.label === "Dashboard" && !open
                      ? " text-white icon "
                      : open
                      ? "text-[#FFF] icon"
                      : "text-[#FFFFFF] icon"
                  }
                >
                  {!open ? path.icons[0] : path.icons[1]}
                </span>{" "}
                <span
                  id="label"
                  className={
                    !open ? " hidden" : "text-[#FFFFFF] text-[16px] font-[400]"
                  }
                >
                  {path.label}
                </span>
              </li>
            </NavLink>
          );
        })}
      </ul>

      <footer className="w-full flex flex-col place-items-center text-center">
        <img className="w-[34px] h-[50px] " src={SevenUpLogo} alt="" />
        {open ? (
          <div className="text-[#DDE2E3] font-[600] text-[11px] w-[171px] h-[24px] flex justify-center place-items-center">
            {" "}
            <span className=" text-[24px]">&copy;</span>2024. All Rights
            Reserved.
          </div>
        ) : (
          ""
        )}
      </footer>
    </nav>
  );
};

export default SideNavBar;
