import React from "react";
import { addEmployeeContext } from "../../contexts/AddEmployeeContext";

const OfficialDetailsForm = () => {
  const {formData, handleInputChange} = addEmployeeContext();
  return (
    <div>
      <form
        className="flex flex-col gap-[30px]"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Container holding top details */}
        <div className="flex flex-col gap-[13.8px]">
          <div className="flex justify-between">
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="empID"
              >
                Employee ID
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="empID"
                name="officialDetailsEmployeeId"
               onChange={handleInputChange}
                required
              />
            </span>{" "}
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="jobtitle"
              >
                Job Title
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="jobtitle"
                name="officialDetailsJobTitle"
                onChange={handleInputChange}
                required
              />
            </span>
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="department"
              >
                Department
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="department"
                name="officialDetailsDepartment"
                onChange={handleInputChange}
                required
              />
            </span>
          </div>
          <div
            className={open ? "flex justify-between" : "flex justify-between"}
          >
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="officialemail"
              >
                Email
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="email"
                id="officialemail"
                name="officialDetailsEmail"
               onChange={handleInputChange}
                required
              />
            </span>

            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="officialphone"
              >
                Phone No
              </label>
              <span className="flex justify-between">
                <select
                  className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                  name="officialDetailsPhoneNo.code"
                  onChange={handleInputChange}
                  id=""
                >
                  <option value="234">+234</option>
                  <option value="1">+1</option>
                  <option value="+222">222</option>
                </select>
                <input
                  className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none w-[65%]"
                  type="tel"
                  id="officialphone"
                  name="officialDetailsPhoneNo.phone"
                  onChange={handleInputChange}
                  required
                />
              </span>
            </span>

            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="supervisor"
              >
                Reporting Supervisor
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="supervisor"
                name="officialDetailsReportingSupervisor"
                onChange={handleInputChange}
                required
              />
            </span>
          </div>
          <div
            className={open ? "flex justify-between" : "flex justify-between"}
          >
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="schedule"
              >
                Work Schedule
              </label>
              <select
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none text-black opacity-60 text-[10.12px] font-[500]"
                name="officialDetailsWorkSchedule"
                onChange={handleInputChange}
                id="schedule"
              >
                <option value="">- Select -</option>
                <option value="Hourly">Hourly</option>
                <option value="Weekly">Weekly</option>
              </select>
            </span>

            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="empType"
              >
                Employment Type
              </label>
              <select
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none text-black opacity-60 text-[10.12px] font-[500]"
                name="officialDetailsEmploymentType"
                onChange={handleInputChange}
                id="empType"
              >
                <option value="">- Select -</option>
                <option value="Contract">Contract</option>
                <option value="Full">Full</option>
              </select>
            </span>

            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="region"
              >
                Region
              </label>
              <select
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none text-black opacity-60 text-[10.12px] font-[500]"
                name="officialDetailsRegion"
                onChange={handleInputChange}
                id="region"
              >
                <option value="">- Select -</option>
                <option value="Abuja">Abuja</option>
                <option value="Lagos">Lagos</option>
              </select>
            </span>
          </div>
          <div
            className={open ? "flex justify-between" : "flex justify-between"}
          >
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="salary"
              >
                Basic Salary
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="salary"
                name="officialDetailsBasicSalary"
                onChange={handleInputChange}
                required
              />
            </span>{" "}
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="startdate"
              >
                Starting Date
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="date"
                id="startdate"
                name="officialDetailsStartingDate"
                onChange={handleInputChange}
                required
              />
            </span>{" "}
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="enddate"
              >
                Contract End Date
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="date"
                id="enddate"
                name="officialDetailsContractEndDate"
                onChange={handleInputChange}
                required
              />
            </span>{" "}
          </div>
          <div className="flex flex-col gap-[6.9px]  w-[100%]">
            <label
              className="font-[500] text-[12.37px] leading-[18.55px]"
              htmlFor="skills"
            >
              Add Skills
            </label>
            <textarea
              className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[70px] focus:outline-none"
              name="officialDetailsSkills"
                onChange={handleInputChange}
              id="skills"
            ></textarea>
          </div>{" "}
        </div>
      </form>
    </div>
  );
};

export default OfficialDetailsForm;
