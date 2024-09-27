import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useAxiosFetch } from "../hooks/UseAxiosFetch";
import {  toast } from 'react-toastify';

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
  const [editSurname, setEditSurname] = useState("");
  const [editMiddleName, setEditMiddleName] = useState("");
  const [editGender, setEditGender] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editDateOfBirth, setEditDateOfBirth] = useState("");
  const [editMaritalStatus, setEditMaritalStatus] = useState("");
  const [editReligion, setEditReligion] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editEducationalQualification, setEditEducationalQualification] = useState("");
  const [editNationality, setEditNationality] = useState("");
  const [editLanguageSpoken, setEditLanguageSpoken] = useState("");
  const [editEmergencyContactCode, setEditEmergencyContactCode] = useState("");
  const [editEmergencyContactPhone, setEditEmergencyContactPhone] = useState("");
  const [editEmergencyContactRelationship, setEditEmergencyContactRelationship] = useState("");

  const handleEditPersonalDetails = async (id) => {
    const edit = {
      id: (data.length + 1).toString(),
      firstName:editName,
        middleName:editMiddleName,
        lastName:editSurname,
        gender:editGender,
        email:editEmail,
        phoneNo:{phone: editPhone },
        address:editAddress,
        dateOfBirth:editDateOfBirth,
        maritalStatus:editMaritalStatus,
        religion:editRegion,
        educationalQualification:editEducationalQualification,
        nationality:editNationality,
        languageSpoken:editLanguageSpoken,
        emergencyContact: {
        
          phoneNo: { 
              code:editEmergencyContactCode,
              phone:editEmergencyContactPhone
           },
          relationship: editEmergencyContactRelationship
          
      },
     
    };

    toast.loading("Saving Details...")
    

    

    if (editName === "" || editEmail === "" || editDateOfBirth === "") {
      alert("fields cant be blank");
      return;
    } else {
      try {
        const response = await axios.patch(
          `https://hr360employeescrudbackend.onrender.com/employee/${id}`,
          edit
        );

        if (response.status === 200) {
          toast.dismiss()
          setEditName("");
        setEditSurname("");
        setEditMiddleName("");
        setEditGender("");
        setEditPhone("");
        setEditEmail("");
        setEditDateOfBirth("");
        setEditMaritalStatus("");
        setEditReligion("");
        setEditAddress("");
        setEditEducationalQualification("");
        setEditNationality("");
        setEditLanguageSpoken("");
        setEditEmergencyContactCode("");
        setEditEmergencyContactPhone("");
        setEditEmergencyContactRelationship("");
        setEditPersonalDetailsButton(false);

        setData(
          data.map((employee) =>
            employee._id === id ? { ...response.data } : employee
          )
        );
        }

        

        
      } catch (error) {
        
        setTimeout(() => {
          toast.dismiss()
        }, 3000);
        setTimeout(() => {
          toast.error(error.message)
        }, 3000);

        
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
  const [editSkills, setEditSkills] = useState("");

  const handleEditOfficialDetails = async (id) => {
    const edit = {
      id: (data.length + 1).toString(),
      officialDetails: {
        employeeId: editEmployeeId,
        jobTitle: editJobTitle,
        department: editDepartment,
        reportingOfficer:editReportingOfficer,
        workSchedule: editWorkSchedule,
        employmentType: editEmployementType,
        region: editRegion,
        skills: editSkills
      }
    };

    toast.loading("Saving Details...")

    if (editDepartment === "" || editReportingOfficer === "") {
      alert("fields cant be blank");
    } else {
      try {
        const response = await axios.patch(
          `https://hr360employeescrudbackend.onrender.com/employee/${id}`,
          edit
        );

        if (response.status === 200) {

          toast.dismiss()
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
          
        }

       
      } catch (error) {
        setTimeout(() => {
          toast.dismiss()
        }, 3000);
        setTimeout(() => {
          toast.error(error.message)
        }, 3000);
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
        editSurname,
        setEditSurname,
        editMiddleName,
        setEditMiddleName,
        editEducationalQualification,
        setEditEducationalQualification,
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
        editEducationalQualification, 
        setEditEducationalQualification,
        editNationality,
        setEditNationality,
        editLanguageSpoken,
        setEditLanguageSpoken,
        editEmergencyContactCode,
        setEditEmergencyContactCode,
        editEmergencyContactPhone, 
        setEditEmergencyContactPhone,
        editEmergencyContactRelationship,
        setEditEmergencyContactRelationship,
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
