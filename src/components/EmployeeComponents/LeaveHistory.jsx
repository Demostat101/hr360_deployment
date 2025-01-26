

const LeaveHistory = () => {
  

  const header = [
    {
      head: "Date of Application",
    },
    {
      head: "Leave Type",
    },
    {
      head: "Leave Date",
    },
    {
      head: "No. of Days",
    },
    {
      head: "Status",
    },
  ];

  const Body = [
    {
      date: "Monday 29th Jan, 2022",
      leaveType: "Maternity Leave",
      leaveDate: "3rd Feb - 3rd Mar,2022",
      days: "30 Days",
      status: "Pending",
    },
    {
      date: "Monday 21st Jan, 2022",
      leaveType: "Maternity Leave",
      leaveDate: "3rd Feb - 3rd Mar,2022",
      days: "30 Days",
      status: "Approved",
    },
    {
      date: "Monday 30th Jan, 2022",
      leaveType: "Maternity Leave",
      leaveDate: "3rd Feb - 3rd Mar,2022",
      days: "30 Days",
      status: "Pending",
    },
    {
      date: "Monday 29th Jan, 2022",
      leaveType: "Maternity Leave",
      leaveDate: "3rd Feb - 3rd Mar,2022",
      days: "30 Days",
      status: "Pending",
    },
    {
      date: "Monday 29th Jan, 2022",
      leaveType: "Maternity Leave",
      leaveDate: "3rd Feb - 3rd Mar,2022",
      days: "30 Days",
      status: "Rejected",
    },
    {
      date: "Monday 29th Jan, 2022",
      leaveType: "Maternity Leave",
      leaveDate: "3rd Feb - 3rd Mar,2022",
      days: "30 Days",
      status: "Approved",
    },
    {
      date: "Monday 18th Jan, 2022",
      leaveType: "Maternity Leave",
      leaveDate: "3rd Feb - 3rd Mar,2022",
      days: "30 Days",
      status: "Approved",
    },
    {
      date: "Monday 29th Jan, 2022",
      leaveType: "Maternity Leave",
      leaveDate: "3rd Feb - 3rd Mar,2022",
      days: "30 Days",
      status: "Pending",
    },
    {
      date: "Monday 29th Jan, 2022",
      leaveType: "Maternity Leave",
      leaveDate: "3rd Feb - 3rd Mar,2022",
      days: "30 Days",
      status: "Rejected",
    },
    {
      date: "Monday 29th Jan, 2022",
      leaveType: "Maternity Leave",
      leaveDate: "3rd Feb - 3rd Mar,2022",
      days: "30 Days",
      status: "Pending",
    },
  ];

  return (
    <div className=" overflow-x-auto max-w-full hide-scrollbar">
      <table className="w-full payslip-table bg-white shadow-lg min-w-[60rem]">
        <thead className="payslip-head">
          <tr
            className="h-[62.62px] font-[600] text-[16px] leading-[24px] text-left header-tr"
          >
            <>
              {header.map(({ head }, index) => (
                <th key={index}>{head}</th>
              ))}
            </>
          </tr>
        </thead>
        <tbody>
          <>
            {Body.map(({ date, leaveType, leaveDate, days, status }, index) => {
              return (
                <tr
                  className="h-[62.62px] font-[400] text-[16.3px] leading-[24.45px] text-black opacity-60"
                  key={index}
                >
                  <td>{date}</td>
                  <td>{leaveType}</td>
                  <td>{leaveDate}</td>
                  <td>{days}</td>
                  <td
                    className={
                      status === "Approved"
                        ? "text-green-500"
                        : status === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }
                  >
                    {status}
                  </td>
                </tr>
              );
            })}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default LeaveHistory;
