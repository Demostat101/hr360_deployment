

import { createContext, useContext, useEffect, useState } from "react";

const employeeContext = createContext();

export const addEmployeeContext = ()=>{
    return useContext(employeeContext)
}



const AddEmployeeContext = ({children}) => {
    const [files, setFiles] = useState(null);
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

    const [form,setForm] = useState(sessionStorage.getItem("form"))

    console.log(form);
    
    

    useEffect(()=>{
        sessionStorage.setItem("form", formData)
    },[formData])
    

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
        } else {
            setFormData((prevEmployee) => ({
                ...prevEmployee,
                [name]: value,
            }));
        }
    };
    


  return (
    <employeeContext.Provider value={{formData,handleInputChange,files,setFiles}}>
        {children}
    </employeeContext.Provider>
  )
}

export default AddEmployeeContext
