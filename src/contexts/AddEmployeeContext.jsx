

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const employeeContext = createContext();

export const addEmployeeContext = ()=>{
    return useContext(employeeContext)
}



const AddEmployeeContext = ({children}) => {
    const [files, setFiles] = useState("");
     // Personal Information State
     const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email: '',
        phoneNoCode: '',
        phoneNo: '',
        address: '',
        dateOfBirth: '',
        maritalStatus: '',
        religion: '',
        educationalQualification: '',
        nationality: '',
        languageSpoken: '',
    });

    // Emergency Contact State
    const [emergencyContact, setEmergencyContact] = useState({
        name: '',
        phoneNoCode: '',
        phoneNo: '',
        relationship: '',
        address: '',
    });
    // Bank Details State
    const [bankDetails, setBankDetails] = useState({
        bankName: '',
        accountNumber: '',
        accountHoldersName: '',
        swiftCode: ''
    });

    // Official Details State
    const [officialDetails, setOfficialDetails] = useState({
        employeeId: '',
        jobTitle: '',
        department: '',
        email: '',
        phoneNoCode: '',
        phoneNo: '',
        reportingSupervisor: '',
        workSchedule: '',
        employmentType: '',
        region: '',
        basicSalary: '',
        startingDate: '',
        contractEndDate: '',
        skills: '',
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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log({ personalInfo, emergencyContact, officialDetails });
    // };

    

    
    // console.log(formData.phoneNo);
    // console.log(formData.phoneNoCode);
    console.log(personalInfo.firstName);
    // console.log(formData.gender);
    // console.log(formData.emergencyContactName);
    // console.log(formData.emergencyContactPhoneNo);
    // console.log(formData.emergencyContactPhoneNoCode);
    
    // console.log(formData.officialDetailsPhoneNo);
    // console.log(formData.officialDetailsPhoneNoCode);
    console.log(personalInfo.middleName);
    // console.log(formData.lastName);
    // console.log(formData.email);
    // console.log(formData.address);
    // console.log(formData.dateOfBirth);
    // console.log(formData.maritalStatus);
    // console.log(formData.religion);
    // console.log(formData.educationalQualification);
    // console.log(formData.nationality);
    // console.log(formData.languageSpoken);
    // console.log(formData.emergencyContactName);
    // console.log(formData.emergencyContactRelationship);
    // console.log(formData.emergencyContactAddress);
    // console.log(formData.officialDetailsEmployeeId);
    // console.log(formData.officialDetailsJobTitle);
    // console.log(formData.officialDetailsDepartment);
    // console.log(formData.officialDetailsEmail);
    // console.log(formData.officialDetailsReportingSupervisor);
    // console.log(formData.officialDetailsWorkSchedule);
    // console.log(formData.officialDetailsEmploymentType);
    // console.log(formData.officialDetailsRegion);
    // console.log(formData.officialDetailsBasicSalary);
    // console.log(formData.officialDetailsStartingDate);
    // console.log(formData.officialDetailsContractEndDate);
    // console.log(formData.officialDetailsSkills.split(","));
    // console.log(formData.bankName);
    // console.log(formData.accountNumber);
    // console.log(formData.accountHoldersName);
    // console.log(formData.swiftCode);
    // console.log(files);
    

const postEmployeeData = async () => {
    // event.preventDefault()
    // console.log(isDefaultPrevented());
    
    const employeeData = {
        firstName:personalInfo.firstName,
        middleName:personalInfo.middleName,
        lastName:personalInfo.lastName,
        gender:personalInfo.gender,
        email:personalInfo.email,
        phoneNo:{ code: personalInfo.phoneNoCode, phone: personalInfo.phoneNo },
        address:personalInfo.address,
        dateOfBirth:personalInfo.dateOfBirth,
        maritalStatus:personalInfo.maritalStatus,
        religion:personalInfo.religion,
        educationalQualification:personalInfo.educationalQualification,
        nationality:personalInfo.nationality,
        languageSpoken:personalInfo.languageSpoken,
        file:files,
        emergencyContact: {
            name: emergencyContact.name,
            phoneNo: { 
                code:emergencyContact.phoneNoCode,
                phone:emergencyContact.phoneNo
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
          }
    }
    try {
        const response = await axios.post('http://localhost:4501/employee', employeeData);
        console.log(response.data);
    } catch (error) {
        console.error('Error posting data:', error);
    }
};


    





  return (
    <employeeContext.Provider value={{files,setFiles,postEmployeeData,
        handleChangeEmergencyContact,
        handleChangeOfficialDetails,
        handleChangePersonalInfo,
        personalInfo,
        emergencyContact,
        officialDetails,
        bankDetails,
        handleChangeBankDetails

    }}>
        {children}
    </employeeContext.Provider>
  )
}

export default AddEmployeeContext
