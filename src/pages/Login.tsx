import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTenantList, login } from "../API/controller/login";

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

const LoginPage = () => {
  const [tenantList, setTenantList] = useState<Tenant[]>([]);
  const [selectedTenant, setSelectedTenant] = useState("");
  const [selectedTenantId, setSelectedTenantId] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadng, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTenantList()
      .then((tenantData) => {
        setTenantList(tenantData);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching tenant list: " + error);
        setLoading(false);
      });
  }, []);

  const handleLogin = () => {
    if (selectedTenantId) {
      login(selectedTenantId, email, password, navigate);
    } else {
      console.error("Selected tenant not found in the list");
    }
  };

  return (
    <div className="account-page">
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                <form>
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

                        const selectedTenantObject = tenantList.find(
                          (tenant) => tenant.TenantName === selectedTenantName
                        );
                        if (selectedTenantObject) {
                          setSelectedTenantId(selectedTenantObject.ID);
                        }
                      }}
                    />
                    <datalist id="emailOptions">
                      {tenantList.map((tenant) => (
                        <option
                          key={tenant.ID}
                          value={tenant.TenantName}
                          data-id={tenant.ID}
                        />
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
                  {error && <p className="text-danger">{error}</p>}
                  <div className="input-block mb-4 text-center">
                    <button
                      className="btn btn-primary account-btn"
                      type="button"
                      onClick={handleLogin}
                    >
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
  );
};

export default LoginPage;
