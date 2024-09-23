

import { createContext, useContext, useState } from "react";

const employeeContext = createContext();

export const addEmployeeContext = ()=>{
    return useContext(employeeContext)
}



const AddEmployeeContext = ({children}) => {
    const [name, setName] = useState("man dem")
  return (
    <employeeContext.Provider value={{name}}>
        {children}
    </employeeContext.Provider>
  )
}

export default AddEmployeeContext
