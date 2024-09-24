import Stepper from "../components/addEmployeeComponents/Stepper";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import PersonalDetailsForm from "../components/addEmployeeComponents/PersonalDetailsForm";
import OfficialDetailsForm from "../components/addEmployeeComponents/OfficialDetailsForm";
import BankDetailsForm from "../components/addEmployeeComponents/BankDetailsForm";
import { addEmployeeContext } from "../contexts/AddEmployeeContext";

const AddEmployee = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const {postEmployeeData} = addEmployeeContext()

  const stepper = [
    {
      name: "Personal details",
      Component: () => <PersonalDetailsForm />,
    },
    {
      name: "Official details",
      Component: () => <OfficialDetailsForm />,
    },
    {
      name: "Bank details",
      Component: () => <BankDetailsForm />,
    },
  ];

  const handlePrevButton = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleNextButton = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepper.length) {
        setIsComplete(true);
      } else {
        return prevStep + 1;
      }
    });
  };

  const ActiveComponent = stepper[currentStep - 1]?.Component;

  return (
    <main className="w-full p-[20px]">
      <div className="mb-[30px]">
        <div className="font-[600] text-[20px] leading-[30px]">
          Add New Employee
        </div>
        <div className="font-[500] text-[16px] leading-[24px] text-black opacity-60">
          Please enter the employee details below
        </div>
      </div>
      <div className="w-full  px-[85px]">
        <div className=" flex flex-col place-items-center mb-[20px]">
          <Stepper
            stepper={stepper}
            currentStep={currentStep}
            isComplete={isComplete}
          />
        </div>
        <div className="bg-[#FFFFFF] py-[30px] shadow-sm">
          <div className="px-[65px]">
            <ActiveComponent />
          </div>
          <div className="flex justify-between px-[65px] mt-[30px]">
            <button className="p-[20px] border-[#ECEEF6] border-[1.66px] rounded-[8.28px] font-[500] text-[13.26px] leading-[19.88px]"  type="button">
              Cancel
            </button>
            <div>
              {currentStep > 1 ? (
                <div className="flex gap-[20px]">
                  {" "}
                  <button
                    className="p-[20px] rounded-[8.28px] flex gap-[6.63px] bg-white text-black place-items-center border-[#ECEEF6] border-[1.66px]"
                    onClick={handlePrevButton}
                     type="button"
                  >
                    {" "}
                    <FaArrowLeftLong size={19.88} />{" "}
                    <span className="font-[500] text-[13.26px] leading-[19.88px]">
                      Previous
                    </span>{" "}
                  </button>{" "}
                  <div>
                    {" "}
                    {currentStep === stepper.length ? (
                      <button className="p-[20px] rounded-[8.28px] flex gap-[6.63px] bg-[#176B87] text-white font-[500] text-[13.26px] leading-[19.88px]" onClick={postEmployeeData}  type="button">
                        Submit
                      </button>
                    ) : (
                      <button
                        className="p-[20px] rounded-[8.28px] flex gap-[6.63px] bg-[#176B87] text-white place-items-center"
                        onClick={handleNextButton}
                        type="button"
                      >
                        {" "}
                        <span className="font-[500] text-[13.26px] leading-[19.88px]">
                          Next
                        </span>{" "}
                        <FaArrowRightLong size={19.88} />{" "}
                      </button>
                    )}
                  </div>{" "}
                </div>
              ) : (
                <button
                  className="p-[20px] rounded-[8.28px] flex gap-[6.63px] bg-[#176B87] text-white place-items-center"
                  onClick={handleNextButton}
                   type="button"
                >
                  <span className="font-[500] text-[13.26px] leading-[19.88px]">
                    Next
                  </span>{" "}
                  <FaArrowRightLong size={19.88} />{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddEmployee;
