import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Context } from "../../contexts/DashBoardContext";

const PasswordReset = () => {
  let PassWordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-.]).{8,}$/;

  const [validPwd, setValidPwd] = useState(false);
  const [passwordFocus, setPassWordFocus] = useState(false);

  const { resetPassword, setResetPassword, resetPasswordHandler} =
    Context();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const result = PassWordRegex.test(resetPassword);
    setValidPwd(result);
  }, [resetPassword]);

  const handleChangeVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <form
        className="w-full flex flex-col place-items-center"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-[80%] flex flex-col gap-[20px] bg-white p-[20px]">
          <div className="text-center mb-[30px]">
            <div className="font-[600] text-[30px] leading-[30px] text-[#464646] mb-[10px]">Reset</div>
            <div className="font-[400] text-[20px] leading-[30px] text-[#464646]">Enter new password</div>
          </div>
          <div className="flex flex-col gap-[10px] w-full">
            
            <div className="border-2 rounded-[10px] flex place-items-center pr-[20px] gap-[10px] bg-white">
              <input
                id="resetPassword"
                autoComplete="off"
                value={resetPassword}
                onChange={(e) => setResetPassword(e.target.value)}
                className="h-[60px] bg-white rounded-[10px] pl-[20px] focus:outline-none  w-full"
                type={visible ? "text" : "password"}
                placeholder="Enter new password"
                onFocus={() => setPassWordFocus(true)}
                onBlur={() => setPassWordFocus(false)}
                aria-invalid={validPwd ? "false" : "true"}
                required
              />
              <div
                onClick={handleChangeVisibility}
                className=" cursor-pointer text-[#176B87]"
              >
                {visible ? <FaRegEye size={24} /> : <FaRegEyeSlash size={24} />}
              </div>
            </div>
            <p
              className={
                !validPwd && passwordFocus ? "text-wrap text-red-500" : "hidden"
              }
            >
              Atleast 8 characters. Must include uppercase and lowercase
              letters, a number and a special character(#?!@$%^&*-.)
            </p>
          </div>

          <button
            className={
              !validPwd
                ? " w-full h-[60px] bg-[#176B87] font-[600] text-[18px] leading-[36px] text-white rounded-[10px] opacity-30 flex justify-center place-items-center"
                : "w-full h-[60px] bg-[#176B87] font-[600] text-[18px] leading-[36px] text-white rounded-[10px] flex justify-center place-items-center"
            }
            disabled={!validPwd}
            onClick={resetPasswordHandler}
          >
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
};

export default PasswordReset;
