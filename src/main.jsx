import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./contexts/DashBoardContext.jsx";
import { EditDetailsContext } from "./contexts/EditDetailsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <ContextProvider>
      <EditDetailsContext>
        <App />
      </EditDetailsContext>
    </ContextProvider>
  
  </React.StrictMode>
);
