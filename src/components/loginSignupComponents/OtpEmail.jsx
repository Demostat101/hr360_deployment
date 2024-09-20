import React, { useEffect, useRef, useState } from "react";
import { Context } from "../../contexts/DashBoardContext";
import axios from "axios";

const OtpEmail = () => {
  const otpLength = 4;
  const { loginEmail, handleOtpSubmit, otpMessage, getUser } = Context();
  const [otp, setOtp] = useState(new Array(otpLength).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = async (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Handle submit otp trigger

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === otpLength) {
      await handleOtpSubmit({ loginEmail, code: combinedOtp });
    }

    // Move to next input if current field is filled

    if (value && index < otpLength - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Move cursor on pressing back space or Arrowleft

  const handleKeyDown = (index, e) => {
    if (
      e.key === "ArrowLeft" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  //Handle resend OTP

  const [timerCount, setTimerCount] = useState(60);
  const [disable, setDisable] = useState(true);

  const handleResendOtp = async () => {
    if (disable) return;

    try {
      const {
        data: { code },
        status,
      } = await axios.get("https://hr360backendloginsignup.onrender.com/generateOTP", loginEmail);

      if (status === 200 || status === 201) {
        const data = await getUser(loginEmail);

        const text = `Your password recovery OTP is ${code}. Verify and recover your password.`;
        await axios.post("https://hr360backendloginsignup.onrender.com/sendOtp", {
          name: data.name,
          email: data.email,
          text,
          subject: "Password Recovery OTP",
        });
        setDisable(true);
        setTimerCount(60);
        return code;
      }
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setTimerCount((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [disable]);

  return (
    <>
      <div className="w-[70%] h-fit flex flex-col gap-[30px] bg-white p-[40px]">
        <div className="flex flex-col gap-[10px] text-center">
          <span className="font-[600] text-[20px] leading-[30px] text-[#746f6f]">
            Email Verification
          </span>
          <span className="font-[400] text-[20px] leading-[30px] text-[#464646]">
            We have sent a code to your email{" "}
            <span className="text-[#176B87] text-[18px] font-[500]">
              {loginEmail}
            </span>
          </span>
          <span className="font-[600] text-[20px] leading-[30px] text-red-500">
            {""}
          </span>
        </div>

        <div className="text-red-500 font-[500] text-[18px] text-center">{otpMessage}</div>

        <form
          className="flex flex-col h-fit gap-[40px] place-items-center"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex gap-[20px]">
            {otp.map((value, index) => {
              return (
                <div key={index}>
                  <input
                    className="h-[60px] w-[60px] font-[500] text-center text-[18px] text-[#176B87] border-2 focus:border-[#176B87] bg-white rounded-[10px] focus:outline-none"
                    type="text"
                    ref={(input) => (inputRefs.current[index] = input)}
                    value={value}
                    onChange={(e) => {
                      handleChange(index, e);
                    }}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    required
                  />
                </div>
              );
            })}
          </div>

          <div className=" font-[500] text-[16px] leading-[24px] text-[#464646]">
            <span>
              Didn't receive code?{" "}
              <span
                className={
                  disable
                    ? " text-[#7497a3]"
                    : "text-[#176B87] font-[600] cursor-pointer border-b-2 border-[#176B87]"
                }
                onClick={handleResendOtp}
                disabled={disable}
              >
                {disable ? `Resend OTP in ${timerCount}s ` : "Resend OTP"}
              </span>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default OtpEmail;
