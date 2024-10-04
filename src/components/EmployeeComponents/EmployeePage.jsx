import { CiEdit } from "react-icons/ci";
import { LuSave } from "react-icons/lu";
import PersonalDetailsEditForm from "./PersonalDetailsEditForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import OfficialDetailsEditForm from "./OfficialDetailsEditForm";
import { GoPaperclip } from "react-icons/go";
import { editEmployeeContext } from "../../contexts/EditDetailsContext";
import { Context } from "../../contexts/DashBoardContext";
import MultipleSelectChip from "./EmployeeSkillsChip";
import { useAxiosFetch } from "../../hooks/UseAxiosFetch";

const EmployeePage = () => {
  const { id } = useParams();

  const { open } = Context();
  const {data} = editEmployeeContext()

  const {
    editPersonalDetailsButton,
    setEditPersonalDetailsButton,
    setEditName,
    setEditMiddleName,
    setEditSurname,
    setEditGender,
    setEditPhone,
    setEditEmail,
    setEditDateOfBirth,
    setEditMaritalStatus,
    setEditReligion,
    setEditAddress,
    setEditEducationalQualification,
    setEditNationality,
    setEditLanguageSpoken,
    setEditEmergencyContactCode,
    setEditEmergencyContactPhone,
    setEditEmergencyContactRelationship,
    handleEditPersonalDetails,
    editOfficialDetailsButton,
    setEditOfficialDetailsButton,
    handleEditOfficialDetails,
    setEditEmployeeId,
    setEditEmployementType,
    setEditWorkSchedule,
    setEditJobTitle,
    setEditDepartment,
    setEditReportingOfficer,
    setEditRegion,
    setEditSkills,
  } = editEmployeeContext();

  const employeeFilter = data.filter(
    (employee) => employee._id.toString() === id
  );

  const handleEditPersonalDetailsButton = () => {
    setEditPersonalDetailsButton(true);
  };
  const handleEditOfficialDetailsButton = () => {
    setEditOfficialDetailsButton(true);
  };

  const post = data.find((post) => post._id.toString() === id);
  

  useEffect(() => {
    if (post) {
      setEditName(post.firstName);
      setEditMiddleName(post.middleName);
      setEditSurname(post.lastName);
      setEditGender(post.gender);
      setEditPhone(post.phoneNo.phone);
      setEditEmail(post.email);
      setEditDateOfBirth(post.dateOfBirth);
      setEditMaritalStatus(post.maritalStatus);
      setEditReligion(post.religion);
      setEditAddress(post.address);
      setEditEducationalQualification(post.educationalQualification);
      setEditNationality(post.nationality);
      setEditLanguageSpoken(post.languageSpoken);
      setEditEmergencyContactCode(post.emergencyContact.phoneNo.code);
      setEditEmergencyContactPhone(post.emergencyContact.phoneNo.phone);
      setEditEmergencyContactRelationship(post.emergencyContact.relationship);
    }
  }, [
    post,
    setEditName,
    setEditGender,
    setEditMiddleName,
    setEditSurname,
    setEditPhone,
    setEditEmail,
    setEditDateOfBirth,
    setEditMaritalStatus,
    setEditReligion,
    setEditAddress,
    setEditEducationalQualification,
    setEditNationality,
    setEditLanguageSpoken,
    setEditEmergencyContactCode,
    setEditEmergencyContactPhone,
    setEditEmergencyContactRelationship,
  ]);

  useEffect(() => {
    if (post) {
      setEditEmployeeId(post.officialDetails.employeeId);
      setEditEmployementType(post.officialDetails.employmentType);
      setEditWorkSchedule(post.officialDetails.workSchedule);
      setEditJobTitle(post.officialDetails.jobTitle);
      setEditDepartment(post.officialDetails.department);
      setEditReportingOfficer(post.officialDetails.reportingOfficer);
      setEditRegion(post.officialDetails.region);
      setEditSkills(post.officialDetails.skills.map((vals) => vals));
    }
  }, [
    post,
    setEditEmployeeId,
    setEditEmployementType,
    setEditJobTitle,
    setEditWorkSchedule,
    setEditDepartment,
    setEditReportingOfficer,
    setEditRegion,
    setEditSkills,
  ]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="w-full h-full flex flex-col gap-[30px]">
      <div
        className={
          open
            ? "w-full h-fit border-[1.75px] border-[#ECEEF6] shadow-md bg-white rounded-xl"
            : "w-full h-fit border-[1.92px] border-[#ECEEF6] shadow-md bg-white rounded-xl"
        }
      >
        <div
          className={
            open
              ? "w-full h-[64px] border-[1.75px] border-[#ECEEF6] flex justify-between place-items-center p-[20px]"
              : "w-full h-[70.41px] border-[1.92px] border-[#ECEEF6] flex justify-between place-items-center p-[20px]"
          }
        >
          <div
            className={
              open
                ? "font-[500] text-[16px] leading-[24px]"
                : "font-[500] text-[17.6px] leading-[26.4px]"
            }
          >
            Personal Details
          </div>

          {!editPersonalDetailsButton ? (
            <div
              onClick={handleEditPersonalDetailsButton}
              className={
                open
                  ? "w-[95px] h-[24px] flex gap-[10px] justify-end place-items-center cursor-pointer"
                  : "w-[104.51px] h-[26.4px] flex gap-[11px] justify-end place-items-center cursor-pointer"
              }
            >
              {" "}
              <span
                className={
                  open
                    ? "text-[16px] leading-[24px] font-[400]"
                    : "text-[17.6px] leading-[24px] font-[400]"
                }
              >
                Edit info
              </span>{" "}
              <CiEdit size={22} />
            </div>
          ) : (
            <div
              onClick={() => handleEditPersonalDetails(post._id)}
              className={
                open
                  ? "w-[95px] h-[24px] flex gap-[10px] place-items-center justify-end cursor-pointer "
                  : "w-[104.51px] h-[26.4px] flex gap-[11px] place-items-center justify-end cursor-pointer"
              }
            >
              {" "}
              <span>Save</span> <LuSave size={22} />
            </div>
          )}
        </div>
        <hr />

        <div className="w-full p-[20px] h-fit">
          {!editPersonalDetailsButton ? (
            <>
              {employeeFilter.map((employee) => {
                return (
                  <div
                    key={employee._id}
                    className={
                      open
                        ? "w-full h-[296.68px] flex justify-between gap-[30px]"
                        : "w-full h-[326.37px] flex justify-between gap-[30px]"
                    }
                  >
                    <div
                      className={
                        open
                          ? "w-[211.69px] h-[269.52px] flex flex-col  gap-[18.07px]"
                          : "w-[232.88px] h-[293.28px] flex flex-col  gap-[19.88px]"
                      }
                    >
                      <div className="w-full ">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Full Name
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px] flex gap-2"
                              : "font-[500] text-[17.6px] leading-[26.4px] flex gap-2"
                          }
                        >
                          <span>{employee.firstName}</span>
                          <span>{employee.middleName}</span>
                          <span>{employee.lastName}</span>
                        </div>
                      </div>

                      <div className="w-full">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Gender
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px]"
                              : "font-[500] text-[17.6px] leading-[26.4px]"
                          }
                        >
                          {employee.gender}
                        </div>
                      </div>

                      <div className="w-full">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Phone No
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px]"
                              : "font-[500] text-[17.6px] leading-[26.4px]"
                          }
                        >
                          {employee.phoneNo.phone}
                        </div>
                      </div>

                      <div className="w-full">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Email
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px]"
                              : "font-[500] text-[17.6px] leading-[26.4px]"
                          }
                        >
                          {employee.email}
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        open
                          ? "w-[224.18px] h-[292.35px] flex flex-col  gap-[18.07px]"
                          : "w-[246.61px] h-[318px] flex flex-col  gap-[19.88px]"
                      }
                    >
                      <div className="w-full ">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Date of Birth
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px]"
                              : "font-[500] text-[17.6px] leading-[26.4px]"
                          }
                        >
                          <span>
                            {employee.dateOfBirth.slice(8, 10)}
                            <sup>
                              {Number(employee.dateOfBirth.slice(8, 10)) ===
                                1 ||
                              Number(employee.dateOfBirth.slice(8, 10)) ===
                                21 ||
                              Number(employee.dateOfBirth.slice(8, 10)) === 31
                                ? "st"
                                : Number(employee.dateOfBirth.slice(8, 10)) ===
                                    2 ||
                                  Number(employee.dateOfBirth.slice(8, 10)) ===
                                    22
                                ? "nd"
                                : Number(employee.dateOfBirth.slice(8, 10)) ===
                                    3 ||
                                  Number(employee.dateOfBirth.slice(8, 10)) ===
                                    23
                                ? "rd"
                                : "th"}
                            </sup>
                          </span>
                          <span>
                            {" "}
                            {
                              months[
                                Number(employee.dateOfBirth.slice(5,7) - 1)
                              ]
                            }
                            ,
                          </span>
                          <span> {employee.dateOfBirth.slice(0, 4)}</span>
                        </div>
                      </div>

                      <div className="w-full">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Marital Status
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px]"
                              : "font-[500] text-[17.6px] leading-[26.4px]"
                          }
                        >
                          {employee.maritalStatus}
                        </div>
                      </div>

                      <div className="w-full">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Religion
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px]"
                              : "font-[500] text-[17.6px] leading-[26.4px]"
                          }
                        >
                          {employee.religion}
                        </div>
                      </div>

                      <div className="w-full">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Address
                        </span>
                        <address
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px]"
                              : "font-[500] text-[17.6px] leading-[26.4px]"
                          }
                        >
                          {employee.address}
                        </address>
                      </div>
                    </div>

                    <div
                      className={
                        open
                          ? "w-[267.26px] h-[269.52px] flex flex-col  gap-[18.07px]"
                          : "w-[294.01px] h-[293.28px] flex flex-col  gap-[19.88px]"
                      }
                    >
                      <div className="w-full ">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Education
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px]"
                              : "font-[500] text-[17.6px] leading-[26.4px]"
                          }
                        >
                          {employee.educationalQualification}
                        </div>
                      </div>

                      <div className="w-full">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Nationality
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px]"
                              : "font-[500] text-[17.6px] leading-[26.4px]"
                          }
                        >
                          {employee.nationality}
                        </div>
                      </div>

                      <div className="w-full">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Language Spoken
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px]"
                              : "font-[500] text-[17.6px] leading-[26.4px]"
                          }
                        >
                          {employee.languageSpoken}
                        </div>
                      </div>

                      <div className="w-full">
                        <span
                          className={
                            open
                              ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                              : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                          }
                        >
                          Emergency Contact
                        </span>
                        <div
                          className={
                            open
                              ? "font-[500] text-[16px] leading-[24px] flex gap-2"
                              : "font-[500] text-[17.6px] leading-[26.4px] flex gap-2"
                          }
                        >
                          <span>{employee.emergencyContact.phoneNo.code}</span>
                          <span>{employee.emergencyContact.phoneNo.phone}</span>
                          <span>
                            ({employee.emergencyContact.relationship})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <PersonalDetailsEditForm />
          )}
        </div>
      </div>

      <div
        className={
          open
            ? " w-full h-fit bg-white rounded-xl"
            : " w-full h-fit bg-white rounded-xl"
        }
      >
        <div
          className={
            open
              ? "w-full h-[64px] border-[1.75px] border-[#ECEEF6] flex justify-between place-items-center p-[20px]"
              : "w-full h-[70.41px] border-[1.92px] border-[#ECEEF6] flex justify-between place-items-center p-[20px]"
          }
        >
          <div
            className={
              open
                ? "font-[500] text-[16px] leading-[24px]"
                : "font-[500] text-[17.6px] leading-[26.4px]"
            }
          >
            Official Details
          </div>

          {!editOfficialDetailsButton ? (
            <div
              onClick={handleEditOfficialDetailsButton}
              className={
                open
                  ? "w-[95px] h-[24px] flex gap-[10px] justify-end place-items-center cursor-pointer"
                  : "w-[104.51px] h-[26.4px] flex gap-[11px] justify-end place-items-center cursor-pointer"
              }
            >
              {" "}
              <span
                className={
                  open
                    ? "text-[16px] leading-[24px] font- [400]"
                    : "text-[17.6px] leading-[24px] font-[400]"
                }
              >
                Edit info
              </span>{" "}
              <CiEdit size={22} />
            </div>
          ) : (
            <div
              onClick={() => handleEditOfficialDetails(post._id)}
              className={
                open
                  ? "w-[95px] h-[24px] flex gap-[10px] place-items-center justify-end cursor-pointer"
                  : "w-[104.51px] h-[26.4px] flex gap-[11px] place-items-center justify-end cursor-pointer"
              }
            >
              {" "}
              <span>Save</span> <LuSave size={22} />
            </div>
          )}
        </div>
        <hr />

        <div className="w-full h-full p-[20px] shadow-lg">
          <div>
            {!editOfficialDetailsButton ? (
              <>
                {" "}
                {employeeFilter.map((employee) => {
                  return (
                    <div
                      key={employee._id}
                      className={
                        open
                          ? "w-full h-fit flex justify-between gap-[30px]"
                          : "w-full h-fit flex justify-between gap-[30px]"
                      }
                    >
                      <div
                        className={
                          open
                            ? " w-[161.42px] h-[200.46px] flex flex-col  gap-[18.07px]"
                            : "w-[177.47px] h-[220.39px] flex flex-col  gap-[19.86px]"
                        }
                      >
                        <div className="w-full flex flex-col gap-[5px]">
                          <span
                            className={
                              open
                                ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                                : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                            }
                          >
                            Employee ID
                          </span>
                          <div
                            className={
                              open
                                ? "font-[500] text-[16px] leading-[24px]"
                                : "font-[500] text-[17.6px] leading-[26.4px]"
                            }
                          >
                            {employee.officialDetails.employeeId}
                          </div>
                        </div>

                        <div className="w-full flex flex-col gap-[5px]">
                          <span
                            className={
                              open
                                ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                                : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                            }
                          >
                            Employment Type
                          </span>
                          <div
                            className={
                              open
                                ? "font-[500] text-[16px] leading-[24px]"
                                : "font-[500] text-[17.6px] leading-[26.4px]"
                            }
                          >
                            {employee.officialDetails.employmentType}
                          </div>
                        </div>

                        <div className="w-full flex flex-col gap-[5px]">
                          <span
                            className={
                              open
                                ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                                : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                            }
                          >
                            Work Shedule
                          </span>
                          <div
                            className={
                              open
                                ? "font-[500] text-[16px] leading-[24px]"
                                : "font-[500] text-[17.6px] leading-[26.4px]"
                            }
                          >
                            {employee.officialDetails.workSchedule}
                          </div>
                        </div>
                      </div>

                      <div
                        className={
                          open
                            ? " w-[187.06px] h-[200.46px] flex flex-col  gap-[18.07px]"
                            : "w-[205.66px] h-[220.39px] flex flex-col  gap-[19.86px]"
                        }
                      >
                        <div className="w-full flex flex-col gap-[5px]">
                          <span
                            className={
                              open
                                ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                                : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                            }
                          >
                            Job Title
                          </span>
                          <div
                            className={
                              open
                                ? "font-[500] text-[16px] leading-[24px]"
                                : "font-[500] text-[17.6px] leading-[26.4px]"
                            }
                          >
                            {employee.officialDetails.jobTitle}
                          </div>
                        </div>

                        <div className="w-full flex flex-col gap-[5px]">
                          <span
                            className={
                              open
                                ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                                : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                            }
                          >
                            Department
                          </span>
                          <div
                            className={
                              open
                                ? "font-[500] text-[16px] leading-[24px]"
                                : "font-[500] text-[17.6px] leading-[26.4px]"
                            }
                          >
                            {employee.officialDetails.department}
                          </div>
                        </div>

                        <div className="w-full flex flex-col gap-[5px]">
                          <span
                            className={
                              open
                                ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                                : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                            }
                          >
                            Reporting Supervisor
                          </span>
                          <div
                            className={
                              open
                                ? "font-[500] text-[16px] leading-[24px]"
                                : "font-[500] text-[17.6px] leading-[26.4px]"
                            }
                          >
                            {employee.officialDetails.reportingOfficer}
                          </div>
                        </div>
                      </div>

                      <div
                        className={
                          open
                            ? " w-[267.26px] h-fit flex flex-col  gap-[18.07px]"
                            : "w-[294.01px] h-fit flex flex-col  gap-[19.86px]"
                        }
                      >
                        <div className="w-full flex flex-col gap-[5px]">
                          <span
                            className={
                              open
                                ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                                : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                            }
                          >
                            Region
                          </span>
                          <div
                            className={
                              open
                                ? "font-[500] text-[16px] leading-[24px]"
                                : "font-[500] text-[17.6px] leading-[26.4px]"
                            }
                          >
                            {employee.officialDetails.region}
                          </div>
                        </div>

                        <div className="w-full h-full flex flex-col gap-[5px]">
                          {/* <span
                            className={
                              open
                                ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                                : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                            }
                          >
                            Skills
                          </span> */}

                          {/* <MultipleSelectChip employeeSkills={employee.skills}/> */}
                          <span
                            className={
                              open
                                ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                                : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
                            }
                          >
                            Skills
                          </span>

                          <div
                            className={
                              employee.officialDetails.skills.length > 2
                                ? "py-[9px] px-[5px] flex flex-wrap gap-[10px] pr-[5px]"
                                : "py-[9px] px-[5px] flex flex-wrap gap-[10px] pr-[10px]"
                            }
                          >
                            {employee.officialDetails.skills
                              .map((val, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={
                                      open
                                        ? "py-[9px] px-[20px] bg-[#E0ECFC] rounded-[10px] border-[1px] border-[#176B87] font-[400] text-[14px] leading-[21px] text-[#176B87] text-nowrap"
                                        : "py-[9px] px-[20px] bg-[#E0ECFC] rounded-[10px] border-[1px] border-[#176B87] font-[400] text-[14px] leading-[21px] text-[#176B87] text-nowrap"
                                    }
                                  >
                                    {val}
                                  </div>
                                );
                              })
                              .reverse()}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <OfficialDetailsEditForm employee={employeeFilter} />
            )}
          </div>

          <div>
            <div
              className={
                open
                  ? "text-black opacity-70 my-[15px]"
                  : "text-black opacity-70 my-[20px]"
              }
            >
              Attachment
            </div>
            <>
              {employeeFilter.map(({ lastName, document }, index) => (
                <div
                  key={index}
                  className={
                    open
                      ? "w-full h-[44px] flex justify-between gap-3"
                      : "w-full h-[48.37px] flex justify-between gap-3"
                  }
                >
                  <a
                    className={
                      open
                        ? " bg-[#E1EDFD] w-fit border-[1px] rounded-xl border-[#a5b5bb] p-[10px] flex gap-[5px] justify-between place-items-center "
                        : "bg-[#E1EDFD] w-fit border-[1px] rounded-xl border-[#a5b5bb] p-[10px] flex gap-[8px] justify-between place-items-center"
                    }
                    href={document}
                    target="_blank"
                  >
                    <GoPaperclip size={24} />{" "}
                    <span className=" text-[16px] text-center">
                      {lastName}'s Employment Contract pdf
                    </span>
                  </a>
                  <a
                    className={
                      open
                        ? " bg-[#E1EDFD] border-[1px] rounded-xl border-[#a5b5bb] p-[10px] flex gap-[5px] justify-between place-items-center"
                        : "bg-[#E1EDFD] border-[1px] rounded-xl border-[#a5b5bb] p-[10px] flex gap-[8px] justify-between place-items-center"
                    }
                    href={document}
                    target="_blank"
                  >
                    <GoPaperclip size={24} />{" "}
                    <span className="text-center">
                      {lastName}'s Employment Contract pdf
                    </span>
                  </a>
                  <a
                    className={
                      open
                        ? " bg-[#E1EDFD] border-[1px] rounded-xl border-[#a5b5bb] p-[10px] flex gap-[5px]  justify-between place-items-center"
                        : "bg-[#E1EDFD] border-[1px] rounded-xl border-[#a5b5bb] p-[10px] flex gap-[8px] justify-between place-items-center"
                    }
                    href={document}
                    target="_blank"
                  >
                    <GoPaperclip size={24} />{" "}
                    <span className="text-center">
                      {lastName}'s Employment Contract pdf
                    </span>
                  </a>
                </div>
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
