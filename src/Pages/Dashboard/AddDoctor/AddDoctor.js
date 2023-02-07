import { async } from "@firebase/util";
import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { data: specialties=[], isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appointmentSpecialty')
      const data = await res.json()
      return data;
    }
  })

  if(isLoading){
    return <Loading></Loading>
  }

  const imageHostKey = process.env.REACT_APP_imgbb_key
 
  const handleAddDoctor = (data) => {
    const image = data.img[0]
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url,{
      method: "POST",
      body: formData
    })
    .then(res=>res.json())
    .then(imgData=>{
      if(imgData.success){
        const doctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image: imgData.data.url
        }
        fetch('http://localhost:5000/doctors',{
           method: 'POST',
           headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
           },
           body: JSON.stringify(doctor)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          navigate('/dashboard/managedoctors')
        })
      }
    })
  };

  return (
    <div>
      <h2 className="text-3xl m-1">Add A Doctor</h2>
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>{" "}
          </label>
          <input
            type="name"
            className="input input-bordered w-full"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <p className="mt-1 text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>{" "}
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="mt-1 text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Specialty</span>{" "}
          </label>
          <select
           {...register("specialty", {
            required: "Email is required",
          })}
          className="select select-ghost w-full select-bordered">
            <option disabled selected>
              {specialties[0].name}
            </option>
            {
              specialties.map(specialty => <option key={specialty._id}>{specialty.name}</option>)
            }
          </select>
          {errors.password && (
            <p className="mt-1 text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>{" "}
          </label>
          <input
            type="file"
            className="input input-bordered w-full"
            {...register("img", {
              required: "photo is required",
            })}
          />
          {errors.img && (
            <p className="mt-1 text-red-600">{errors.img.message}</p>
          )}
        </div>

        <input
          className="btn btn-accent w-full mt-4 text-white"
          value="Add Doctor"
          type="submit"
        />
        {/* {signUpError && <p className="mt-1 text-red-600">{signUpError}</p>} */}
      </form>
    </div>
  );
};

export default AddDoctor;
