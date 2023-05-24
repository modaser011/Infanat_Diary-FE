import { useContext } from "react";
import {Outlet } from "react-router";
import { AuthContext} from "./auth";
import {useNavigate} from "react-router-dom";
import React from 'react';

const ProtectPages = () => {
    auth=useContext(AuthContext)
    nav=useNavigate()
    return (
        auth.user?<Outlet/>: nav('/login')
    );
}

export default ProtectPages;
