import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/DashBoardContext"
import { useEffect } from "react";


const ProtectedRoute = ({children}) => {
const {isSignedIn} = Context();
    const navigate = useNavigate();
    

    useEffect(()=>{
        if (!isSignedIn) {
            navigate("/unauthorize", {replace:true})
        } 
    },[navigate, isSignedIn])

  return children
}

export default ProtectedRoute
