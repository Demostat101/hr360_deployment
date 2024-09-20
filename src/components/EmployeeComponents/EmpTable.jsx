import Pagination from "@mui/material/Pagination";
import { UsePagination } from "./UsePagination";
import { Link } from "react-router-dom";
import {
  createTheme,
  PaginationItem,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useTable } from "react-table";
import { Context } from "../../contexts/DashBoardContext";

const EmpTable = () => {
  const { data, searchName, searchEmpID, handleCheckBox, searchEmpRegion } =
    Context();

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
            employee.name.toLowerCase().includes(searchName.toLowerCase()) &&
            employee.empID.toString().includes(searchEmpID.toString()) &&
            employee.region
              .toLowerCase()
              .includes(searchEmpRegion.toLowerCase())
        )
        .slice(
          startPageIndex * endPageIndex,
          startPageIndex * endPageIndex + endPageIndex
        ),
    [startPageIndex, searchName, searchEmpID, searchEmpRegion, data]
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
                key={val.id}
                className={
                  open
                    ? " w-full h-[62.62px] text-[#8F8F8F] th-bb"
                    : " w-full h-[69px] text-[#8F8F8F] th-bb"
                }
              >
                <td>
                  <input
                    className="ml-[15px] border-[#8F8F8F]"
                    onChange={() => handleCheckBox(val.id)}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span className="pl-[10px]">{val.empID}</span>
                </td>
                <td>{val.name}</td>
                <td>{val.department}</td>
                <td>{val.role}</td>
                <td>{val.email}</td>
                <td>{val.empType}</td>
                <td>
                  {val.active ? (
                    <div className="text-green-400">Active</div>
                  ) : (
                    <div className="text-red-500">On leave</div>
                  )}
                </td>
                <td>
                  <Link
                    to={`${val.id}`}
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
