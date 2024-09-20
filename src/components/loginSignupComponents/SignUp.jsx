import { useEffect, useState } from "react";
import { Context } from "../../contexts/DashBoardContext";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const {
    signupEmail,
    signupPassword,
    setSignupPassword,
    setSignupEmail,
    setState,
    name,
    setName,
    surname,
    setSurname,
    Signup,
    signupErrors,
    isSignupLoading,
  } = Context();

  let PassWordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-.]).{8,}$/;
  let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [visible, setVisible] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [passwordFocus, setPassWordFocus] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  useEffect(() => {
    const result = PassWordRegex.test(signupPassword);
    setValidPwd(result);
  }, [signupPassword]);

  useEffect(() => {
    const result = EmailRegex.test(signupEmail);
    setValidEmail(result);
  }, [signupEmail]);

  const handleChangeVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <div className="w-[80%] h-fit flex flex-col gap-1 bg-white p-[10px]">
        <div className="flex flex-col gap-[5px] text-center">
          <span className="font-[600] text-[20px] leading-[30px] text-[#464646]">
            Welcome To HR360
          </span>
          <span className="font-[400] text-[20px] leading-[30px] text-[#464646]">
            Please sign up for an account{" "}
          </span>
          <span className="font-[600] text-[20px] leading-[30px] text-red-500">
            {signupErrors}
          </span>
        </div>

        <form
          className="flex flex-col h-fit gap-[20px]"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[10px]">
              <label
                className="font-[500] text-[16px] leading-[24px] text-[#464646]"
                htmlFor="name"
              >
                First Name
              </label>
              <input
                id="name"
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                className="h-[50px] bg-white rounded-[10px] pl-[20px] focus:outline-none border-2"
                type="text"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                className="font-[500] text-[16px] leading-[24px] text-[#464646]"
                htmlFor="surname"
              >
                Surname
              </label>
              <input
                id="surname"
                className="h-[50px] bg-white rounded-[10px] pl-[20px] focus:outline-none border-2"
                type="text"
                autoComplete="off"
                placeholder="Enter your surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                className="font-[500] text-[16px] leading-[24px] text-[#464646]"
                htmlFor="loginemail"
              >
                Email
              </label>
              <input
                id="loginemail"
                value={signupEmail}
                autoComplete="off"
                onChange={(e) => setSignupEmail(e.target.value)}
                className="h-[50px] bg-white rounded-[10px] pl-[20px] focus:outline-none border-2"
                type="email"
                placeholder="Enter your email"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                aria-invalid={validEmail ? "false" : "true"}
                required
              />
              <p
                className={
                  !validEmail && emailFocus
                    ? "text-wrap text-red-500"
                    : "hidden"
                }
              >
                Email must follow this pattern(hr360@gmail.com)
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                className="font-[500] text-[16px] leading-[24px] text-[#464646]"
                htmlFor="loginpassword"
              >
                Password
              </label>
              <div className="border-2 rounded-[10px] flex place-items-center pr-[20px] gap-[10px]">
                <input
                  id="loginpassword"
                  autoComplete="off"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="h-[50px] bg-white rounded-[10px] pl-[20px] focus:outline-none x w-full"
                  type={visible ? "text" : "password"}
                  placeholder="Enter your password"
                  onFocus={() => setPassWordFocus(true)}
                  onBlur={() => setPassWordFocus(false)}
                  aria-invalid={validPwd ? "false" : "true"}
                  required
                />
                <div
                  onClick={handleChangeVisibility}
                  className=" cursor-pointer text-[#176B87]"
                >
                  {visible ? (
                    <FaRegEye size={24} />
                  ) : (
                    <FaRegEyeSlash size={24} />
                  )}
                </div>
              </div>
              <p
                className={
                  !validPwd && passwordFocus
                    ? "text-wrap text-red-500"
                    : "hidden"
                }
              >
                Atleast 8 characters. Must include uppercase and lowercase
                letters, a number and a special character(#?!@$%^&*-.)
              </p>
            </div>
          </div>
          <button
            className={
              !validPwd || !validEmail
                ? "h-[50px] bg-[#176B87] font-[600] text-[18px] leading-[36px] text-white rounded-[10px] opacity-30 flex justify-center place-items-center"
                : "h-[50px] bg-[#176B87] font-[600] text-[18px] leading-[36px] text-white rounded-[10px] flex justify-center place-items-center"
            }
            onClick={Signup}
            disabled={!validPwd || !validEmail}
          >
            {!isSignupLoading ? (
              "Continue"
            ) : (
              <div className="isSignupLoader"></div>
            )}
          </button>
        </form>

        <div className="font-[500] text-[16px] leading-[24px] text-[#464646]">
          Already have an account?{" "}
          <span
            className="text-[#176B87] font-[600] cursor-pointer"
            onClick={() => setState("login")}
          >
            Login
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
