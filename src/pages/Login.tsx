import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const [tenantList, setTenantList] = useState<Tenant[]>([]);
  const [selectedTenant, setSelectedTenant] = useState<string>("");
  const [selectedTenantId, setSelectedTenantId] = useState<number | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://sm.oortfy.com/v1/tenant/list")
      .then((response) => {
        const tenantData = response.data;
        setTenantList(tenantData);
        console.log(tenantData);
      })
      .catch((error) => {
        console.error("Error fetching tenant list: ", error);
      });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (selectedTenantId) {
      let isEmail = false;
      if (email.match(emailRegex)) {
        isEmail = true;
      }
  
      const loginData = {
        email: isEmail ? email : '',
        username: isEmail ? '' : email,
        tenantId: selectedTenantId,
        password,
      };
      console.log(loginData)
  
      axios
        .post("https://sm.oortfy.com/v1/auth/login", loginData)
        .then((response) => {
          if (response.data.Status === "success") {
            console.log("Login successful", response.data);
            navigate('/');
          }
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
                        onChange={(e) => {
                          const selectedTenantName = e.target.value;
                          setSelectedTenant(selectedTenantName);

                          // Find the selected tenant's ID and set it
                          const selectedTenantObject = tenantList.find((tenant: Tenant) => tenant.TenantName === selectedTenantName);
                          if (selectedTenantObject) {
                            setSelectedTenantId(selectedTenantObject.ID);
                          }
                        }}
                      />
                      <datalist id="emailOptions">
                        {tenantList.map((tenant: Tenant) => (
                          <option key={tenant.ID} value={tenant.TenantName} data-id={tenant.ID} />
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
