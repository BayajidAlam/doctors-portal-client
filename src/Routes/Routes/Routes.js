import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Appointment from '../../Pages/Appointment/Appointment';
import AddDoctor from '../../Pages/Dashboard/AddDoctor/AddDoctor';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import ManageDoctors from '../../Pages/Dashboard/ManageDoctors/ManageDoctors';
import MyAppointment from '../../Pages/Dashboard/MyAppointment/MyAppointment';
import Payment from '../../Pages/Dashboard/payment/Payment';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import AdminRoute from '../AdminRoute/AdminRoute';
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
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <MyAppointment></MyAppointment>
      },
      {
        path: '/dashboard/allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/adddoctor',
        element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
      },
      {
        path: '/dashboard/managedoctors',
        element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)
      }
    ]
  }
])

export default router;