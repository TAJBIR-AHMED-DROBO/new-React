import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./Components/Logout";
import AdminPanel from "./Layouts/AdminPanel"
import Users from "./Components/Users";
import AdminContacts from "./Components/AdminContacts";
import AdminServices from "./Components/AdminServices";
import Edit from "./pages/Edit"
import { useAuth } from "./store/Store";
function App() {
  const {item} = useAuth();
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/admin/users/:id/edit" element={<Edit></Edit>}></Route>
          {(localStorage.getItem("token") && item.isAdmin)? <Route path="/admin" element={<AdminPanel></AdminPanel>}>
          <Route index element={<Users></Users>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="contacts" element={<AdminContacts></AdminContacts>}></Route>
          <Route path="services" element={<AdminServices></AdminServices>}></Route>
          </Route>: <Route path="/admin" element={<Navigate replace to ="/"></Navigate>}></Route>}
         
          <Route path="/logout" element={<Logout></Logout>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
