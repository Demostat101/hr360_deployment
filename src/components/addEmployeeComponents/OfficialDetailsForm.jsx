import React from "react";
import { addEmployeeContext } from "../../contexts/AddEmployeeContext";

const OfficialDetailsForm = () => {
  const { handleChangeOfficialDetails, officialDetails } = addEmployeeContext();
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3"
                type="text"
                id="empID"
                name="employeeId"
                value={officialDetails.employeeId}
                onChange={handleChangeOfficialDetails}
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3"
                type="text"
                id="jobtitle"
                name="jobTitle"
                value={officialDetails.jobTitle}
                onChange={handleChangeOfficialDetails}
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3"
                type="text"
                id="department"
                name="department"
                value={officialDetails.department}
                onChange={handleChangeOfficialDetails}
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3"
                type="email"
                id="officialemail"
                name="email"
                value={officialDetails.email}
                onChange={handleChangeOfficialDetails}
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
                  className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3"
                  name="phoneNoCode"
                  value={officialDetails.phoneNoCode}
                  onChange={handleChangeOfficialDetails}
                  id=""
                >
                  <option value="1">+1</option>
                  <option value="234">+234</option>
                  <option value="+222">+222</option>
                </select>
                <input
                  className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3 w-[65%]"
                  type="tel"
                  id="officialphone"
                  name="phoneNo"
                  value={officialDetails.phoneNo}
                  onChange={handleChangeOfficialDetails}
                  required
                  maxLength={10}
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3"
                type="text"
                id="supervisor"
                name="reportingSupervisor"
                value={officialDetails.reportingSupervisor}
                onChange={handleChangeOfficialDetails}
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3 text-black opacity-60 text-[10.12px] font-[500]"
                name="workSchedule"
                value={officialDetails.workSchedule}
                onChange={handleChangeOfficialDetails}
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3 text-black opacity-60 text-[10.12px] font-[500]"
                name="employmentType"
                value={officialDetails.employmentType}
                onChange={handleChangeOfficialDetails}
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3 text-black opacity-60 text-[10.12px] font-[500]"
                name="region"
                value={officialDetails.region}
                onChange={handleChangeOfficialDetails}
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3"
                type="text"
                id="salary"
                name="basicSalary"
                value={officialDetails.basicSalary}
                onChange={handleChangeOfficialDetails}
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3"
                type="date"
                id="startdate"
                name="startingDate"
                value={officialDetails.startingDate}
                onChange={handleChangeOfficialDetails}
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
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3"
                type="date"
                id="enddate"
                name="contractEndDate"
                value={officialDetails.contractEndDate}
                onChange={handleChangeOfficialDetails}
                required
              />
            </span>{" "}
          </div>
          <div className="flex flex-col gap-[6.9px]  w-[100%]">
            <label
              className="font-[500] text-[12.37px] leading-[18.55px]"
              htmlFor="role"
            >
              Role
            </label>
            <input
              className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none px-3"
              type="text"
              id="role"
              name="role"
              value={officialDetails.role}
              onChange={handleChangeOfficialDetails}
              required
            />
          </div>{" "}
          <div className="flex flex-col gap-[6.9px]  w-[100%]">
            <label
              className="font-[500] text-[12.37px] leading-[18.55px]"
              htmlFor="skills"
            >
              Add Skills
            </label>
            <textarea
              className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[70px] focus:outline-none px-3"
              placeholder="react,node js,javascript"
              name="skills"
              value={officialDetails.skills}
              onChange={handleChangeOfficialDetails}
              id="skills"
            ></textarea>
          </div>{" "}
        </div>
      </form>
    </div>
  );
};

export default OfficialDetailsForm;
