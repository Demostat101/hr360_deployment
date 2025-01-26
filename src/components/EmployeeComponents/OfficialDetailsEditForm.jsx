/* eslint-disable react/prop-types */
import { useState } from "react";
import { editEmployeeContext } from "../../contexts/EditDetailsContext";
import { FaPlus } from "react-icons/fa";

const OfficialDetailsEditForm = ({ employee }) => {
  
  const {
    editEmployeeId,
    setEditEmployeeId,
    editEmployementType,
    setEditEmployementType,
    editWorkSchedule,
    setEditWorkSchedule,
    editJobTitle,
    setEditJobTitle,
    editDepartment,
    setEditDepartment,
    editReportingOfficer,
    setEditReportingOfficer,
    editRegion,
    setEditRegion,
    // editSkills,
    setEditSkills,
  } = editEmployeeContext();

  const [skills, setSkills] = useState("")
  const [message, setMessage] = useState("")

  const handleEditSkills = () => {
    if (!skills) {
      setMessage("No skill added, kindly add a skill.")
      setTimeout(() => {
        setMessage("")
      }, 2000);
      return;
    }

    setEditSkills(prev => {
      const skillExists = prev.find(skill => skill.toLowerCase() === skills.trim().toLowerCase())
      if (skillExists) {
        setMessage("skill already exist")
        setTimeout(() => {
          setMessage("")
        }, 2000);
        return prev;
      }
      setMessage("Skill added Kindly click on save Button to add skill successfully")
      setTimeout(() => {
        setMessage("")
      }, 5000);
      return [...prev, skills]
    });

    setSkills("")
  }

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full h-fit flex justify-between gap-[30px]"
      >
        <div className="w-[161.42px] h-[200.46px] flex flex-col gap-[18.07px]">
          <div className="w-full flex flex-col gap-[5px]">
            <label className="font-[400] text-[16px] leading-[24px] text-black opacity-60">
              Employee ID
            </label>
            <input
              className="font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              value={editEmployeeId}
              onChange={(e) => setEditEmployeeId(e.target.value)}
              type="text"
              placeholder="Employee Id"
            />
          </div>

          <div className="w-full flex flex-col gap-[5px]">
            <label className="font-[400] text-[16px] leading-[24px] text-black opacity-60">
              Employment Type
            </label>
            <input
              className="font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              value={editEmployementType}
              onChange={(e) => setEditEmployementType(e.target.value)}
              type="text"
              placeholder="Employment Type"
            />
          </div>

          <div className="w-full flex flex-col gap-[5px]">
            <label className="font-[400] text-[16px] leading-[24px] text-black opacity-60">
              Work Schedule
            </label>
            <input
              className="font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              value={editWorkSchedule}
              onChange={(e) => setEditWorkSchedule(e.target.value)}
              type="text"
              placeholder="Work Schedule"
            />
          </div>
        </div>

        <div className="w-[187.06px] h-[200.46px] flex flex-col gap-[18.07px]">
          <div className="w-full flex flex-col gap-[5px]">
            <label className="font-[400] text-[16px] leading-[24px] text-black opacity-60">
              Job Title
            </label>
            <input
              className="font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              value={editJobTitle}
              onChange={(e) => setEditJobTitle(e.target.value)}
              type="text"
              placeholder="Job Title"
            />
          </div>

          <div className="w-full flex flex-col gap-[5px]">
            <label className="font-[400] text-[16px] leading-[24px] text-black opacity-60">
              Department
            </label>
            <input
              className="font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              value={editDepartment}
              onChange={(e) => setEditDepartment(e.target.value)}
              type="text"
              placeholder="Department"
            />
          </div>

          <div className="w-full flex flex-col gap-[5px]">
            <label className="font-[400] text-[16px] leading-[24px] text-black opacity-60">
              Reporting Supervisor
            </label>
            <input
              className="font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              value={editReportingOfficer}
              onChange={(e) => setEditReportingOfficer(e.target.value)}
              type="text"
              placeholder="Reporting Supervisor"
            />
          </div>
        </div>

        <div className="w-[267.26px] h-fit flex flex-col gap-[18.07px]">
          <div className="w-full flex flex-col gap-[5px]">
            <label className="font-[400] text-[16px] leading-[24px] text-black opacity-60">
              Region
            </label>
            <input
              className="font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              value={editRegion}
              onChange={(e) => setEditRegion(e.target.value)}
              type="text"
              placeholder="Region"
            />
          </div>

          <div className="w-full h-full flex flex-col gap-[5px]">
            <label className="font-[400] text-[16px] leading-[24px] text-black opacity-60">
              Skills
            </label>
            <div>
              <div className="font-[500] text-red-500">{message}</div>
              <div className="flex gap-4 items-center">
                <input
                  className="focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  value={skills}
                  onChange={e => setSkills(e.target.value)}
                  type="text"
                  placeholder="Skills"
                />
                <button onClick={handleEditSkills}><FaPlus /></button>
              </div>
              <div className="w-full mt-2 border-2">
                {employee.map((val, index) => {
                  return (
                    <div className="flex flex-wrap gap-2" key={index}>
                      {val.officialDetails.skills.map((val, index) => {
                        return <div key={index}>{val},</div>
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default OfficialDetailsEditForm;
