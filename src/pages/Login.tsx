import { Link } from "react-router-dom"
const Login = () => {
  return (
    <>
    <div ></div>
    <div  className="account-page">
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
            <form action="">
              <div className="input-block mb-4">
                <label className="col-form-label">Email Address</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue="admin@dreamguystech.com"
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
                    defaultValue={123456}
                    id="password"
                  />
                  <span className="fa-solid fa-eye-slash" id="toggle-password" />
                </div>
              </div>
              <div className="input-block mb-4 text-center">
                <Link  to="/" className="btn btn-primary account-btn" type="submit">
                  Login
                </Link>
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
  )
}

export default Login