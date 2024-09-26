import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { useAxiosFetch, apiRequest } from "../hooks/UseAxiosFetch";
import axios from "axios";

export const dashBoardContext = createContext();

export const Context = () => {
  return useContext(dashBoardContext);
};

export const ContextProvider = ({ children }) => {
  // const API_URL = "http://localhost:4000/data";
  
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [searchEmpID, setSearchEmpID] = useState("");
  const [searchEmpRegion, setSearchEmpRegion] = useState("");
  const [open, setOpen] = useLocalStorage(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, fetchError, isLoading, setData } = useAxiosFetch(
    `https://hr360employeescrudbackend.onrender.com/employees`
  );
  

  const handleOpenBar = () => {
    const close = !open;
    setOpen(close);
  };

  const handleCheckBox = async (id) => {
    const API_URL = `https://hr360employeescrudbackend.onrender.com/employee/${id}`;
    const toggleCheckBox = data.map((item) =>{
    return  `${item._id}` === `${id}`
        ? { ...item, active: !item.active }
        : item}
    );

    setData(toggleCheckBox);

    //to update Status

    const myItem = toggleCheckBox.filter(
      (item) => {
        
        return `${item._id}` === `${id}`
        
      }
    );

    const updateOptions = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ active: `${myItem[0]}`.active }),
    };

    
    const result = await apiRequest(API_URL, updateOptions);

if (result.error) {
  setError(result.error); // Handle the error properly
} else {
  // Handle success case, e.g., updating the state or notifying the user
  console.log("successfully updated");
  
}

  };

  // LOGIN AND SIGNUP PAGE LOGIC

  const [state, setState] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [signupErrors, setSignupErrors] = useState("");
  const [loginErrors, setLoginErrors] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(
    sessionStorage.getItem("logged")
  );
  const [userName, setUserName] = useState(sessionStorage.getItem("user"));
  const [surName, setSurName] = useState(sessionStorage.getItem("surname"));
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const Login = async () => {
    const signupFormData = {
      email: loginEmail,
      password: loginPassword,
    };

    setIsLoginLoading(true);
    try {
      const response = await axios.post(
        "https://hr360backendloginsignup.onrender.com/login",
        signupFormData
      );
      const signUpData = await response.data;
      console.log(signUpData);
      

      if (signUpData.success) {
        sessionStorage.setItem("auth-token", signUpData.token);
        sessionStorage.setItem("logged", signUpData.success);
        sessionStorage.setItem("user", signUpData.user.name);
        sessionStorage.setItem("surname", signUpData.user.surname);
        setIsSignedIn(signUpData.success);
        window.location.replace("layout/dashboard");
        setUserName(signUpData.user.name);
        setSurName(signUpData.user.surname);
      } else {
        setLoginErrors(signUpData.errors);
        setTimeout(() => {
          setLoginErrors("");
        }, 3000);
      }
    } catch (error) {
      setLoginErrors(error.message);

      setTimeout(() => {
        setLoginErrors("");
      }, 3000);
    } finally {
      setIsLoginLoading(false);
    }
  };

  const Signup = async () => {
    const signupFormData = {
      name: name,
      surname: surname,
      email: signupEmail,
      password: signupPassword,
    };
    setIsSignupLoading(true);
    if (
      name === "" ||
      signupEmail === "" ||
      signupPassword === "" ||
      surname === ""
    ) {
      setIsSignupLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "https://hr360backendloginsignup.onrender.com/signup",
        signupFormData
      );
      const signUpData = await response.data;

      if (signUpData.success) {
        sessionStorage.setItem("auth-token", signUpData.token);
        setName("");
        setSurname("");
        setSignupEmail("");
        setSignupPassword("");
        setState("login");
      }
    } catch (error) {
      console.log(error);

      setSignupErrors(error.response.data.errors);

      setTimeout(() => {
        setSignupErrors("");
      }, 3000);
    } finally {
      setIsSignupLoading(false);
    }
  };

  //get user details

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `https://hr360backendloginsignup.onrender.com/user/${loginEmail}`
      );

      return data;
    } catch (error) {
      return null;
    }
  };

  // forgot password logic

  const handleForgotPassword = async () => {
    if (!loginEmail) {
      setLoginErrors("Please enter your registered email below");
      setTimeout(() => {
        setLoginErrors("");
      }, 3000);
      return;
    }

    // API CALL
    try {
      const {
        data: { code },
        status,
      } = await axios.get("https://hr360backendloginsignup.onrender.com/generateOTP", loginEmail);

      if (status === 200) {
        const data = await getUser(loginEmail);

        const text = `Your password recovery OTP is ${code}. Verify and recover your password.`;
        await axios.post("https://hr360backendloginsignup.onrender.com/sendOtp", {
          name: data.name,
          email: data.email,
          text,
          subject: "Password Recovery OTP",
        });
        setState("otp");

        return code;
      } else {
        setLoginErrors("Failed to generate OTP. Please try again.");
      }
    } catch (error) {
      setLoginErrors(
        "An error occured, please check your Network, Email and try again"
      );
      setTimeout(() => {
        setLoginErrors("");
      }, 5000);
      return null;
    }
  };

  const [otpMessage, setOtpMessage] = useState("");

  const handleOtpSubmit = async ({ loginEmail, code }) => {
    try {
      const { data, status } = await axios.get(
        "https://hr360backendloginsignup.onrender.com/verifyOTP",
        { params: { loginEmail, code } }
      );

      if (status === 200) {
        setState("passwordReset");
      }

      return { data, status };
    } catch (error) {
      setOtpMessage("Wrong OTP!, confirm OTP and try again");
      setTimeout(() => {
        setOtpMessage("");
      }, 3000);
      return null;
    }
  };

  // reset password

  const [resetPassword, setResetPassword] = useState("");

  const resetPasswordHandler = async () => {
    const user = await getUser(loginEmail);
    const password = resetPassword;

    try {
      const { data, status } = await axios.put(
        "https://hr360backendloginsignup.onrender.com/resetPassword",
        {
          email: user.email,
          password,
        }
      );

      if (status === 200) {
        setState("login");
        setResetPassword("")
        return Promise.resolve({ data, status });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const logOut = ()=>{
  //   sessionStorage.removeItem("logged")
  //   window.location.replace("/")
  //   setState("login")
  // }

  return (
    <dashBoardContext.Provider
      value={{
        handleOpenBar,
        open,
        name,
        setName,
        setSurname,
        surname,
        data,
        fetchError,
        isLoading,
        searchName,
        setSearchName,
        handleCheckBox,
        searchEmpID,
        setSearchEmpID,
        searchEmpRegion,
        setSearchEmpRegion,
        openModal,
        setOpenModal,

        setIsSignedIn,
        isSignedIn,
        loginEmail,
        loginPassword,
        signupEmail,
        signupPassword,
        setState,
        setLoginPassword,
        setLoginEmail,
        setSignupPassword,
        setSignupEmail,
        state,
        Signup,
        Login,
        signupErrors,
        loginErrors,
        userName,
        surName,
        handleForgotPassword,
        handleOtpSubmit,
        isSignupLoading,
        isLoginLoading,
        otpMessage,
        getUser,
        resetPassword,
        setResetPassword,
        resetPasswordHandler,
      }}
    >
      {children}
    </dashBoardContext.Provider>
  );
};

// Auth Logic

// export const useAuth = () => {
//   const context =  useContext(dashBoardContext);

//   if (context === undefined) {
//     throw new Error("UseAuth must be used within an Authprovider")
//   }

//   return context
// }
