import React from "react";
import { useQuery } from "react-query";

const AllUsers = () => {
  const { data: users=[],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`,{
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}` 
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount > 0){
        refetch();
      }
    })
  }

//   const handleMakeAdmin = id => {
//     fetch(`http://localhost:5000/users/admin/${id}`, {
//         method: 'PUT', 
//         headers: {
//             authorization: `bearer ${localStorage.getItem('accessToken')}`
//         }
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//         if(data.modifiedCount > 0){
//             refetch();
//         }
//     })
// }

  return (
    <div>
      <div className="text-3xl">All Users</div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,i) => (
              <tr key={i}>
                <th>{i+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td>
                <td>
                  <button className="btn btn-xs btn-accent">Delete</button>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
