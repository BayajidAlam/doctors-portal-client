import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {

  const { signInUser } = useContext(AuthContext);

  const { register,formState:{errors}, handleSubmit } = useForm();
  const [logInUserEmail, setLogInUserEmail] = useState('');
  const [token] = useToken(logInUserEmail)
  const [logInError, setLogInError] = useState('');

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if(token){
    navigate(from, { replace: true });
  }
  
  const handleLogin = data => {
    setLogInError('')
    signInUser(data.email,data.password)
    .then(result=>{
      const user = result.user;
      setLogInUserEmail(data.email)
    })
    .catch(err=>{
      setLogInError(err.message)
    })
  }

  return (
    <div className=" flex justify-center items-center">
      <div className="w-1/3 p-12 shadow-2xl h-[600px] mt-40 mb-12">
        <h2 className="text-xl text-center">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>{" "}
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              {...register("email",{
                required: "Email Address is required"
              })}
            />
            {errors.email && <p className="text-red-600 mt-1">{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>{" "}
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password",{
                required: "Password is required",
                minLength: {value: 6, message: 'Password must be 6 character or longer'}
              })}
            />
            {errors.password && <p className="text-red-600 mt-1
            ">{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">Forget Password?</span>{" "}
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="login"
            type="submit"
          />
          <div className="mt-1 text-red-600">
            { logInError && <p>{logInError}</p>}
          </div>
        </form>
        <p className="text-center">
          New to Doctors Portal?
          <Link to="/signup" className="text-secondary">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
