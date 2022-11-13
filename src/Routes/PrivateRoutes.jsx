import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isLoggedIn } from '../Auth/AuthLocalStorage'

const Privateroute = () => {
    return  isLoggedIn() ? <Outlet /> : <Navigate to={"/"}  />
}

export default Privateroute