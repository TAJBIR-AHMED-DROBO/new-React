import React, { useEffect, useState } from "react";
import axios from "axios";
function AdminContacts() {
  const [data, setData] = useState([]);
  const func = async () => {
    const res = await axios.get("http://localhost:8080/api/admin/contact");
    setData(res.data);
  };
  const deleteContact = async(id) => {
    const res = await axios.post("http://localhost:8080/api/admin/contact",{id:id})
    console.log(res)
  };

  useEffect(() => {
    func();
  }, [data]);
  return (
    <div className="">
      {data.map((contact) => (
        <div key={contact._id}>
          {contact.name}
          {contact.email}
          {contact.message}
          <button
            type="button"
            onClick={() => {
              deleteContact(contact._id);
            }}
            className="btn btn-outline-primary"
          >Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminContacts;
