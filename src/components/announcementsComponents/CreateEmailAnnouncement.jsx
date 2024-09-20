import { useRef, useState } from "react";
import { PiUploadThin } from "react-icons/pi";

const CreateEmailAnnouncement = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {};

  return (
    <div className="w-full  p-[20px]">
      <div className="w-full flex flex-col place-items-center gap-[40px] justify-center">
        <div className="flex flex-col text-center">
          <span className="font-[600] text-[26px] leading-[39px]">
            Create Announcement
          </span>
          <p className="font-[400] text-[18px] leading-[27px]">
            Share important details with your co-workers
          </p>
        </div>

        <div className="w-[60%] flex flex-col p-[40px] bg-white rounded-lg">
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className=" flex flex-col gap-[10px] bg-white"
          >
            <span className="flex flex-col gap-[10px]  w-full h-[94px]">
              <label
                className="font-[400] text-[16px] leading-[24px]"
                htmlFor="title"
              >
                <span className="text-[red]">*</span>Title
              </label>
              <input
                className="border-[2px] border-solid border-[#ECEEF6] rounded-[5px] h-[60px] focus:outline-none"
                type="text"
                id="title"
                name="title"
                required
              />
            </span>{" "}
            <span className="flex flex-col gap-[10px]  w-full h-[94px]">
              <label
                className="font-[400] text-[16px] leading-[24px]"
                htmlFor="recipient"
              >
                <span className="text-[red]">*</span>Recipient
              </label>
              <input
                className="border-[2px] border-solid border-[#ECEEF6] rounded-[5px] h-[60px] focus:outline-none"
                type="text"
                id="recipient"
                name="recipient"
                required
              />
            </span>{" "}
            <span className="flex flex-col gap-[10px]  w-full h-[129px]">
              <label
                className="font-[400] text-[16px] leading-[24px]"
                htmlFor="message"
              >
                <span className="text-[red]">*</span>Message
              </label>
              <textarea
                className="border-[2px] border-solid border-[#ECEEF6] rounded-[5px] h-[95px] focus:outline-none"
                type="text"
                id="message"
                name="message"
                required
              />
            </span>{" "}
            <div className="flex flex-col gap-[10px]  w-[100%]">
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
                    className="border-[2px] border-solid border-[#ECEEF6] rounded-[5px] h-[126px] focus:outline-none text-center flex flex-col justify-center place-items-center font-[400] text-[10px] text-black opacity-60"
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
                        onChange={(event) => setFiles(event.target.files)}
                        hidden
                        ref={inputRef}
                      />
                    </div>
                  </div>
                )}

                {files && (
                  <div>
                    <span>
                      {Array.from(files).map((file, index) => file.name)}
                    </span>
                    <div>
                      <button type="button" onClick={() => setFiles(null)}>
                        Cancle
                      </button>
                      <button type="button" onClick={handleUpload}>
                        Upload
                      </button>
                    </div>
                  </div>
                )}
              </>
            </div>
            <button className="w-full text-white font-[500] text-[24px] leading-[36px] bg-[#176B87] px-[20px] py-[10px] rounded-[10px] mt-[60px]">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEmailAnnouncement;
