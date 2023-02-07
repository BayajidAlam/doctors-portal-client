import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const Register = () => {

  const { createUser,updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const { register,handleSubmit, formState: {errors} } = useForm();
  const [createdUserEmail,SetCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail)

  const navigate = useNavigate();


  if(token){
    navigate('/');
  }

  const handleSignUp = (data) => {

    setSignUpError('');

    createUser(data.email,data.password)
    .then(result => {
      const user = result.user;
      console.log('user logged in')
      const userInfo = {
        displayName : data.name
      }
      updateUser(userInfo)
      .then(()=>{
        saveUsers(data.name,data.email);
        console.log('user updated')
      })
      .catch(err=>{
        console.log(err.message);
      })
    })
    .catch(err=>{
      const errorMessage = err.message;
      setSignUpError(errorMessage);
    })

  }

  const saveUsers = (name,email) =>{
    const user = { name, email };
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log('user saved')
      SetCreatedUserEmail(email)
    })
  }

  return (
    <div className=" flex justify-center items-center">
      <div className="w-1/3 p-12 shadow-2xl h-[600px] mt-40 mb-12">
        <h2 className="text-xl text-center">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>{" "}
            </label>
            <input 
            type="name" 
            className="input input-bordered w-full" 
            {...register('name',{
              required: 'Name is required'
            })}
            />
            {errors.name && <p className="mt-1 text-red-600">{errors.name.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>{" "}
            </label>
            <input 
            type="email" 
            className="input input-bordered w-full" 
            {...register('email',{
              required: 'Email is required'
            })}
            />
            {errors.email && <p className="mt-1 text-red-600">{errors.email.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>{" "}
            </label>
            <input 
            type="password" 
            className="input input-bordered w-full" 
            {...register('password',{
              required: 'Password is required',
              minLength: { value: 6, message:"Password must be 6 character"},
              pattern: { value : /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: 'Enter a strong password'}
            })}
            />
            {errors.password && <p className="mt-1 text-red-600">{errors.password.message}</p>}
            <label className="label">
              <span className="label-text">Forget Password?</span>{" "}
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="login"
            type="submit"
          />
          {signUpError && <p className="mt-1 text-red-600">{signUpError}</p>}
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/login" className="text-secondary">
            login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Register;
