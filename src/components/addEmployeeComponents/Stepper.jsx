import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const Stepper = ({ stepper, currentStep, isComplete }) => {
  const stepRef = useRef([]);
  const [widthMargin, setWidthMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const calculateProgressBar = () => {
    return ((currentStep - 1) / (stepper.length - 1)) * 100;
  };

  useEffect(() => {
    setWidthMargin({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepper.length - 1].offsetWidth / 2,
    });
  }, [stepRef]);

  return (
    <div className="w-full px-[125px]">
      <div className="w-full flex justify-between relative ">
        {/* stepper */}
        {stepper.map(({ Name }, index) => {
          return (
            <div
              ref={(dynamicWidth) => (stepRef.current[index] = dynamicWidth)}
              className={`flex flex-col items-center ${
                currentStep > index + 1 || isComplete ? " complete" : ""
              } ${currentStep === index + 1 ? " active" : ""} `}
              key={index}
            >
              {/* step */}
              <div
                className={
                  "text-center w-[59.5px] h-[59.5px] rounded-full flex justify-center place-items-center mb-[20px] z-20 bg-white step-number text-[#176b87] text-[18px] font-[700]"
                }
              >
                {index + 1}
              </div>
              {/* step-number */}
              <div className="font-[500] text-[16px] leading-[24px] text-black opacity-70">
                {Name}
              </div>
              {/* step-name */}
            </div>
          );
        })}
        <div
          style={{
            width: `calc(100% - ${
              widthMargin.marginLeft + widthMargin.marginRight
            }px)`,
            marginLeft: widthMargin.marginLeft,
            marginRight: widthMargin.marginRight,
          }}
          className="absolute top-[30%] left-0 h-1"
        >
          <div
            className="progress h-full bg-[#176b87]"
            style={{ width: `${calculateProgressBar()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
