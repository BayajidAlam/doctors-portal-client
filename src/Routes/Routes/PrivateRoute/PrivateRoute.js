import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../Pages/Shared/Loading/Loading';

const PrivateRoute = ({children}) => {

  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if(loading){
    return <Loading></Loading>
  }

  if(user){
    return children;
  }
  return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;