import { useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import AddEmployee from "./pages/AddEmployee";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeLeaves from "./pages/EmployeeLeaves";
import EmployeeList from "./pages/EmployeeList";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "src/assets/js/select2.min.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);
  return (
    <>
      <BrowserRouter>
        {/* {location.pathname !== "/login" && <SideBar />}

        <SideBar /> */}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<SideBar />}>
            <Route path="home" element={<AdminDashboard />}></Route>
            <Route path="addemployee" element={<AddEmployee />} />
            <Route path="employeelist" element={<EmployeeList />}></Route>
            <Route path="employeeleaves" element={<EmployeeLeaves />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
