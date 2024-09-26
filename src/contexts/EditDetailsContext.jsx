import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useAxiosFetch } from "../hooks/UseAxiosFetch";

export const editContext = createContext();

export const editEmployeeContext = () => {
  return useContext(editContext);
};

export const EditDetailsContext = ({ children }) => {
  const [editPersonalDetailsButton, setEditPersonalDetailsButton] =
    useState(false);
  const [editOfficialDetailsButton, setEditOfficialDetailsButton] =
    useState(false);

  const { data, setData ,isLoading} = useAxiosFetch(`https://hr360employeescrudbackend.onrender.com/employees`);

  

  // Handle Edit Personal Employee Details

  const [editName, setEditName] = useState("");
  const [editGender, setEditGender] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editDateOfBirth, setEditDateOfBirth] = useState("");
  const [editMaritalStatus, setEditMaritalStatus] = useState("");
  const [editReligion, setEditReligion] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editEducation, setEditEducation] = useState("");
  const [editNationality, setEditNationality] = useState("");
  const [editLanguage, setEditLanguage] = useState("");
  const [editEmergencyContact, setEditEmergencyContact] = useState("");

  const handleEditPersonalDetails = async (id) => {
    const edit = {
      id: (data.length + 1).toString(),
      name: editName,
      gender: editGender,
      phone: editPhone,
      email: editEmail,
      dob: editDateOfBirth,
      maritalStatus: editMaritalStatus,
      Religion: editReligion,
      address: editAddress,
      education: editEducation,
      Nationality: editNationality,
      language: editLanguage,
      emergencyContact: editEmergencyContact,
    };

    if (editName === "" || editEmail === "") {
      alert("fields cant be blank");
    } else {
      try {
        const response = await axios.patch(
          `https://hr360employeescrudbackend.onrender.com/employee/${id}`,
          edit
        );

        setEditName("");
        setEditGender("");
        setEditPhone("");
        setEditEmail("");
        setEditDateOfBirth("");
        setEditMaritalStatus("");
        setEditReligion("");
        setEditAddress("");
        setEditEducation("");
        setEditNationality("");
        setEditLanguage("");
        setEditEmergencyContact("");
        setEditPersonalDetailsButton(false);

        setData(
          data.map((employee) =>
            employee._id === id ? { ...response.data } : employee
          )
        );
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }
  };

  // Handle Edit Official Details

  const [editEmployeeId, setEditEmployeeId] = useState("");
  const [editEmployementType, setEditEmployementType] = useState("");
  const [editWorkSchedule, setEditWorkSchedule] = useState("");
  const [editJobTitle, setEditJobTitle] = useState("");
  const [editDepartment, setEditDepartment] = useState("");
  const [editReportingOfficer, setEditReportingOfficer] = useState("");
  const [editRegion, setEditRegion] = useState("");
  const [editSkills, setEditSkills] = useState([]);

  const handleEditOfficialDetails = async (id) => {
    const edit = {
      id: (data.length + 1).toString(),
      empID: editEmployeeId,
      empType: editEmployementType,
      schedule: editWorkSchedule,
      job: editJobTitle,
      department: editDepartment,
      reportingSupervisor: editReportingOfficer,
      region: editRegion,
      skills: editSkills,
    };

    if (editDepartment === "" || editReportingOfficer === "") {
      alert("fields cant be blank");
    } else {
      try {
        const response = await axios.patch(
          `https://hr360employeescrudbackend.onrender.com/employee/${id}`,
          edit
        );

        setEditEmployeeId("");
        setEditEmployementType("");
        setEditWorkSchedule("");
        setEditJobTitle("");
        setEditDepartment("");
        setEditReportingOfficer("");
        setEditRegion("");
        setEditSkills();
        setEditOfficialDetailsButton(false);

        setData(
          data.map((employee) =>
            employee._id === id ? { ...response.data } : employee
          )
        );
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }
  };

  return (
    <editContext.Provider
      value={{
        editPersonalDetailsButton,
        setEditPersonalDetailsButton,
        editName,
        setEditName,
        editGender,
        setEditGender,
        editPhone,
        setEditPhone,
        editEmail,
        setEditEmail,
        editDateOfBirth,
        setEditDateOfBirth,
        editMaritalStatus,
        setEditMaritalStatus,
        editReligion,
        setEditReligion,
        editAddress,
        setEditAddress,
        editEducation,
        setEditEducation,
        editNationality,
        setEditNationality,
        editLanguage,
        setEditLanguage,
        editEmergencyContact,
        setEditEmergencyContact,
        handleEditPersonalDetails,
        editOfficialDetailsButton,
        setEditOfficialDetailsButton,
        handleEditOfficialDetails,
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
        editSkills,
        setEditSkills,
        data,
        isLoading
      }}
    >
      {children}
    </editContext.Provider>
  );
};
