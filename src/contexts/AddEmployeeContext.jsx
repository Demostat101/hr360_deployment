

import { createContext, useContext, useEffect, useState } from "react";

const employeeContext = createContext();

export const addEmployeeContext = ()=>{
    return useContext(employeeContext)
}



const AddEmployeeContext = ({children}) => {
    const [files, setFiles] = useState("");
    const [file, setFile] = useState("");
    const [ formData, setFormData] = useState({
        firstName:"",
        middleName:"",
        lastName:"",
        gender:"",
        email:"",
        phoneNo:{ code: '', phone: '' },
        address:"",
        dateOfBirth:"",
        maritalStatus:"",
        religion:"",
        educationalQualification:"",
        nationality:"",
        languageSpoken:"",
        file:files,
        emergencyContactName:"",
        emergencyContactPhoneNo:{ code: '', phone: '' },
        emergencyContactRelationship:"",
        emergencyContactAddress:"",
        officialDetailsEmployeeId:"",
        officialDetailsJobTitle:"",
        officialDetailsDepartment:"",
        officialDetailsEmail:"",
        officialDetailsPhoneNo:{ code: '', phone: '' },
        officialDetailsReportingSupervisor:"",
        officialDetailsWorkSchedule:"",
        officialDetailsEmploymentType:"",
        officialDetailsRegion:"",
        officialDetailsBasicSalary:"",
        officialDetailsStartingDate:"",
        officialDetailsContractEndDate:"",
        officialDetailsSkills:"",
        bankName:"",
        accountNumber:"",
        accountHoldersName:"",
        swiftCode:""
    })

    

    
    console.log(formData.phoneNo.phone);
    console.log(formData.phoneNo.code);
    console.log(formData.firstName);
    console.log(formData.gender);
    console.log(formData.emergencyContactName);
    console.log(formData.emergencyContactPhoneNo.phone);
    console.log(formData.emergencyContactPhoneNo.code);
    
    console.log(formData.officialDetailsPhoneNo.phone);
    console.log(formData.officialDetailsPhoneNo.code);
    console.log(formData.middleName);
    console.log(formData.lastName);
    console.log(formData.email);
    console.log(formData.address);
    console.log(formData.dateOfBirth);
    console.log(formData.maritalStatus);
    console.log(formData.religion);
    console.log(formData.educationalQualification);
    console.log(formData.nationality);
    console.log(formData.languageSpoken);
    console.log(formData.emergencyContactName);
    console.log(formData.emergencyContactRelationship);
    console.log(formData.emergencyContactAddress);
    console.log(formData.officialDetailsEmployeeId);
    console.log(formData.officialDetailsJobTitle);
    console.log(formData.officialDetailsDepartment);
    console.log(formData.officialDetailsEmail);
    console.log(formData.officialDetailsReportingSupervisor);
    console.log(formData.officialDetailsWorkSchedule);
    console.log(formData.officialDetailsEmploymentType);
    console.log(formData.officialDetailsRegion);
    console.log(formData.officialDetailsBasicSalary);
    console.log(formData.officialDetailsStartingDate);
    console.log(formData.officialDetailsContractEndDate);
    console.log(formData.officialDetailsSkills.split(","));
    console.log(formData.bankName);
    console.log(formData.accountNumber);
    console.log(formData.accountHoldersName);
    console.log(formData.swiftCode);
    // console.log(files.name);
    
    


    

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        // Check if the name includes 'phoneNo' and split the name to get the correct key
        if (name.startsWith('phoneNo.')) {
            const key = name.split('.')[1]; // Get 'code' or 'phone'
            setFormData((prevEmployee) => ({
                ...prevEmployee,
                phoneNo: {
                    ...prevEmployee.phoneNo,
                    [key]: value, // Update the specific field in phoneNo
                },
            }));
        }
        if (name.startsWith('emergencyContactPhoneNo.')) {
            const key = name.split('.')[1]; // Get 'code' or 'phone'
            setFormData((prevEmployee) => ({
                ...prevEmployee,
                emergencyContactPhoneNo: {
                    ...prevEmployee.emergencyContactPhoneNo,
                    [key]: value, // Update the specific field in phoneNo
                },
            }));
        } 
        if (name.startsWith('officialDetailstPhoneNo.')) {
            const key = name.split('.')[1]; // Get 'code' or 'phone'
            setFormData((prevEmployee) => ({
                ...prevEmployee,
                officialDetailstPhoneNo: {
                    ...prevEmployee.officialDetailstPhoneNo,
                    [key]: value, // Update the specific field in phoneNo
                },
            }));
        }
         setFormData((prevEmployee) => ({
                ...prevEmployee,
                [name]: value,
            }));
        
    };
    


  return (
    <employeeContext.Provider value={{formData,handleInputChange,files,setFiles}}>
        {children}
    </employeeContext.Provider>
  )
}

export default AddEmployeeContext
