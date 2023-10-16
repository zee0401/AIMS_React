import axios from "axios";
import React, { useState, useEffect } from "react";

interface Tenant {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  TenantName: string;
  Address: string;
  OrganisationEmail: string;
  OrganisationLogo: string;
}

const Login = () => {
  const [tenantList, setTenantList] = useState([]);
  const [selectedTenant, setSelectedTenant] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tenantId, setTenantId] = useState(""); 

  useEffect(() => {
    axios
      .get("https://sm.oortfy.com/v1/tenant/list")
      .then((response) => {
        const tenantData = response.data;
        setTenantList(tenantData);
      })
      .catch((error) => {
        console.error("Error fetching tenant list: ", error); 
      });
  }, []);

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Find the selected tenant's ID based on the name
    const selectedTenantObject = tenantList.find((tenant: Tenant) => tenant.TenantName === selectedTenant);
    if (selectedTenantObject) {
      const loginData = {
        email,
        username: email, 
        // tenantId: selectedTenantObject.ID, 
        password,
      };

      axios
        .post("https://sm.oortfy.com/v1/auth/login", loginData) 
        .then((response) => {
          
          console.log("Login successful", response.data);
        })
        .catch((error) => {
          console.error("Login failed", error);
        });
    } else {
      console.error("Selected tenant not found in the list");
    }
  };


  return (
    <>
      <div className="account-page">
        <div className="main-wrapper">
          <div className="account-content">
            <a href="job-list.html" className="btn btn-primary apply-btn">
              Apply Job
            </a>
            <div className="container">
              <div className="account-logo">
                <a href="admin-dashboard.html">
                  <img src="src/assets/img/logo2.png" alt="Dreamguy's Technologies" />
                </a>
              </div>
              <div className="account-box">
                <div className="account-wrapper">
                  <h3 className="account-title">Login</h3>
                  <p className="account-subtitle">Access to our dashboard</p>
                  <form onSubmit={handleLogin}>
                    <div className="input-block mb-4">
                      <label className="col-form-label">Search Company</label>
                      <input
                        className="form-control"
                        list="emailOptions"
                        id="emailInput"
                        value={selectedTenant}
                        onChange={(e) => setSelectedTenant(e.target.value)}
                      />
                      <datalist id="emailOptions">
                        {tenantList.map((tenant: Tenant) => (
                          <option key={tenant.ID} value={tenant.TenantName} />
                        ))}
                      </datalist>
                    </div>
                    <div className="input-block mb-4">
                      <label className="col-form-label">Email Address</label>
                      <input
                        className="form-control"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-block mb-4">
                      <div className="row align-items-center">
                        <div className="col">
                          <label className="col-form-label">Password</label>
                        </div>
                        <div className="col-auto">
                          <a className="text-muted" href="forgot-password.html">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="position-relative">
                        <input
                          className="form-control"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="fa-solid fa-eye-slash" id="toggle-password" />
                      </div>
                    </div>
                    <div className="input-block mb-4 text-center">
                      <button className="btn btn-primary account-btn" type="submit">
                        Login
                      </button>
                    </div>
                    <div className="account-footer">
                      <p>
                        Don't have an account yet? <a href="register.html">Register</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;