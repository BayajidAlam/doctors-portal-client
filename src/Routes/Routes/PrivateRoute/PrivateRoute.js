import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const PrivateRoute = ({children}) => {

  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if(loading){
    return <p>Loading...</p>
  }

  if(user){
    return children;
  }
  return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;