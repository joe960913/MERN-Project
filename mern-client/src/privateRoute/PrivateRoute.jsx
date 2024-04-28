import { Spinner } from "flowbite-react";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="text-center">
                <Spinner aria-label="Center-aligned spinner example" />
            </div>
        );
    }

    if(currentUser){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
