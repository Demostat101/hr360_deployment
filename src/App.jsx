import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routers from "./Routers";


function App() {
  return (
    <>
   
      <RouterProvider router={Routers} />
    </>
  );
}

export default App;
