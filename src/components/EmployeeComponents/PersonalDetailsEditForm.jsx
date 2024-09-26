import { editEmployeeContext } from "../../contexts/EditDetailsContext";

const PersonalDetailsEditForm = () => {
  const {
        open,
        editName,
        setEditName,
        editSurname,
        setEditSurname,
        editMiddleName,
        setEditMiddleName,
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
  } = editEmployeeContext();

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={
          open
            ? "w-full h-fit flex justify-between gap-[30px]"
            : "w-full h-fit flex justify-between"
        }
      >
        <div
          className={
            open
              ? "w-[211.69px] h-fit flex flex-col  gap-[18.07px]"
              : "w-[232.88px] h-fit flex flex-col  gap-[19.88px]"
          }
        >
          <div className="w-full flex gap-4 flex-col">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60 "
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Full Name
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="first Name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="Middle Name"
              value={editMiddleName}
              onChange={(e) => setEditMiddleName(e.target.value)}
            />
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="Surname"
              value={editSurname}
              onChange={(e) => setEditSurname(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Gender
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="Gender"
              value={editGender}
              onChange={(e) => setEditGender(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Phone No
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="Phone Number"
              value={editPhone}
              onChange={(e) => setEditPhone(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Email
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="email"
              placeholder="Omikay@gmail.com"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />
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
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Date of Birth
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="date"
              
              value={editDateOfBirth}
              onChange={(e) => setEditDateOfBirth(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Marital Status
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="marital status"
              value={editMaritalStatus}
              onChange={(e) => setEditMaritalStatus(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Religion
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="Religion"
              value={editReligion}
              onChange={(e) => setEditReligion(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Address
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="Address"
              value={editAddress}
              onChange={(e) => setEditAddress(e.target.value)}
            />
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
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Education
            </label>{" "}
            <br />
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="Education"
              value={editEducationalQualification}
              onChange={(e) => setEditEducationalQualification(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Nationality
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="Nationality"
              value={editNationality}
              onChange={(e) => setEditNationality(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Language Spoken
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="Language Spoken"
              value={editLanguageSpoken}
              onChange={(e) => setEditLanguageSpoken(e.target.value)}
            />
          </div>

          <div className="flex gap-4 flex-col border-2">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Emergency Contact
            </label>
            <input
              className={
                open
                  ? "w-full font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              
              value={editEmergencyContactCode}
              onChange={(e) => setEditEmergencyContactCode(e.target.value)}
            />
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="7045237883"
              value={editEmergencyContactPhone}
              onChange={(e) => setEditEmergencyContactPhone(e.target.value)}
            />
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              type="text"
              placeholder="brother, sister, father"
              value={editEmergencyContactRelationship}
              onChange={(e) => setEditEmergencyContactRelationship(e.target.value)}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalDetailsEditForm;
