import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Store";
import axios from "axios";
import {Link} from "react-router-dom"
function Users() {
  const { token } = useAuth();
  const [data, setData] = useState([]);
  const getAllUserData = async () => {
    try {
      console.log("Hi");
      const response = await axios.get("http://localhost:8080/api/admin/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data.userInfo);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllUserData();
  }, []);

  const deleteUser = async(id) =>{
    const res = await axios.post("http://localhost:8080/api/admin/delete",{id:id});
    alert(res.data)
    getAllUserData()
  }
  return (
    <div>
      {/* {data.map((item,index)=>{
      return(
       <div key={index}>
        {item.name}
       </div>
      )
     })} */}

      <div className="overflow-x-scroll">
        <table className="table table-striped bg-light text-black  ">
          <tr>
            <th className="text-center">name</th>
            <th className="text-center">email</th>
            <th className="text-center">phone</th>
            <th className="text-center">update</th>
            <th className="text-center">delete</th>
          </tr>
          <tr>
            <th colSpan="5">
              <hr className="hr" />
            </th>
          </tr>

          {data.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td className="my-3 text-center">{item.name}</td>
                  <td className="my-3 text-center p-3">{item.email}</td>
                  <td className="my-3 text-center p-3">{item.phone}</td>
                  <td className="my-3 text-center p-3 ">
                    <Link to={`/admin/users/${item._id}/edit`} className="btne">Edit</Link>
                  </td>
                  <td className="my-3 text-center p-3">
                    <button className="btnr" onClick={()=>{deleteUser(item._id)}}>Delete</button>
                  </td>
                </tr>
                {
                  index !== data.length-1 && (<tr>
                  <th colSpan="5">
                    <hr className="hr" />
                  </th>
                </tr>)
                }
                  
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Users;
