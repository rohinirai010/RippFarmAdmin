import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);
    const [checkedStorage, setCheckedStorage] = useState(false);
  
    useEffect(() => {
      // Verify storage after Redux state is loaded
      if (!loading) {
        setCheckedStorage(true);
      }
    }, [loading]);
  
    if (loading || !checkedStorage) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }
  
    const isLocallyAuthenticated = !!localStorage.getItem('adminToken');
  
    // If either authentication method fails, redirect
    if (!isAuthenticated || !isLocallyAuthenticated) {
      // Clear any residual tokens
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminInfo');
      return <Navigate to="/" replace />;
    }
  
    return children;
  };

export default ProtectedRoute;


