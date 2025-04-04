import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, clearErrors } from "../ReduxStateManagement/slices/authSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginLogo from "../images/loginlogo.png"
import loginBgImg from "../images/loginBgImg.png"
import loginBrandName from "../images/loginBrandName.png"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [ipInfo, setIpInfo] = useState({ ip: "Loading...", country: "" });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { loading, error, errorCode, isAuthenticated, successMessage } = useSelector(
    (state) => state.auth
  );

  // Fetch IP address on component mount
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.db-ip.com/v2/free/self');
        if (!response.ok) throw new Error('Failed to fetch IP data');
        const data = await response.json();
        
        setIpInfo({
          ip: data.ipAddress,
          country: data.countryName || ""
        });
      } catch (error) {
        console.error("Error fetching IP:", error);
        setIpInfo({ ip: "Could not determine", country: "" });
      }
    };
    
    fetchIpAddress();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      if (errorCode === 401) {
        toast.error("Invalid username or password");
      } else if (errorCode === 403) {
        toast.error("Account locked. Please contact support");
      } else if (errorCode === 429) {
        toast.error("Too many attempts. Please try again later");
      } else {
        toast.error(error);
      }
      
      setTimeout(() => {
        dispatch(clearErrors());
      }, 5000);
    }
  }, [error, errorCode, dispatch]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    }
  }, [successMessage, navigate]);

  const validate = () => {
    const newErrors = {};
    
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    dispatch(loginAdmin({ username, password }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#171b2e] relative overflow-hidden">
      {/* Background image - responsive positioning */}
      <div className="absolute inset-0 z-0">
        <div className="md:absolute md:top-10 md:right-12 w-full h-full md:w-auto md:h-auto flex justify-end">
          <img 
            src={loginBgImg} 
            alt="Background" 
            className="opacity-20 md:opacity-100 object-cover md:object-right w-full md:w-[58rem] h-full" 
          />
        </div>
      </div>

      <div className="w-full max-w-md flex flex-col items-center z-10 px-4 sm:px-0 py-8 md:relative md:top-[8rem]">
        {/* Logo container */}
        <div className="mb-8 flex flex-col items-center">
          <img src={loginLogo} alt="Rippfarm Logo" className="w-16 h-16 md:w-16 md:h-16" />
          {/* Brand name */}
          <img src={loginBrandName} alt="Login Brand Name" className="w-auto h-6 md:h-8 mt-3 md:mt-4" />
        </div>
        
        <form onSubmit={handleSubmit} className="w-full px-4 sm:px-8 md:px-12">
          <div className="mb-4 md:mb-5">
            <label 
              htmlFor="username" 
              className="block text-white text-sm md:text-base mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-white rounded-xl md:rounded-2xl focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label 
              htmlFor="password" 
              className="block text-white text-sm md:text-base mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-white rounded-xl md:rounded-2xl focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-8 md:px-12 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 text-white font-medium focus:outline-none hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-md"
            >
              {loading ? "Please wait..." : "Enter ›››"}
            </button>
          </div>
        </form>
        
        <div className="mt-8 md:mt-6 text-gray-400 text-xs md:text-sm">
          Your IP Address: {ipInfo.ip}{ipInfo.country ? ` | ${ipInfo.country}` : ''}
        </div>
      </div>
      
      {/* Logo in bottom right - made responsive */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-lg md:text-xl text-gray-500 opacity-30">
        <span className="font-bold text-xl md:text-2xl">Ripp</span>farm
      </div>
      
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}