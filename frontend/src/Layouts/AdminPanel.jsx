import React from 'react'
import {Outlet,Link} from "react-router-dom"
import "../Styles/AdminPanel.css"
import { FaUserLarge } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { IoHome } from "react-icons/io5";

function AdminPanel() {
  return (
    <div className='adminBody'>
    <div className="row">
      <div className="col-lg-1 col-md-3 col-sm-3 left col-4 d-flex flex-column align-items-start ps-sm-4 ps-5 ">
        <ul className=' list-unstyled mt-5'>
          <li className=' fw-bold my-3'><Link to="/admin/users"  className='admin-nav'><span><FaUserLarge></FaUserLarge></span><span class="ms-2">Users</span></Link></li>
          <li className=' fw-bold my-3'><Link to="/admin/contacts" className='admin-nav'><span><RiContactsFill /></span><span class="ms-2">Contacts</span></Link></li>
          <li className=' fw-bold my-3'><Link to="/admin/services" className='admin-nav'><span><GrServices></GrServices></span><span class="ms-2">Services</span></Link></li>
          <li className=' fw-bold my-3'><Link to="/" className='admin-nav'><span><IoHome></IoHome></span><span class="ms-2">Home</span></Link></li>
        </ul> 
      </div>
      <div className="col-lg-11 col-md-9 col-sm-9 right col-8">
      <Outlet></Outlet>
      </div>
    </div>
    
    </div>
  )
}

export default AdminPanel
