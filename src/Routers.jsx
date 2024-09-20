import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import { Suspense } from "react";
import React from "react";
import LoginSignup from "./pages/LoginSignup";
import UnAuth from "./pages/UnAuth";
import ProtectedRoute from "./hooks/ProtectedRoute";
const MainLayout = React.lazy(()=> import("./layout/MainLayout"))
const DashBoard = React.lazy(()=> import("./pages/DashBoard"))
const Employee = React.lazy(()=> import("./pages/Employee"))
const AddEmployee = React.lazy(()=> import("./pages/AddEmployee"))
const Analytics = React.lazy(()=> import("./pages/Analytics"))
const Announcement = React.lazy(()=> import("./pages/Announcement"))
const EmployeeDetails = React.lazy(()=> import("./components/EmployeeComponents/EmployeeDetails"))
const PaySlip = React.lazy(()=> import( "./components/EmployeeComponents/PaySlip"))
const EmployeePage = React.lazy(()=> import("./components/EmployeeComponents/EmployeePage"))
const LeaveHistory = React.lazy(()=> import("./components/EmployeeComponents/LeaveHistory"))
const CreateIntranetAnnouncement = React.lazy(()=> import( "./components/announcementsComponents/CreateIntranetAnnouncement"))
const CreateEmailAnnouncement = React.lazy(()=> import("./components/announcementsComponents/CreateEmailAnnouncement"))
const DisplayAnnouncements = React.lazy(()=> import("./components/announcementsComponents/DisplayAnnouncements"))

const Routers = createBrowserRouter([
  {
    path:"/",
    element:<LoginSignup/>
  },
  {
    path: "layout/",
    element: <Suspense fallback={<div className="flex justify-center place-items-center h-screen bg-[#176b87] text-white"><span className="loader"></span></div> }> <ProtectedRoute> <MainLayout /> </ProtectedRoute> </Suspense>,

    children: [
      {
        path:"dashboard",
        element:   <DashBoard /> 
      },

      {
        path: "employee",
        
        element:   <Employee /> 
      },
      {
        path: "employee/:id",
        
        element:   <EmployeeDetails /> ,

        children: [
          {
            index: true,

            element:   <EmployeePage /> 
          },
          {
            path: "employee-payslip",
            element:    <PaySlip /> 
          },
          {
            path: "employee-leave-history",
            
            element:   <LeaveHistory /> 
          },
        ],
      },

      {
        path: "add-employee",
      
        element:  <AddEmployee />
      },
      {
        path: "analytics",
      
        element:  <Analytics />
      },
      {
        path: "announcement/",
      
        element:   <Announcement />,
        children: [
          {
            index: true,
          
            element:  <DisplayAnnouncements />
            
          },
          {
            path: "intranet-announcement",
          
            element:   <CreateIntranetAnnouncement />
          },
          {
            path: "email-announcement",
         
            element:   <CreateEmailAnnouncement />
          },
        ],
      }
      
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
  {
    path: "/unauthorize",
    element: <UnAuth />,
  }
]);

export default Routers;
