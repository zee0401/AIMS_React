import React, { useEffect, useState } from 'react'
// import "../src/assets/css/sel.css"
import AddEmployee from '../components/Add'
import axios from 'axios'

const EmployeeList = () => {

  const [data, setData]=useState([])

  useEffect(() => {
    axios
      .get("https://sm.oortfy.com/v1/tenant/list")
      .then((response) => {
        setData(response.data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching employee list: ", error); 
      });
  }, []);

  return (
    <>
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Employee</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Employee</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus">
            <input type="text" className="form-control floating" />
            <label className="focus-label">Employee ID</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus">
            <input type="text" className="form-control floating" />
            <label className="focus-label">Employee Name</label>
          </div>
        </div>
        {/* <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option>Select Designation</option>
              <option>Web Developer</option>
              <option>Web Designer</option>
              <option>Android Developer</option>
              <option>Ios Developer</option>
            </select>
            <label className="focus-label">Designation</label>
          </div>
        </div> */}
        <div className="col-sm-6 col-md-3">
          <a href="#" className="btn btn-success w-100">
            {" "}
            Search{" "}
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table datatable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th className="text-nowrap">Join Date</th>
                  <th>Role</th>
                  <th className="text-end no-sort">Action</th>
                </tr>
              </thead>
              <tbody>

              {
                data.map((employee,index)=>{
                  return <> <tr key={index}> 
                  <td>{employee.id}</td>
                  </tr>
                  </>
                })
              }

                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile.html" className="avatar">
                        <img
                          src="src/assets/img/profiles/avatar-02.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile.html">
                        John Doe <span>Web Designer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0001</td>
                  <td>
                    <a
                      href="https://smarthr.dreamguystech.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="d7bdb8bfb9b3b8b297b2afb6baa7bbb2f9b4b8ba"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href=""
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_employee"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_employee"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile.html" className="avatar">
                        <img
                          src="src/assets/img/profiles/avatar-09.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile.html">
                        Richard Miles <span>Web Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0002</td>
                  <td>
                    <a
                      href="https://smarthr.dreamguystech.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="483a212b20293a2c2521242d3b082d30292538242d662b2725"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>18 Mar 2014</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href=""
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_employee"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_employee"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile.html" className="avatar">
                        <img
                          src="src/assets/img/profiles/avatar-10.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile.html">
                        John Smith <span>Android Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0003</td>
                  <td>
                    <a
                      href="https://smarthr.dreamguystech.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="660c090e08150b0f120e26031e070b160a034805090b"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>1 Apr 2014</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href=""
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_employee"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_employee"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile.html" className="avatar">
                        <img
                          src="src/assets/img/profiles/avatar-05.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile.html">
                        Mike Litorus <span>IOS Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0004</td>
                  <td>
                    <a
                      href="https://smarthr.dreamguystech.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="e38e8a88868f8a978c919690a3869b828e938f86cd808c8e"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>1 Apr 2014</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href=""
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_employee"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_employee"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile.html" className="avatar">
                        <img
                          src="src/assets/img/profiles/avatar-11.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile.html">
                        Wilmer Deluna <span>Team Leader</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0005</td>
                  <td>
                    <a
                      href="https://smarthr.dreamguystech.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="4136282d2c243325242d342f20012439202c312d246f222e2c"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>22 May 2014</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href=""
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_employee"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_employee"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile.html" className="avatar">
                        <img
                          src="src/assets/img/profiles/avatar-12.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile.html">
                        Jeffrey Warden <span>Web Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0006</td>
                  <td>
                    <a
                      href="https://smarthr.dreamguystech.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="4e242b28283c2b37392f3c2a2b200e2b362f233e222b602d2123"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>16 Jun 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href=""
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_employee"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_employee"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile.html" className="avatar">
                        <img
                          src="src/assets/img/profiles/avatar-13.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile.html">
                        Bernardo Galaviz <span>Web Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0007</td>
                  <td>
                    <a
                      href="https://smarthr.dreamguystech.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="c1a3a4b3afa0b3a5aea6a0ada0b7a8bb81a4b9a0acb1ada4efa2aeac"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href=""
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_employee"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_employee"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div id="edit_employee" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Employee</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                {/* <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="John"
                      type="text"
                    />
                  </div>
                </div> */}
                {/* <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Last Name</label>
                    <input
                      className="form-control"
                      defaultValue="Doe"
                      type="text"
                    />
                  </div>
                </div> */}
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Username <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="johndoe"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="johndoe@example.com"
                      type="email"
                    />
                  </div>
                </div>
                {/* <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Password</label>
                    <input
                      className="form-control"
                      defaultValue="johndoe"
                      type="password"
                    />
                  </div>
                </div> */}
                {/* <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Confirm Password</label>
                    <input
                      className="form-control"
                      defaultValue="johndoe"
                      type="password"
                    />
                  </div>
                </div> */}
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue="FT-0001"
                    
                      className="form-control floating"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Joining Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Phone </label>
                    <input
                      className="form-control"
                      defaultValue={9876543210}
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Company</label>
                    <select className="select">
                      <option>Global Technologies</option>
                      <option>Delta Infotech</option>
                      <option>International Software Inc</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Select Department</option>
                      <option>Web Development</option>
                      <option>IT Management</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Designation <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Select Designation</option>
                      <option>Web Designer</option>
                      <option>Web Developer</option>
                      <option>Android Developer</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="table-responsive m-t-15">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Module Permission</th>
                      <th className="text-center">Read</th>
                      <th className="text-center">Write</th>
                      <th className="text-center">Create</th>
                      <th className="text-center">Delete</th>
                      <th className="text-center">Import</th>
                      <th className="text-center">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Holidays</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Leaves</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Clients</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Projects</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Tasks</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"  />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Chats</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>src/assets</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Timing Sheets</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox"   />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="modal custom-modal fade" id="delete_employee" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Employee</h3>
              <p>Are you sure want to delete?</p>
            </div>
            <div className="modal-btn delete-action">
              <div className="row">
                <div className="col-6">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-primary continue-btn"
                  >
                    Delete
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    className="btn btn-primary cancel-btn"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

    </>
  )
}

export default EmployeeList