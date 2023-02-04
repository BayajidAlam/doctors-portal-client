import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Appointment from '../../Pages/Appointment/Appointment';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/appointment',
          element: <Appointment></Appointment>
        },
        {
          path: '/signup',
          element: <Register></Register>
        }
      ]
  },
  {
    path: '/dashboard',
    element: 
    <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>
  }
])

export default router;