import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  
  // Check localStorage directly as a fail-safe
  const checkLocalStorage = () => {
    const adminToken = localStorage.getItem('adminToken');
    return !!adminToken;
  };

  const isLocallyAuthenticated = checkLocalStorage();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated (checking both Redux state AND localStorage)
  if (!isAuthenticated || !isLocallyAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Render the protected component
  return children;
};

export default ProtectedRoute;