const { createContext, useContext, useState, useEffect } = require("react");
const authContext = createContext();
import axios from "axios"


export const AuthProvider = ({children}) =>{
    const [item,setItem] = useState("");
    const [token,setToken] = useState(localStorage.getItem("token"))
    const localStore = (servertoken) =>{
        localStorage.setItem("token",servertoken)
        setToken(servertoken)
    }
    const LogoutToken = () =>{
        setToken("")
        localStorage.removeItem("token");
    }

    const AutofillContact = async() =>{
       try{
        const response = await axios.get("http://localhost:8080/api/verification",{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")?token:null}`
            }
        })
       setItem(response.data.verification)
       }catch(err){
       alert(err)
       }
    }
    useEffect(()=>{
        AutofillContact();
    },[])

    const isLoggedIn = !!token;
    return(
        <authContext.Provider value={{localStore,LogoutToken,isLoggedIn,item,token}}>
            {children}
        </authContext.Provider>
    )
}   


export const useAuth = () =>{
    return useContext(authContext)
}