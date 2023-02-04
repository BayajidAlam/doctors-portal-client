import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className=" flex justify-center items-center">
      <div className="w-1/3 p-12 shadow-2xl h-[600px] mt-40 mb-12">
        <h2 className="text-xl text-center">Login</h2>

        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Email</span> </label>
            <input type="email" className="input input-bordered w-full" {...register("email")}/>
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Password</span> </label>
            <input type="password" className="input input-bordered w-full" {...register("password")}/>
            <label className="label"><span className="label-text">Forget Password?</span> </label>
          </div>
          <input className="btn btn-accent w-full" value='login' type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
