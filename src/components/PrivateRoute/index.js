import React from "react";

import { Route, Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../../contexts/auth";

const PrivateRoute = props => {

    const { signed } = useAuth();
    /*
    const isLoged = !!sessionStorage.getItem("eureca-token");
    */
   
    const isLoged = !!sessionStorage.getItem("@Tribos:token");
    return isLoged ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;