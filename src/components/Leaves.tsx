import React from 'react'

const Leaves = () => {
  return (
    <>

    <div className="row">

        <h2>Leaves</h2>
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped custom-table mb-0 datatable">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>No of Days</th>
                <th>Reason</th>
                <th className="text-center">Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile.html" className="avatar">
                      <img
                        src="src/assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="#">
                      Richard Miles <span>Web Developer</span>
                    </a>
                  </h2>
                </td>
                <td>Casual Leave</td>
                <td>8 Mar 2019</td>
                <td>9 Mar 2019</td>
                <td>2 days</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-purple" /> New
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                        src="src/assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a>
                      {" "}
                      John Doe <span>Web Designer</span>
                    </a>
                  </h2>
                </td>
                <td>Medical Leave</td>
                <td>27 Feb 2019</td>
                <td>27 Feb 2019</td>
                <td>1 day</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-success" />{" "}
                      Approved
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                    <a>
                      John Smith <span>Android Developer</span>
                    </a>
                  </h2>
                </td>
                <td>LOP</td>
                <td>24 Feb 2019</td>
                <td>25 Feb 2019</td>
                <td>2 days</td>
                <td>Personnal</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-success" />{" "}
                      Approved
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                    <a>
                      Mike Litorus <span>IOS Developer</span>
                    </a>
                  </h2>
                </td>
                <td>Paternity Leave</td>
                <td>13 Feb 2019</td>
                <td>17 Feb 2019</td>
                <td>5 days</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-danger" />{" "}
                      Declined
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                        src="src/assets/img/profiles/avatar-24.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a>
                      Richard Parker <span>Web Developer</span>
                    </a>
                  </h2>
                </td>
                <td>Casual Leave</td>
                <td>30 Jan 2019</td>
                <td>31 Jan 2019</td>
                <td>2 days</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-purple" /> New
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                        src="src/assets/img/profiles/avatar-08.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a>
                      Catherine Manseau <span>Web Developer</span>
                    </a>
                  </h2>
                </td>
                <td>Maternity Leave</td>
                <td>5 Jan 2019</td>
                <td>15 Jan 2019</td>
                <td>10 days</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-success" />{" "}
                      Approved
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                        src="src/assets/img/profiles/avatar-15.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a>
                      Buster Wigton <span>Web Developer</span>
                    </a>
                  </h2>
                </td>
                <td>Hospitalisation</td>
                <td>15 Jan 2019</td>
                <td>25 Jan 2019</td>
                <td>10 days</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-success" />{" "}
                      Approved
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                        src="src/assets/img/profiles/avatar-20.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a>
                      Melita Faucher <span>Web Developer</span>
                    </a>
                  </h2>
                </td>
                <td>Casual Leave</td>
                <td>13 Jan 2019</td>
                <td>14 Jan 2019</td>
                <td>2 days</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-danger" />{" "}
                      Declined
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                        src="src/assets/img/profiles/avatar-03.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a>
                      Tarah Shropshire <span>Web Developer</span>
                    </a>
                  </h2>
                </td>
                <td>Casual Leave</td>
                <td>10 Jan 2019</td>
                <td>10 Jan 2019</td>
                <td>1 day</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-purple" /> New
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                        src="src/assets/img/profiles/avatar-20.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a>
                      Domenic Houston <span>Web Developer</span>
                    </a>
                  </h2>
                </td>
                <td>Casual Leave</td>
                <td>10 Jan 2019</td>
                <td>11 Jan 2019</td>
                <td>2 days</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-success" />{" "}
                      Approved
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                        src="src/assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a>
                      John Doe <span>Web Designer</span>
                    </a>
                  </h2>
                </td>
                <td>Casual Leave</td>
                <td>9 Jan 2019</td>
                <td>10 Jan 2019</td>
                <td>2 days</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-success" />{" "}
                      Approved
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
                        src="src/assets/img/profiles/avatar-25.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a>
                      Rolland Webber <span>Web Developer</span>
                    </a>
                  </h2>
                </td>
                <td>Casual Leave</td>
                <td>7 Jan 2019</td>
                <td>8 Jan 2019</td>
                <td>2 days</td>
                <td>Going to Hospital</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-danger" />{" "}
                      Declined
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve_leave"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Declined
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
                        data-bs-target="#edit_leave"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_approve"
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
  
  </>
  )
}

export default Leaves