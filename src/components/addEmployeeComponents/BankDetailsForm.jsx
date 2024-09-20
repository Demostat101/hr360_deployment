const BankDetailsForm = () => {
  return (
    <div className="w-full flex flex-col  place-items-center">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-[450px] flex flex-col gap-[40px] my-[20px]"
      >
        <span className="flex flex-col gap-[2px]  w-full h-[73px]">
          <label
            className="font-[500] text-[14px] leading-[21px]"
            htmlFor="bank"
          >
            Bank Name
          </label>
          <input
            className="border-[1.63px] border-solid border-[#ECEEF6] rounded-[8.16px] h-[50px] focus:outline-none"
            type="text"
            id="bank"
            name="bank"
            required
          />
        </span>{" "}
        <span className="flex flex-col gap-[2px]  w-full h-[73px]">
          <label
            className="font-[500] text-[14px] leading-[21px]"
            htmlFor="account"
          >
            Account Number
          </label>
          <input
            className="border-[1.63px] border-solid border-[#ECEEF6] rounded-[8.16px] h-[50px] focus:outline-none"
            type="text"
            id="account"
            name="account"
            required
          />
        </span>{" "}
        <span className="flex flex-col gap-[2px]  w-full h-[73px]">
          <label
            className="font-[500] text-[14px] leading-[21px]"
            htmlFor="accholder"
          >
            Account Holder's Name
          </label>
          <input
            className="border-[1.63px] border-solid border-[#ECEEF6] rounded-[8.16px] h-[50px] focus:outline-none"
            type="text"
            id="accholder"
            name="accholder"
            required
          />
        </span>{" "}
        <span className="flex flex-col gap-[2px]  w-full h-[73px]">
          <label
            className="font-[500] text-[14px] leading-[21px]"
            htmlFor="biccode"
          >
            Swift/BIC Code
          </label>
          <input
            className="border-[1.63px] border-solid border-[#ECEEF6] rounded-[8.16px] h-[50px] focus:outline-none"
            type="text"
            id="biccode"
            name="biccode"
            required
          />
        </span>{" "}
      </form>
    </div>
  );
};

export default BankDetailsForm;
