import Pagination from "@mui/material/Pagination";
import { UsePagination } from "./UsePagination";
import { Link } from "react-router-dom";
import {
  createTheme,
  PaginationItem,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useMemo } from "react";
import { useTable } from "react-table";
import { Context } from "../../contexts/DashBoardContext";
import { addEmployeeContext } from "../../contexts/AddEmployeeContext";
import axios from "axios";
import { useDebounce } from "../../hooks/UseDebounce";

const EmpTable = () => {
  const { searchName, searchEmpID, handleCheckBox, searchEmpRegion,data,setData } =
    Context();
  const { addNewEmployee, setAddNewEmployee } = addEmployeeContext();
  const debouncedSearchName = useDebounce(searchName, 1000)
  const debouncedSearchEmpID = useDebounce(searchEmpID, 1000)

  // TO update table after a new employee has been added
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://hr360employeescrudbackend.onrender.com/employees"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (addNewEmployee || data.length === 0) {
      fetchData();
      setAddNewEmployee(false);
    }
  }, [addNewEmployee, data.length]);

  // To change pagination background color

  const { palette } = createTheme();
  const theme = createTheme({
    palette: {
      primaryBlue: palette.augmentColor({ color: { main: "#176B87" } }),
    },
  });

  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    // currentPageIndex,
    setStartPageIndex,
  ] = UsePagination(9, data.length);
  

  

  const filteredEmployeeList = useMemo(
    () =>
      data?.filter(
          (employee) =>
            (employee?.firstName.toLowerCase().includes(debouncedSearchName.toLowerCase()) ||
              employee?.lastName?.toLowerCase().includes(debouncedSearchName.toLowerCase())) &&
            employee?.officialDetails.employeeId.toString().includes(debouncedSearchEmpID.toString()) &&
            employee?.officialDetails.region.toLowerCase().includes(searchEmpRegion.toLowerCase())
        )
        .slice(
          startPageIndex * endPageIndex,
          startPageIndex * endPageIndex + endPageIndex
        ),
    [
      startPageIndex,
      debouncedSearchName,
      debouncedSearchEmpID,
      searchEmpRegion,
      data
    ]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Emp.ID ⁝",
        accessor: "empID",
      },
      {
        Header: "Name ⁝",
        accessor: "name",
      },
      {
        Header: "Department ⁝",
        accessor: "department",
      },
      {
        Header: "Role ⁝",
        accessor: "role",
      },
      {
        Header: "Email Address ⁝",
        accessor: "email",
      },
      {
        Header: "Emp Type ⁝",
        accessor: "empType",
      },
      {
        Header: "Status ⁝",
        accessor: "active",
      },
      {
        Header: "Details ⁝",
      },
    ],
    []
  );

  const table = useTable({ columns, data: filteredEmployeeList });
  const { getTableProps, headerGroups } = table;

  return (
    <div className="w-full table-container text-nowrap">
     <div className=" overflow-x-auto hide-scrollbar">
     <table {...getTableProps()}>
        {/* header */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
            key={headerGroup.Header}
              className="w-[100%] h-[62.62px] px-4 bg-[#E7F0FD] "
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => {
                return (
                  <th className="px-5 xl:px-0" key={column.Header} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        {/* body */}

        <tbody
          className=" w-full h-[62.62px] text-[#8F8F8F] th-bb"
        >
          {filteredEmployeeList.map((val) => {
            return (
              <tr
                key={val._id}
                className=" w-full h-[62.62px] text-[#8F8F8F] th-bb"
              >
                <td className="px-5 xl:px-0">
                  <input
                    className="ml-[15px] border-[#8F8F8F]"
                    onChange={() => handleCheckBox(val._id)}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span className="pl-[10px]">
                    {val.officialDetails.employeeId}
                  </span>
                </td>
                <td className="flex gap-[8px] place-items-center px-5 xl:px-0">
                  <span>{val.firstName}</span> <span>{val.lastName}</span>
                </td>
                <td className="px-5 xl:px-0">{val.officialDetails.department}</td>
                <td className="px-5 xl:px-0">{val.officialDetails.role}</td>
                <td className="px-5 xl:px-0">{val.officialDetails.email}</td>
                <td className="px-5 xl:px-0">{val.officialDetails.employmentType}</td>
                <td className="px-5 xl:px-0">
                  {val.active ? (
                    <div className="text-green-400">Active</div>
                  ) : (
                    <div className="text-red-500">On leave</div>
                  )}
                </td>
                <td className="px-5 xl:px-0">
                  <Link
                    to={`${val._id}`}
                    className="link text-[#176B87] bg-white"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
     </div>
      <ThemeProvider theme={theme}>
        <Pagination
          className="flex flex-col place-items-end pt-[15px] pb-[15px]"
          color="primaryBlue"
          count={totalPages}
          onChange={(event, value) => setStartPageIndex(value - 1)}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => <Typography variant="label">Prev</Typography>,
                next: () => <Typography variant="label">Next</Typography>,
              }}
              {...item}
            />
          )}
          defaultPage={1}
          siblingCount={0}
          boundaryCount={1}
        />
      </ThemeProvider>
    </div>
  );
};

export default EmpTable;



