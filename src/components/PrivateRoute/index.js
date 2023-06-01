import React from "react";

import { Navigate, Outlet} from "react-router-dom";


const PrivateRoute = props => {


    const isLoged = !!localStorage.getItem("@Tribos:token");
    return isLoged ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;