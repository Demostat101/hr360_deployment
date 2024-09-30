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
import { useAxiosFetch } from "../../hooks/UseAxiosFetch";

const EmpTable = () => {
  const { searchName, searchEmpID, handleCheckBox, searchEmpRegion } =
    Context();
  const { setData, data } = useAxiosFetch(
    `https://hr360employeescrudbackend.onrender.com/employees`
  );
  const { addNewEmployee, setAddNewEmployee } = addEmployeeContext();

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
    if (addNewEmployee) {
      fetchData();
      setAddNewEmployee(false);
    }
  }, [addNewEmployee]);

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
    currentPageIndex,
    setStartPageIndex,
  ] = UsePagination(9, data.length);

  const filteredEmployeeList = useMemo(
    () =>
      data
        .filter(
          (employee) =>
            (employee.firstName
              .toLowerCase()
              .includes(searchName.toLowerCase()) ||
              employee.lastName
                .toLowerCase()
                .includes(searchName.toLowerCase())) &&
            employee.officialDetails.employeeId
              .toString()
              .includes(searchEmpID.toString()) &&
            employee.officialDetails.region
              .toLowerCase()
              .includes(searchEmpRegion.toLowerCase())
        )
        .slice(
          startPageIndex * endPageIndex,
          startPageIndex * endPageIndex + endPageIndex
        ),
    [
      startPageIndex,
      searchName,
      searchEmpID,
      searchEmpRegion,
      data,
      addNewEmployee,
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
    <div className="w-full table-container">
      <table {...getTableProps()}>
        {/* header */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className={
                open
                  ? "w-[100%] h-[62.62px] bg-[#E7F0FD] "
                  : "w-[100%] h-[69px] bg-[#E7F0FD]"
              }
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        {/* body */}

        <tbody
          className={
            open
              ? " w-full h-[62.62px] text-[#8F8F8F] th-bb"
              : " w-full h-[69px] text-[#8F8F8F] th-bb"
          }
        >
          {filteredEmployeeList.map((val) => {
            return (
              <tr
                key={val._id}
                className={
                  open
                    ? " w-full h-[62.62px] text-[#8F8F8F] th-bb"
                    : " w-full h-[69px] text-[#8F8F8F] th-bb"
                }
              >
                <td>
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
                <td className="flex gap-[8px] place-items-center">
                  <span>{val.firstName}</span> <span>{val.lastName}</span>
                </td>
                <td>{val.officialDetails.department}</td>
                <td>{val.officialDetails.role}</td>
                <td>{val.officialDetails.email}</td>
                <td>{val.officialDetails.employmentType}</td>
                <td>
                  {val.active ? (
                    <div className="text-green-400">Active</div>
                  ) : (
                    <div className="text-red-500">On leave</div>
                  )}
                </td>
                <td>
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
