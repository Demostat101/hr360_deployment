import { useEffect, useRef, useState } from "react";
import { PiUploadThin } from "react-icons/pi";
import { addEmployeeContext } from "../../contexts/AddEmployeeContext";

const PersonalDetailsForm = () => {
  const {files,setFiles,handleChangePersonalInfo,personalInfo,handleChangeEmergencyContact,emergencyContact} = addEmployeeContext();
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const filesArray = [...event.dataTransfer.files];
    setFiles(filesArray);
};

// const handleSubmit =()=>{
//   const formData = new FormData()
//   formData.append("file", files)
//   console.log(files);
  
// }

console.log(files.name);



  



// const [val, setVal] = useState("")
//   const restApi = async ()=>{
//     try {
//       const res = await fetch("https://restcountries.com/v3.1/all");

//       const data = await res.json()
//       console.log(data);
//       console.log(res);

//       let mapper = data.map(({idd})=> idd)
//       setVal(mapper)
//       console.log(mapper);
      
      
//     } catch (error) {
//       console.log(error);
      
//     }

//   }

//   useEffect(()=>{
//     restApi()
//   },[])

// console.log(val.root);


  return (
    <div>
      <form
        className="flex flex-col gap-[30px]"
        action=""
        onSubmit={e => e.preventDefault()}
      >
        {/* Container holding top details */}
        <div className="flex flex-col gap-[13.8px]">
          <div className="flex justify-between">
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="fname"
              >
                First Name
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="fname"
               onChange={handleChangePersonalInfo}
                name="firstName"
                value={personalInfo.firstName}
                required
              />
            </span>{" "}
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="middlename"
              >
                Middle Name
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="middlename"
                value={personalInfo.middleName}
                onChange={handleChangePersonalInfo}
                name="middleName"
              
              />
            </span>
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="lastname"
                value={personalInfo.lastName}
                onChange={handleChangePersonalInfo}
                name="lastName"
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
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none text-black opacity-60 text-[10.12px] font-[500]"
                value={personalInfo.gender}
                onChange={handleChangePersonalInfo}
                name="gender"
                id="gender"
              >
                <option value="">- Select -</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </span>{" "}
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="email"
                id="email"
                value={personalInfo.email}
                onChange={handleChangePersonalInfo}
                name="email"
                required
              />
            </span>
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="phone"
              >
                Phone No
              </label>
              <span className="flex justify-between">
                <select
                  className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                  name="phoneNoCode"
                  id=""
                  value={personalInfo.phoneNoCode}
                onChange={handleChangePersonalInfo}
                >
                  <option value="+234">+234</option>
                  <option value="+1">+1</option>
                  <option value="+222">222</option>
                </select>
                <input
                  className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none w-[65%]"
                  type="tel"
                  id="phone"
                  name="phoneNo"
                  
                  value={personalInfo.phoneNo}
                onChange={handleChangePersonalInfo}
                  required
                />
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-[6.9px]  w-[100%]">
            <label
              className="font-[500] text-[12.37px] leading-[18.55px]"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
              type="text"
              id="address"
              name="address"
              value={personalInfo.address}
               onChange={handleChangePersonalInfo}
              
              required
            />
          </div>{" "}
          <div
            className={open ? "flex justify-between" : "flex justify-between"}
          >
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="date"
                id="dob"
                name="dateOfBirth"
                value={personalInfo.dateOfBirth}
                onChange={handleChangePersonalInfo}
                required
              />
            </span>{" "}
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="maritalstatus"
              >
                Marital Status
              </label>
              <select
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none text-black opacity-60 text-[10.12px] font-[500]"
                name="maritalStatus"
                value={personalInfo.maritalStatus}
                onChange={handleChangePersonalInfo}
                id="maritalstatus"
              >
                <option value="">- Select -</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </span>
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="religion"
              >
                Religion
              </label>
              <select
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none text-black opacity-60 text-[10.12px] font-[500]"
                name="religion"
                value={personalInfo.religion}
                onChange={handleChangePersonalInfo}
                id="religion"
              >
                <option value="">- Select -</option>
                <option value="Christian">Christian</option>
                <option value="Muslim">Muslim</option>
              </select>
            </span>
          </div>
          <div className="flex flex-col gap-[6.9px]  w-[100%]">
            <label
              className="font-[500] text-[12.37px] leading-[18.55px]"
              htmlFor="education"
            >
              Educational Qualification
            </label>
            <input
              className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
              type="text"
              id="education"
              name="educationalQualification"
              value={personalInfo.educationalQualification}
                onChange={handleChangePersonalInfo}
              required
            />
          </div>{" "}
          <div
            className={open ? "flex justify-between" : "flex justify-between"}
          >
            <span className="flex flex-col gap-[6.9px]  w-[47%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="nationality"
              >
                Nationality
              </label>
              <select
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                name="nationality"
                value={personalInfo.nationality}
                onChange={handleChangePersonalInfo}
                id="nationality"
              >
                <option value="">Select</option>
                <option value="Nigeria">Nigeria</option>
                <option value="London">London</option>
              </select>
            </span>
            <span className="flex flex-col gap-[6.9px]  w-[47%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="language"
              >
                Language Spoken
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="language"
                name="languageSpoken"
                value={personalInfo.languageSpoken}
                onChange={handleChangePersonalInfo}
                required
              />
            </span>{" "}
          </div>
        </div>

        {/* Emergency contact  */}

        <div className="flex flex-col gap-[20px]">
          <div className="font-[600] text-[14.91px] leading-[22.37px] text-black opacity-80">
            Emergency Contact
          </div>
          <div className="flex justify-between">
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="name"
                name="name"
                value={emergencyContact.name}
                onChange={handleChangeEmergencyContact}
                required
              />
            </span>{" "}
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="contactphone"
              >
                Phone No
              </label>
              <span className="flex justify-between">
                <select
                  className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                  name="phoneNoCode"
                  value={emergencyContact.phoneNoCode}
                onChange={handleChangeEmergencyContact}
                  id=""
                >
                  <option value="234">+234</option>
                  <option value="1">+1</option>
                  <option value="+222">222</option>
                </select>
                <input
                  className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none w-[65%]"
                  type="tel"
                  id="contactphone"
                  name="phoneNo"
                  value={emergencyContact.phoneNo}
                  onChange={handleChangeEmergencyContact}
                  required
                />
              </span>
            </span>
            <span className="flex flex-col gap-[6.9px]  w-[30%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px]"
                htmlFor="relationship"
              >
                Relationship
              </label>
              <input
                className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
                type="text"
                id="relationship"
                name="relationship"
                value={emergencyContact.relationship}
                  onChange={handleChangeEmergencyContact}
                required
              />
            </span>
          </div>
          <div className="flex flex-col gap-[6.9px]  w-[100%]">
            <label
              className="font-[500] text-[12.37px] leading-[18.55px]"
              htmlFor="contactaddress"
            >
              Address
            </label>
            <input
              className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[36.79px] focus:outline-none"
              type="text"
              id="contactaddress"
              name="address"
              value={emergencyContact.address}
              onChange={handleChangeEmergencyContact}
              required
            />
          </div>{" "}
          <div
            className={open ? "flex justify-between" : "flex justify-between"}
          >
            <div className="flex flex-col gap-[20px]  w-[100%]">
              <label
                className="font-[500] text-[12.37px] leading-[18.55px] text-black opacity-80"
                htmlFor="file"
              >
                Add Attachment
              </label>

              <>
                {!files && (
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="border-[1.55px] border-solid border-[#ECEEF6] rounded-[7.73px] h-[180.6px] focus:outline-none text-center flex flex-col justify-center place-items-center font-[400] text-[12px] text-black opacity-60"
                  >
                    <div
                      onClick={() => inputRef.current.click()}
                      className="flex flex-col place-items-center cursor-pointer"
                    >
                      <div>
                        Click or Drag a file to the <br /> area to upload
                      </div>
                      <PiUploadThin size={24} />
                      <input
                        type="file"
                        id="file"
                        name="file"
                        accept="application/pdf"
                        onChange={(event) => setFiles(event.target.files[0])}
                        hidden
                        ref={inputRef}
                      />
                    </div>
                  </div>
                )}

                {files && (
                  <div>
                    <span>
                      {/* {Array.from(files).map((file, index) => file.name)} */}
                      {files.name}
                    </span>
                    <div>
                      <button type="button" onClick={() => setFiles(null)}>
                        Cancel
                      </button>
                    
                     
                    </div>
                  </div>
                )}
              </>
            </div>{" "}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
