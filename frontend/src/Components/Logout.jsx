import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { useAuth } from '../store/Store'
export default function Logout() {
    const {LogoutToken} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        LogoutToken()
    },[LogoutToken])
    navigate("/login")
  
}
