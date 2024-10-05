import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const employeeContext = createContext();

export const addEmployeeContext = () => {
  return useContext(employeeContext);
};

const AddEmployeeContext = ({ children }) => {
  const [files, setFiles] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [addNewEmployee, setAddNewEmployee] = useState(false);

  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNoCode: "",
    phoneNo: "",
    address: "",
    dateOfBirth: "",
    maritalStatus: "",
    religion: "",
    educationalQualification: "",
    nationality: "",
    languageSpoken: "",
  });

  // Emergency Contact State
  const [emergencyContact, setEmergencyContact] = useState({
    name: "",
    phoneNoCode: "",
    phoneNo: "",
    relationship: "",
    address: "",
  });
  // Bank Details State
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountNumber: "",
    accountHoldersName: "",
    swiftCode: "",
  });

  // Official Details State
  const [officialDetails, setOfficialDetails] = useState({
    employeeId: "",
    jobTitle: "",
    department: "",
    email: "",
    phoneNoCode: "",
    phoneNo: "",
    reportingSupervisor: "",
    workSchedule: "",
    employmentType: "",
    region: "",
    role: "",
    basicSalary: "",
    startingDate: "",
    contractEndDate: "",
    skills: "",
  });

  // Handle changes for personal info
  const handleChangePersonalInfo = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle changes for emergency contact
  const handleChangeEmergencyContact = (e) => {
    const { name, value } = e.target;
    setEmergencyContact((prev) => ({ ...prev, [name]: value }));
  };

  // Handle changes for official details
  const handleChangeOfficialDetails = (e) => {
    const { name, value } = e.target;
    setOfficialDetails((prev) => ({ ...prev, [name]: value }));
  };
  // Handle changes for Bank details
  const handleChangeBankDetails = (e) => {
    const { name, value } = e.target;
    setBankDetails((prev) => ({ ...prev, [name]: value }));
  };

  const { middleName, ...otherPersonalProps } = personalInfo;
  const cantSavePersonalDetails = [...Object.values(otherPersonalProps)].every(
    Boolean
  );
  const { ...otherOfficalProps } = officialDetails;
  const cantSaveOfficialDetails = [...Object.values(otherOfficalProps)].every(
    Boolean
  );
  const { ...otherBankProps } = bankDetails;
  const cantSaveBankDetails = [...Object.values(otherBankProps)].every(Boolean);
  const { ...otherEmergencyProps } = emergencyContact;
  const cantSaveEmergencyDetails = [
    ...Object.values(otherEmergencyProps),
  ].every(Boolean);

  const postEmployeeData = async () => {
    const employeeData = {
      firstName: personalInfo.firstName,
      middleName: personalInfo.middleName,
      lastName: personalInfo.lastName,
      gender: personalInfo.gender,
      email: personalInfo.email,
      phoneNo: { code: personalInfo.phoneNoCode, phone: personalInfo.phoneNo },
      address: personalInfo.address,
      dateOfBirth: personalInfo.dateOfBirth,
      maritalStatus: personalInfo.maritalStatus,
      religion: personalInfo.religion,
      educationalQualification: personalInfo.educationalQualification,
      nationality: personalInfo.nationality,
      languageSpoken: personalInfo.languageSpoken,
      pdf: files,
      emergencyContact: {
        name: emergencyContact.name,
        phoneNo: {
          code: emergencyContact.phoneNoCode,
          phone: emergencyContact.phoneNo,
        },
        relationship: emergencyContact.relationship,
        address: emergencyContact.address,
      },
      officialDetails: {
        employeeId: officialDetails.employeeId,
        jobTitle: officialDetails.jobTitle,
        department: officialDetails.department,
        email: officialDetails.email,
        phoneNo: {
          code: officialDetails.phoneNoCode,
          phone: officialDetails.phoneNo,
        },
        reportingOfficer: officialDetails.reportingSupervisor,
        workSchedule: officialDetails.workSchedule,
        employmentType: officialDetails.employmentType,
        region: officialDetails.region,
        role: officialDetails.role,
        basicSalary: officialDetails.basicSalary,
        startingDate: officialDetails.startingDate,
        contractEndDate: officialDetails.contractEndDate,
        skills: officialDetails.skills.split(","),
      },
      bankDetails: {
        bankName: bankDetails.bankName,
        accountNumber: bankDetails.accountNumber,
        accountHolderName: bankDetails.accountHoldersName,
        bicCode: bankDetails.swiftCode,
      },
    };

    if (
      !/^[A-Z][a-z]+(\s[A-Z][a-z]+)?$/.test(personalInfo.firstName) ||
      !/^[A-Z][a-z]+(\s[A-Z][a-z]+)?$/.test(personalInfo.lastName)
    ) {
      setError(
        "First name, Middle name, and Last name must start with uppercase letter"
      );
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    if (
      !cantSaveBankDetails ||
      !cantSaveEmergencyDetails ||
      !cantSaveOfficialDetails ||
      !cantSavePersonalDetails ||
      !files
    ) {
      setError("All fields are required except middle name field");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    } else {
      toast.loading("Sending Data...");
      try {
        const response = await axios.post(
          "https://hr360employeescrudbackend.onrender.com/employee",
          employeeData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (response.status === 200) {
          setMessage(response.data.message);
          toast.dismiss();
          setAddNewEmployee((prev) => !prev);

          setOfficialDetails({
            employeeId: "",
            jobTitle: "",
            department: "",
            email: "",
            phoneNoCode: "",
            phoneNo: "",
            reportingSupervisor: "",
            workSchedule: "",
            employmentType: "",
            region: "",
            role: "",
            basicSalary: "",
            startingDate: "",
            contractEndDate: "",
            skills: "",
          });
          setPersonalInfo({
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            email: "",
            phoneNoCode: "",
            phoneNo: "",
            address: "",
            dateOfBirth: "",
            maritalStatus: "",
            religion: "",
            educationalQualification: "",
            nationality: "",
            languageSpoken: "",
          });
          setEmergencyContact({
            name: "",
            phoneNoCode: "",
            phoneNo: "",
            relationship: "",
            address: "",
          });
          setBankDetails({
            bankName: "",
            accountNumber: "",
            accountHoldersName: "",
            swiftCode: "",
          });
          setFiles(null);

          setTimeout(() => {
            setMessage("");
          }, 3000);
        }

      } catch (error) {
        if (error.response) {
          if (error.response.status === 400) {
            setError(error.response.data.error);
          } else {
            setError(error.message);
          }
        } else {
          setError("Network error");
        }

        setTimeout(() => {
          setError("");
        }, 5000);

        toast.dismiss();
      }
    }
  };

  return (
    <employeeContext.Provider
      value={{
        files,
        setFiles,
        postEmployeeData,
        handleChangeEmergencyContact,
        handleChangeOfficialDetails,
        handleChangePersonalInfo,
        personalInfo,
        emergencyContact,
        officialDetails,
        bankDetails,
        handleChangeBankDetails,
        message,
        error,
        addNewEmployee,
        setAddNewEmployee,
      }}
    >
      {children}
    </employeeContext.Provider>
  );
};

export default AddEmployeeContext;
