import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routers from "./Routers";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <ToastContainer position="top-center" theme="dark" autoClose={3000}/>
      <RouterProvider router={Routers} />
    </>
  );
}

export default App;
