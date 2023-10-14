import React from 'react'

const EmployeeList = () => {
  return (
    <>
  <div className="header">
    <div className="header-left">
      <a href="admin-dashboard.html" className="logo">
        <img src="assets/img/logo.png" width={40} height={40} alt="Logo" />
      </a>
      <a href="admin-dashboard.html" className="logo2">
        <img src="assets/img/logo2.png" width={40} height={40} alt="Logo" />
      </a>
    </div>
    <a id="toggle_btn" href="javascript:void(0);">
      <span className="bar-icon">
        <span />
        <span />
        <span />
      </span>
    </a>
    <div className="page-title-box">
      <h3>Dreamguy's Technologies</h3>
    </div>
    <a id="mobile_btn" className="mobile_btn" href="#sidebar">
      <i className="fa-solid fa-bars" />
    </a>
    <ul className="nav user-menu">
      <li className="nav-item">
        <div className="top-nav-search">
          <a href="javascript:void(0);" className="responsive-search">
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <form action="https://smarthr.dreamguystech.com/html/template/search.html">
            <input
              className="form-control"
              type="text"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
      </li>
      <li className="nav-item dropdown has-arrow flag-nav">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
        >
          <img src="assets/img/flags/us.png" alt="Flag" height={20} />{" "}
          <span>English</span>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a href="javascript:void(0);" className="dropdown-item">
            <img src="assets/img/flags/us.png" alt="Flag" height={16} /> English
          </a>
          <a href="javascript:void(0);" className="dropdown-item">
            <img src="assets/img/flags/fr.png" alt="Flag" height={16} /> French
          </a>
          <a href="javascript:void(0);" className="dropdown-item">
            <img src="assets/img/flags/es.png" alt="Flag" height={16} /> Spanish
          </a>
          <a href="javascript:void(0);" className="dropdown-item">
            <img src="assets/img/flags/de.png" alt="Flag" height={16} /> German
          </a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          href="#"
          className="dropdown-toggle nav-link"
          data-bs-toggle="dropdown"
        >
          <i className="fa-regular fa-bell" />{" "}
          <span className="badge rounded-pill">3</span>
        </a>
        <div className="dropdown-menu notifications">
          <div className="topnav-dropdown-header">
            <span className="notification-title">Notifications</span>
            <a href="javascript:void(0)" className="clear-noti">
              {" "}
              Clear All{" "}
            </a>
          </div>
          <div className="noti-content">
            <ul className="notification-list">
              <li className="notification-message">
                <a href="activities.html">
                  <div className="chat-block d-flex">
                    <span className="avatar flex-shrink-0">
                      <img
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </span>
                    <div className="media-body flex-grow-1">
                      <p className="noti-details">
                        <span className="noti-title">John Doe</span> added new
                        task{" "}
                        <span className="noti-title">
                          Patient appointment booking
                        </span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">4 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="chat-block d-flex">
                    <span className="avatar flex-shrink-0">
                      <img
                        src="assets/img/profiles/avatar-03.jpg"
                        alt="User Image"
                      />
                    </span>
                    <div className="media-body flex-grow-1">
                      <p className="noti-details">
                        <span className="noti-title">Tarah Shropshire</span>{" "}
                        changed the task name{" "}
                        <span className="noti-title">
                          Appointment booking with payment gateway
                        </span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">6 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="chat-block d-flex">
                    <span className="avatar flex-shrink-0">
                      <img
                        src="assets/img/profiles/avatar-06.jpg"
                        alt="User Image"
                      />
                    </span>
                    <div className="media-body flex-grow-1">
                      <p className="noti-details">
                        <span className="noti-title">Misty Tison</span> added{" "}
                        <span className="noti-title">Domenic Houston</span> and{" "}
                        <span className="noti-title">Claire Mapes</span> to
                        project{" "}
                        <span className="noti-title">
                          Doctor available module
                        </span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">8 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="chat-block d-flex">
                    <span className="avatar flex-shrink-0">
                      <img
                        src="assets/img/profiles/avatar-17.jpg"
                        alt="User Image"
                      />
                    </span>
                    <div className="media-body flex-grow-1">
                      <p className="noti-details">
                        <span className="noti-title">Rolland Webber</span>{" "}
                        completed task{" "}
                        <span className="noti-title">
                          Patient and Doctor video conferencing
                        </span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">12 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="chat-block d-flex">
                    <span className="avatar flex-shrink-0">
                      <img
                        src="assets/img/profiles/avatar-13.jpg"
                        alt="User Image"
                      />
                    </span>
                    <div className="media-body flex-grow-1">
                      <p className="noti-details">
                        <span className="noti-title">Bernardo Galaviz</span>{" "}
                        added new task{" "}
                        <span className="noti-title">Private chat module</span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">2 days ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <a href="activities.html">View all Notifications</a>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          href="#"
          className="dropdown-toggle nav-link"
          data-bs-toggle="dropdown"
        >
          <i className="fa-regular fa-comment" />{" "}
          <span className="badge rounded-pill">8</span>
        </a>
        <div className="dropdown-menu notifications">
          <div className="topnav-dropdown-header">
            <span className="notification-title">Messages</span>
            <a href="javascript:void(0)" className="clear-noti">
              {" "}
              Clear All{" "}
            </a>
          </div>
          <div className="noti-content">
            <ul className="notification-list">
              <li className="notification-message">
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">
                        <img
                          src="assets/img/profiles/avatar-09.jpg"
                          alt="User Image"
                        />
                      </span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Richard Miles </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">
                        <img
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="User Image"
                        />
                      </span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">John Doe</span>
                      <span className="message-time">6 Mar</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">
                        <img
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="User Image"
                        />
                      </span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Tarah Shropshire </span>
                      <span className="message-time">5 Mar</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">
                        <img
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="User Image"
                        />
                      </span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Mike Litorus</span>
                      <span className="message-time">3 Mar</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">
                        <img
                          src="assets/img/profiles/avatar-08.jpg"
                          alt="User Image"
                        />
                      </span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">
                        {" "}
                        Catherine Manseau{" "}
                      </span>
                      <span className="message-time">27 Feb</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <a href="chat.html">View all Messages</a>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown has-arrow main-drop">
        <a
          href="#"
          className="dropdown-toggle nav-link"
          data-bs-toggle="dropdown"
        >
          <span className="user-img">
            <img src="assets/img/profiles/avatar-21.jpg" alt="User Image" />
            <span className="status online" />
          </span>
          <span>Admin</span>
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="profile.html">
            My Profile
          </a>
          <a className="dropdown-item" href="settings.html">
            Settings
          </a>
          <a className="dropdown-item" href="index.html">
            Logout
          </a>
        </div>
      </li>
    </ul>
    <div className="dropdown mobile-user-menu">
      <a
        href="#"
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa-solid fa-ellipsis-vertical" />
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="profile.html">
          My Profile
        </a>
        <a className="dropdown-item" href="settings.html">
          Settings
        </a>
        <a className="dropdown-item" href="index.html">
          Logout
        </a>
      </div>
    </div>
  </div>
  {/* <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <nav className="greedys sidebar-horizantal">
          <ul className="list-inline-item list-unstyled links">
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="admin-dashboard.html">Admin Dashboard</a>
                </li>
                <li>
                  <a href="employee-dashboard.html">Employee Dashboard</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-cube" /> <span> Apps</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="chat.html">Chat</a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <span> Calls</span> <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="voice-call.html">Voice Call</a>
                    </li>
                    <li>
                      <a href="video-call.html">Video Call</a>
                    </li>
                    <li>
                      <a href="outgoing-call.html">Outgoing Call</a>
                    </li>
                    <li>
                      <a href="incoming-call.html">Incoming Call</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="events.html">Calendar</a>
                </li>
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
                <li>
                  <a href="inbox.html">Email</a>
                </li>
                <li>
                  <a href="file-manager.html">File Manager</a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Employees</span>
            </li>
            <li className="submenu">
              <a href="#" className="noti-dot">
                <i className="la la-user" /> <span> Employees</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="employees.html">All Employees</a>
                </li>
                <li>
                  <a href="holidays.html">Holidays</a>
                </li>
                <li>
                  <a href="leaves.html">
                    Leaves (Admin){" "}
                    <span className="badge rounded-pill bg-primary float-end">
                      1
                    </span>
                  </a>
                </li>
                <li>
                  <a href="leaves-employee.html">Leaves (Employee)</a>
                </li>
                <li>
                  <a href="leave-settings.html">Leave Settings</a>
                </li>
                <li>
                  <a href="attendance.html">Attendance (Admin)</a>
                </li>
                <li>
                  <a href="attendance-employee.html">Attendance (Employee)</a>
                </li>
                <li>
                  <a href="departments.html">Departments</a>
                </li>
                <li>
                  <a href="designations.html">Designations</a>
                </li>
                <li>
                  <a href="timesheet.html">Timesheet</a>
                </li>
                <li>
                  <a href="shift-scheduling.html">Shift &amp; Schedule</a>
                </li>
                <li>
                  <a href="overtime.html">Overtime</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="clients.html">
                <i className="la la-users" /> <span>Clients</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-rocket" /> <span> Projects</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li>
                  <a href="tasks.html">Tasks</a>
                </li>
                <li>
                  <a href="task-board.html">Task Board</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="leads.html">
                <i className="la la-user-secret" /> <span>Leads</span>
              </a>
            </li>
            <li>
              <a href="tickets.html">
                <i className="la la-ticket" /> <span>Tickets</span>
              </a>
            </li>
            <li className="menu-title">
              <span>HR</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-files-o" /> <span> Sales </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="estimates.html">Estimates</a>
                </li>
                <li>
                  <a href="invoices.html">Invoices</a>
                </li>
                <li>
                  <a href="payments.html">Payments</a>
                </li>
                <li>
                  <a href="expenses.html">Expenses</a>
                </li>
                <li>
                  <a href="provident-fund.html">Provident Fund</a>
                </li>
                <li>
                  <a href="taxes.html">Taxes</a>
                </li>
              </ul>
            </li>
          </ul>
          <button className="viewmoremenu">More Menu</button>
          <ul className="hidden-links hidden">
            <li className="submenu">
              <a href="#">
                <i className="la la-files-o" /> <span> Accounting </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="categories.html">Categories</a>
                </li>
                <li>
                  <a href="budgets.html">Budgets</a>
                </li>
                <li>
                  <a href="budget-expenses.html">Budget Expenses</a>
                </li>
                <li>
                  <a href="budget-revenues.html">Budget Revenues</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-money" /> <span> Payroll </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="salary.html"> Employee Salary </a>
                </li>
                <li>
                  <a href="salary-view.html"> Payslip </a>
                </li>
                <li>
                  <a href="payroll-items.html"> Payroll Items </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="policies.html">
                <i className="la la-file-pdf-o" /> <span>Policies</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-pie-chart" /> <span> Reports </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="expense-reports.html"> Expense Report </a>
                </li>
                <li>
                  <a href="invoice-reports.html"> Invoice Report </a>
                </li>
                <li>
                  <a href="payments-reports.html"> Payments Report </a>
                </li>
                <li>
                  <a href="project-reports.html"> Project Report </a>
                </li>
                <li>
                  <a href="task-reports.html"> Task Report </a>
                </li>
                <li>
                  <a href="user-reports.html"> User Report </a>
                </li>
                <li>
                  <a href="employee-reports.html"> Employee Report </a>
                </li>
                <li>
                  <a href="payslip-reports.html"> Payslip Report </a>
                </li>
                <li>
                  <a href="attendance-reports.html"> Attendance Report </a>
                </li>
                <li>
                  <a href="leave-reports.html"> Leave Report </a>
                </li>
                <li>
                  <a href="daily-reports.html"> Daily Report </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Performance</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-graduation-cap" />{" "}
                <span> Performance </span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="performance-indicator.html">
                    {" "}
                    Performance Indicator{" "}
                  </a>
                </li>
                <li>
                  <a href="performance.html"> Performance Review </a>
                </li>
                <li>
                  <a href="performance-appraisal.html">
                    {" "}
                    Performance Appraisal{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-crosshairs" /> <span> Goals </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="goal-tracking.html"> Goal List </a>
                </li>
                <li>
                  <a href="goal-type.html"> Goal Type </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-edit" /> <span> Training </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="training.html"> Training List </a>
                </li>
                <li>
                  <a href="trainers.html"> Trainers</a>
                </li>
                <li>
                  <a href="training-type.html"> Training Type </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="promotion.html">
                <i className="la la-bullhorn" /> <span>Promotion</span>
              </a>
            </li>
            <li>
              <a href="resignation.html">
                <i className="la la-external-link-square" />{" "}
                <span>Resignation</span>
              </a>
            </li>
            <li>
              <a href="termination.html">
                <i className="la la-times-circle" /> <span>Termination</span>
              </a>
            </li>
            <li className="menu-title">
              <span>Administration</span>
            </li>
            <li>
              <a href="assets.html">
                <i className="la la-object-ungroup" /> <span>Assets</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-briefcase" /> <span> Jobs </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="user-dashboard.html"> User Dasboard </a>
                </li>
                <li>
                  <a href="jobs-dashboard.html"> Jobs Dasboard </a>
                </li>
                <li>
                  <a href="jobs.html"> Manage Jobs </a>
                </li>
                <li>
                  <a href="manage-resumes.html"> Manage Resumes </a>
                </li>
                <li>
                  <a href="shortlist-candidates.html"> Shortlist Candidates </a>
                </li>
                <li>
                  <a href="interview-questions.html"> Interview Questions </a>
                </li>
                <li>
                  <a href="offer_approvals.html"> Offer Approvals </a>
                </li>
                <li>
                  <a href="experiance-level.html"> Experience Level </a>
                </li>
                <li>
                  <a href="candidates.html"> Candidates List </a>
                </li>
                <li>
                  <a href="schedule-timing.html"> Schedule timing </a>
                </li>
                <li>
                  <a href="apptitude-result.html"> Aptitude Results </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="knowledgebase.html">
                <i className="la la-question" /> <span>Knowledgebase</span>
              </a>
            </li>
            <li>
              <a href="activities.html">
                <i className="la la-bell" /> <span>Activities</span>
              </a>
            </li>
            <li>
              <a href="users.html">
                <i className="la la-user-plus" /> <span>Users</span>
              </a>
            </li>
            <li>
              <a href="settings.html">
                <i className="la la-cog" /> <span>Settings</span>
              </a>
            </li>
            <li className="menu-title">
              <span>Pages</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-user" /> <span> Profile </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="profile.html"> Employee Profile </a>
                </li>
                <li>
                  <a href="client-profile.html"> Client Profile </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-key" /> <span> Authentication </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="index.html"> Login </a>
                </li>
                <li>
                  <a href="register.html"> Register </a>
                </li>
                <li>
                  <a href="forgot-password.html"> Forgot Password </a>
                </li>
                <li>
                  <a href="otp.html"> OTP </a>
                </li>
                <li>
                  <a href="lock-screen.html"> Lock Screen </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-exclamation-triangle" />{" "}
                <span> Error Pages </span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="error-404.html">404 Error </a>
                </li>
                <li>
                  <a href="error-500.html">500 Error </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-hand-o-up" /> <span> Subscriptions </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="subscriptions.html"> Subscriptions (Admin) </a>
                </li>
                <li>
                  <a href="subscriptions-company.html">
                    {" "}
                    Subscriptions (Company){" "}
                  </a>
                </li>
                <li>
                  <a href="subscribed-companies.html"> Subscribed Companies</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-columns" /> <span> Pages </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="search.html"> Search </a>
                </li>
                <li>
                  <a href="faq.html"> FAQ </a>
                </li>
                <li>
                  <a href="terms.html"> Terms </a>
                </li>
                <li>
                  <a href="privacy-policy.html"> Privacy Policy </a>
                </li>
                <li>
                  <a href="blank-page.html"> Blank Page </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>UI Interface</span>
            </li>
            <li>
              <a href="components.html">
                <i className="la la-puzzle-piece" /> <span>Components</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-object-group" /> <span> Forms </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="form-basic-inputs.html">Basic Inputs </a>
                </li>
                <li>
                  <a href="form-input-groups.html">Input Groups </a>
                </li>
                <li>
                  <a href="form-horizontal.html">Horizontal Form </a>
                </li>
                <li>
                  <a href="form-vertical.html"> Vertical Form </a>
                </li>
                <li>
                  <a href="form-mask.html"> Form Mask </a>
                </li>
                <li>
                  <a href="form-validation.html"> Form Validation </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-table" /> <span> Tables </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="tables-basic.html">Basic Tables </a>
                </li>
                <li>
                  <a href="data-tables.html">Data Table </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Extras</span>
            </li>
            <li>
              <a href="#">
                <i className="la la-file-text" /> <span>Documentation</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i className="la la-info" /> <span>Change Log</span>{" "}
                <span className="badge badge-primary ms-auto">v3.4</span>
              </a>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    {" "}
                    <span>Level 1</span> <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="javascript:void(0);">
                        <span>Level 2</span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a href="javascript:void(0);">
                        {" "}
                        <span> Level 2</span> <span className="menu-arrow" />
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:void(0);">Level 3</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Level 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        {" "}
                        <span>Level 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    {" "}
                    <span>Level 1</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <ul className="sidebar-vertical">
          <li className="menu-title">
            <span>Main</span>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="admin-dashboard.html">Admin Dashboard</a>
              </li>
              <li>
                <a href="employee-dashboard.html">Employee Dashboard</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-cube" /> <span> Apps</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="chat.html">Chat</a>
              </li>
              <li className="submenu">
                <a href="#">
                  <span> Calls</span> <span className="menu-arrow" />
                </a>
                <ul>
                  <li>
                    <a href="voice-call.html">Voice Call</a>
                  </li>
                  <li>
                    <a href="video-call.html">Video Call</a>
                  </li>
                  <li>
                    <a href="outgoing-call.html">Outgoing Call</a>
                  </li>
                  <li>
                    <a href="incoming-call.html">Incoming Call</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="events.html">Calendar</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
              <li>
                <a href="inbox.html">Email</a>
              </li>
              <li>
                <a href="file-manager.html">File Manager</a>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Employees</span>
          </li>
          <li className="submenu">
            <a href="#" className="noti-dot">
              <i className="la la-user" /> <span> Employees</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a className="active" href="employees.html">
                  All Employees
                </a>
              </li>
              <li>
                <a href="holidays.html">Holidays</a>
              </li>
              <li>
                <a href="leaves.html">
                  Leaves (Admin){" "}
                  <span className="badge rounded-pill bg-primary float-end">
                    1
                  </span>
                </a>
              </li>
              <li>
                <a href="leaves-employee.html">Leaves (Employee)</a>
              </li>
              <li>
                <a href="leave-settings.html">Leave Settings</a>
              </li>
              <li>
                <a href="attendance.html">Attendance (Admin)</a>
              </li>
              <li>
                <a href="attendance-employee.html">Attendance (Employee)</a>
              </li>
              <li>
                <a href="departments.html">Departments</a>
              </li>
              <li>
                <a href="designations.html">Designations</a>
              </li>
              <li>
                <a href="timesheet.html">Timesheet</a>
              </li>
              <li>
                <a href="shift-scheduling.html">Shift &amp; Schedule</a>
              </li>
              <li>
                <a href="overtime.html">Overtime</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="clients.html">
              <i className="la la-users" /> <span>Clients</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-rocket" /> <span> Projects</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="projects.html">Projects</a>
              </li>
              <li>
                <a href="tasks.html">Tasks</a>
              </li>
              <li>
                <a href="task-board.html">Task Board</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="leads.html">
              <i className="la la-user-secret" /> <span>Leads</span>
            </a>
          </li>
          <li>
            <a href="tickets.html">
              <i className="la la-ticket" /> <span>Tickets</span>
            </a>
          </li>
          <li className="menu-title">
            <span>HR</span>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-files-o" /> <span> Sales </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="estimates.html">Estimates</a>
              </li>
              <li>
                <a href="invoices.html">Invoices</a>
              </li>
              <li>
                <a href="payments.html">Payments</a>
              </li>
              <li>
                <a href="expenses.html">Expenses</a>
              </li>
              <li>
                <a href="provident-fund.html">Provident Fund</a>
              </li>
              <li>
                <a href="taxes.html">Taxes</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-files-o" /> <span> Accounting </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="categories.html">Categories</a>
              </li>
              <li>
                <a href="budgets.html">Budgets</a>
              </li>
              <li>
                <a href="budget-expenses.html">Budget Expenses</a>
              </li>
              <li>
                <a href="budget-revenues.html">Budget Revenues</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-money" /> <span> Payroll </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="salary.html"> Employee Salary </a>
              </li>
              <li>
                <a href="salary-view.html"> Payslip </a>
              </li>
              <li>
                <a href="payroll-items.html"> Payroll Items </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="policies.html">
              <i className="la la-file-pdf-o" /> <span>Policies</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-pie-chart" /> <span> Reports </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="expense-reports.html"> Expense Report </a>
              </li>
              <li>
                <a href="invoice-reports.html"> Invoice Report </a>
              </li>
              <li>
                <a href="payments-reports.html"> Payments Report </a>
              </li>
              <li>
                <a href="project-reports.html"> Project Report </a>
              </li>
              <li>
                <a href="task-reports.html"> Task Report </a>
              </li>
              <li>
                <a href="user-reports.html"> User Report </a>
              </li>
              <li>
                <a href="employee-reports.html"> Employee Report </a>
              </li>
              <li>
                <a href="payslip-reports.html"> Payslip Report </a>
              </li>
              <li>
                <a href="attendance-reports.html"> Attendance Report </a>
              </li>
              <li>
                <a href="leave-reports.html"> Leave Report </a>
              </li>
              <li>
                <a href="daily-reports.html"> Daily Report </a>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Performance</span>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-graduation-cap" /> <span> Performance </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="performance-indicator.html"> Performance Indicator </a>
              </li>
              <li>
                <a href="performance.html"> Performance Review </a>
              </li>
              <li>
                <a href="performance-appraisal.html"> Performance Appraisal </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-crosshairs" /> <span> Goals </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="goal-tracking.html"> Goal List </a>
              </li>
              <li>
                <a href="goal-type.html"> Goal Type </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-edit" /> <span> Training </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="training.html"> Training List </a>
              </li>
              <li>
                <a href="trainers.html"> Trainers</a>
              </li>
              <li>
                <a href="training-type.html"> Training Type </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="promotion.html">
              <i className="la la-bullhorn" /> <span>Promotion</span>
            </a>
          </li>
          <li>
            <a href="resignation.html">
              <i className="la la-external-link-square" />{" "}
              <span>Resignation</span>
            </a>
          </li>
          <li>
            <a href="termination.html">
              <i className="la la-times-circle" /> <span>Termination</span>
            </a>
          </li>
          <li className="menu-title">
            <span>Administration</span>
          </li>
          <li>
            <a href="assets.html">
              <i className="la la-object-ungroup" /> <span>Assets</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-briefcase" /> <span> Jobs </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="user-dashboard.html"> User Dasboard </a>
              </li>
              <li>
                <a href="jobs-dashboard.html"> Jobs Dasboard </a>
              </li>
              <li>
                <a href="jobs.html"> Manage Jobs </a>
              </li>
              <li>
                <a href="manage-resumes.html"> Manage Resumes </a>
              </li>
              <li>
                <a href="shortlist-candidates.html"> Shortlist Candidates </a>
              </li>
              <li>
                <a href="interview-questions.html"> Interview Questions </a>
              </li>
              <li>
                <a href="offer_approvals.html"> Offer Approvals </a>
              </li>
              <li>
                <a href="experiance-level.html"> Experience Level </a>
              </li>
              <li>
                <a href="candidates.html"> Candidates List </a>
              </li>
              <li>
                <a href="schedule-timing.html"> Schedule timing </a>
              </li>
              <li>
                <a href="apptitude-result.html"> Aptitude Results </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="knowledgebase.html">
              <i className="la la-question" /> <span>Knowledgebase</span>
            </a>
          </li>
          <li>
            <a href="activities.html">
              <i className="la la-bell" /> <span>Activities</span>
            </a>
          </li>
          <li>
            <a href="users.html">
              <i className="la la-user-plus" /> <span>Users</span>
            </a>
          </li>
          <li>
            <a href="settings.html">
              <i className="la la-cog" /> <span>Settings</span>
            </a>
          </li>
          <li className="menu-title">
            <span>Pages</span>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-user" /> <span> Profile </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="profile.html"> Employee Profile </a>
              </li>
              <li>
                <a href="client-profile.html"> Client Profile </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-key" /> <span> Authentication </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="index.html"> Login </a>
              </li>
              <li>
                <a href="register.html"> Register </a>
              </li>
              <li>
                <a href="forgot-password.html"> Forgot Password </a>
              </li>
              <li>
                <a href="otp.html"> OTP </a>
              </li>
              <li>
                <a href="lock-screen.html"> Lock Screen </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-exclamation-triangle" />{" "}
              <span> Error Pages </span> <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="error-404.html">404 Error </a>
              </li>
              <li>
                <a href="error-500.html">500 Error </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-hand-o-up" /> <span> Subscriptions </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="subscriptions.html"> Subscriptions (Admin) </a>
              </li>
              <li>
                <a href="subscriptions-company.html">
                  {" "}
                  Subscriptions (Company){" "}
                </a>
              </li>
              <li>
                <a href="subscribed-companies.html"> Subscribed Companies</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-columns" /> <span> Pages </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="search.html"> Search </a>
              </li>
              <li>
                <a href="faq.html"> FAQ </a>
              </li>
              <li>
                <a href="terms.html"> Terms </a>
              </li>
              <li>
                <a href="privacy-policy.html"> Privacy Policy </a>
              </li>
              <li>
                <a href="blank-page.html"> Blank Page </a>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>UI Interface</span>
          </li>
          <li>
            <a href="components.html">
              <i className="la la-puzzle-piece" /> <span>Components</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-object-group" /> <span> Forms </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="form-basic-inputs.html">Basic Inputs </a>
              </li>
              <li>
                <a href="form-input-groups.html">Input Groups </a>
              </li>
              <li>
                <a href="form-horizontal.html">Horizontal Form </a>
              </li>
              <li>
                <a href="form-vertical.html"> Vertical Form </a>
              </li>
              <li>
                <a href="form-mask.html"> Form Mask </a>
              </li>
              <li>
                <a href="form-validation.html"> Form Validation </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-table" /> <span> Tables </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li>
                <a href="tables-basic.html">Basic Tables </a>
              </li>
              <li>
                <a href="data-tables.html">Data Table </a>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Extras</span>
          </li>
          <li>
            <a href="#">
              <i className="la la-file-text" /> <span>Documentation</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="la la-info" /> <span>Change Log</span>{" "}
              <span className="badge badge-primary ms-auto">v3.4</span>
            </a>
          </li>
          <li className="submenu">
            <a href="javascript:void(0);">
              <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul>
              <li className="submenu">
                <a href="javascript:void(0);">
                  {" "}
                  <span>Level 1</span> <span className="menu-arrow" />
                </a>
                <ul>
                  <li>
                    <a href="javascript:void(0);">
                      <span>Level 2</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      {" "}
                      <span> Level 2</span> <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">Level 3</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Level 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);">
                  {" "}
                  <span>Level 1</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div> */}
  <div className="two-col-bar" id="two-col-bar">
    <div className="sidebar sidebar-twocol">
      <div className="sidebar-left slimscroll">
        <div
          className="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link"
            id="v-pills-dashboard-tab"
            title="Dashboard"
            data-bs-toggle="pill"
            href="#v-pills-dashboard"
            role="tab"
            aria-controls="v-pills-dashboard"
            aria-selected="true"
          >
            <span className="material-icons-outlined">home</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-apps-tab"
            title="Apps"
            data-bs-toggle="pill"
            href="#v-pills-apps"
            role="tab"
            aria-controls="v-pills-apps"
            aria-selected="false"
          >
            <span className="material-icons-outlined">dashboard</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-employees-tab"
            title="Employees"
            data-bs-toggle="pill"
            href="#v-pills-employees"
            role="tab"
            aria-controls="v-pills-employees"
            aria-selected="false"
          >
            <span className="material-icons-outlined">people</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-clients-tab"
            title="Clients"
            data-bs-toggle="pill"
            href="#v-pills-clients"
            role="tab"
            aria-controls="v-pills-clients"
            aria-selected="false"
          >
            <span className="material-icons-outlined">person</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-projects-tab"
            title="Projects"
            data-bs-toggle="pill"
            href="#v-pills-projects"
            role="tab"
            aria-controls="v-pills-projects"
            aria-selected="false"
          >
            <span className="material-icons-outlined">topic</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-leads-tab"
            title="Leads"
            data-bs-toggle="pill"
            href="#v-pills-leads"
            role="tab"
            aria-controls="v-pills-leads"
            aria-selected="false"
          >
            <span className="material-icons-outlined">leaderboard</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-tickets-tab"
            title="Tickets"
            data-bs-toggle="pill"
            href="#v-pills-tickets"
            role="tab"
            aria-controls="v-pills-tickets"
            aria-selected="false"
          >
            <span className="material-icons-outlined">confirmation_number</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-sales-tab"
            title="Sales"
            data-bs-toggle="pill"
            href="#v-pills-sales"
            role="tab"
            aria-controls="v-pills-sales"
            aria-selected="false"
          >
            <span className="material-icons-outlined">shopping_bag</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-accounting-tab"
            title="Accounting"
            data-bs-toggle="pill"
            href="#v-pills-accounting"
            role="tab"
            aria-controls="v-pills-accounting"
            aria-selected="false"
          >
            <span className="material-icons-outlined">
              account_balance_wallet
            </span>
          </a>
          <a
            className="nav-link"
            id="v-pills-payroll-tab"
            title="Payroll"
            data-bs-toggle="pill"
            href="#v-pills-payroll"
            role="tab"
            aria-controls="v-pills-payroll"
            aria-selected="false"
          >
            <span className="material-icons-outlined">request_quote</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-policies-tab"
            title="Policies"
            data-bs-toggle="pill"
            href="#v-pills-policies"
            role="tab"
            aria-controls="v-pills-policies"
            aria-selected="false"
          >
            <span className="material-icons-outlined">verified_user</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-reports-tab"
            title="Reports"
            data-bs-toggle="pill"
            href="#v-pills-reports"
            role="tab"
            aria-controls="v-pills-reports"
            aria-selected="false"
          >
            <span className="material-icons-outlined">
              report_gmailerrorred
            </span>
          </a>
          <a
            className="nav-link"
            id="v-pills-performance-tab"
            title="Performance"
            data-bs-toggle="pill"
            href="#v-pills-performance"
            role="tab"
            aria-controls="v-pills-performance"
            aria-selected="false"
          >
            <span className="material-icons-outlined">shutter_speed</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-goals-tab"
            title="Goals"
            data-bs-toggle="pill"
            href="#v-pills-goals"
            role="tab"
            aria-controls="v-pills-goals"
            aria-selected="false"
          >
            <span className="material-icons-outlined">track_changes</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-training-tab"
            title="Training"
            data-bs-toggle="pill"
            href="#v-pills-training"
            role="tab"
            aria-controls="v-pills-training"
            aria-selected="false"
          >
            <span className="material-icons-outlined">checklist_rtl</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-promotion-tab"
            title="Promotions"
            data-bs-toggle="pill"
            href="#v-pills-promotion"
            role="tab"
            aria-controls="v-pills-promotion"
            aria-selected="false"
          >
            <span className="material-icons-outlined">auto_graph</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-resignation-tab"
            title="Resignation"
            data-bs-toggle="pill"
            href="#v-pills-resignation"
            role="tab"
            aria-controls="v-pills-resignation"
            aria-selected="false"
          >
            <span className="material-icons-outlined">do_not_disturb_alt</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-termination-tab"
            title="Termination"
            data-bs-toggle="pill"
            href="#v-pills-termination"
            role="tab"
            aria-controls="v-pills-termination"
            aria-selected="false"
          >
            <span className="material-icons-outlined">
              indeterminate_check_box
            </span>
          </a>
          <a
            className="nav-link"
            id="v-pills-assets-tab"
            title="Assets"
            data-bs-toggle="pill"
            href="#v-pills-assets"
            role="tab"
            aria-controls="v-pills-assets"
            aria-selected="false"
          >
            <span className="material-icons-outlined">web_asset</span>
          </a>
          <a
            className="nav-link active"
            id="v-pills-jobs-tab"
            title="Jobs"
            data-bs-toggle="pill"
            href="#v-pills-jobs"
            role="tab"
            aria-controls="v-pills-jobs"
            aria-selected="false"
          >
            <span className="material-icons-outlined">work_outline</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-knowledgebase-tab"
            title="Knowledgebase"
            data-bs-toggle="pill"
            href="#v-pills-knowledgebase"
            role="tab"
            aria-controls="v-pills-knowledgebase"
            aria-selected="false"
          >
            <span className="material-icons-outlined">school</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-activities-tab"
            title="Activities"
            data-bs-toggle="pill"
            href="#v-pills-activities"
            role="tab"
            aria-controls="v-pills-activities"
            aria-selected="false"
          >
            <span className="material-icons-outlined">toggle_off</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-users-tab"
            title="Users"
            data-bs-toggle="pill"
            href="#v-pills-users"
            role="tab"
            aria-controls="v-pills-users"
            aria-selected="false"
          >
            <span className="material-icons-outlined">group_add</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-settings-tab"
            title="Settings"
            data-bs-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            <span className="material-icons-outlined">settings</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-profile-tab"
            title="Profile"
            data-bs-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            <span className="material-icons-outlined">manage_accounts</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-authentication-tab"
            title="Authentication"
            data-bs-toggle="pill"
            href="#v-pills-authentication"
            role="tab"
            aria-controls="v-pills-authentication"
            aria-selected="false"
          >
            <span className="material-icons-outlined">
              perm_contact_calendar
            </span>
          </a>
          <a
            className="nav-link"
            id="v-pills-errorpages-tab"
            title="Error Pages"
            data-bs-toggle="pill"
            href="#v-pills-errorpages"
            role="tab"
            aria-controls="v-pills-errorpages"
            aria-selected="false"
          >
            <span className="material-icons-outlined">announcement</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-subscriptions-tab"
            title="Subscriptions"
            data-bs-toggle="pill"
            href="#v-pills-subscriptions"
            role="tab"
            aria-controls="v-pills-subscriptions"
            aria-selected="false"
          >
            <span className="material-icons-outlined">loyalty</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-pages-tab"
            title="Pages"
            data-bs-toggle="pill"
            href="#v-pills-pages"
            role="tab"
            aria-controls="v-pills-pages"
            aria-selected="false"
          >
            <span className="material-icons-outlined">layers</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-forms-tab"
            title="Forms"
            data-bs-toggle="pill"
            href="#v-pills-forms"
            role="tab"
            aria-controls="v-pills-forms"
            aria-selected="false"
          >
            <span className="material-icons-outlined">view_day</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-tables-tab"
            title="Tables"
            data-bs-toggle="pill"
            href="#v-pills-tables"
            role="tab"
            aria-controls="v-pills-tables"
            aria-selected="false"
          >
            <span className="material-icons-outlined">table_rows</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-documentation-tab"
            title="Documentation"
            data-bs-toggle="pill"
            href="#v-pills-documentation"
            role="tab"
            aria-controls="v-pills-documentation"
            aria-selected="false"
          >
            <span className="material-icons-outlined">description</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-changelog-tab"
            title="Changelog"
            data-bs-toggle="pill"
            href="#v-pills-changelog"
            role="tab"
            aria-controls="v-pills-changelog"
            aria-selected="false"
          >
            <span className="material-icons-outlined">sync_alt</span>
          </a>
          <a
            className="nav-link"
            id="v-pills-multilevel-tab"
            title="Multilevel"
            data-bs-toggle="pill"
            href="#v-pills-multilevel"
            role="tab"
            aria-controls="v-pills-multilevel"
            aria-selected="false"
          >
            <span className="material-icons-outlined">library_add_check</span>
          </a>
        </div>
      </div>
      <div className="sidebar-right">
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade"
            id="v-pills-dashboard"
            role="tabpanel"
            aria-labelledby="v-pills-dashboard-tab"
          >
            <p>Dashboard</p>
            <ul>
              <li>
                <a href="admin-dashboard.html">Admin Dashboard</a>
              </li>
              <li>
                <a href="employee-dashboard.html">Employee Dashboard</a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-apps"
            role="tabpanel"
            aria-labelledby="v-pills-apps-tab"
          >
            <p>App</p>
            <ul>
              <li>
                <a href="chat.html">Chat</a>
              </li>
              <li className="sub-menu">
                <a href="#">
                  Calls <span className="menu-arrow" />
                </a>
                <ul>
                  <li>
                    <a href="voice-call.html">Voice Call</a>
                  </li>
                  <li>
                    <a href="video-call.html">Video Call</a>
                  </li>
                  <li>
                    <a href="outgoing-call.html">Outgoing Call</a>
                  </li>
                  <li>
                    <a href="incoming-call.html">Incoming Call</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="calender.html">Calendar</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
              <li>
                <a href="inbox.html">Email</a>
              </li>
              <li>
                <a href="file-manager.html">File Manager</a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-employees"
            role="tabpanel"
            aria-labelledby="v-pills-employees-tab"
          >
            <p>Employees</p>
            <ul>
              <li>
                <a href="employees.html">All Employees</a>
              </li>
              <li>
                <a href="holidays.html">Holidays</a>
              </li>
              <li>
                <a href="leaves.html">
                  Leaves (Admin){" "}
                  <span className="badge rounded-pill bg-primary float-end">
                    1
                  </span>
                </a>
              </li>
              <li>
                <a href="leaves-employee.html">Leaves (Employee)</a>
              </li>
              <li>
                <a href="leave-settings.html">Leave Settings</a>
              </li>
              <li>
                <a href="attendance.html">Attendance (Admin)</a>
              </li>
              <li>
                <a href="attendance-employee.html">Attendance (Employee)</a>
              </li>
              <li>
                <a href="departments.html">Departments</a>
              </li>
              <li>
                <a href="designations.html">Designations</a>
              </li>
              <li>
                <a href="timesheet.html">Timesheet</a>
              </li>
              <li>
                <a href="shift-scheduling.html">Shift &amp; Schedule</a>
              </li>
              <li>
                <a href="overtime.html">Overtime</a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-clients"
            role="tabpanel"
            aria-labelledby="v-pills-clients-tab"
          >
            <p>Clients</p>
            <ul>
              <li>
                <a href="clients.html">Clients</a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-projects"
            role="tabpanel"
            aria-labelledby="v-pills-projects-tab"
          >
            <p>Projects</p>
            <ul>
              <li>
                <a href="projects.html">Projects</a>
              </li>
              <li>
                <a href="tasks.html">Tasks</a>
              </li>
              <li>
                <a href="task-board.html">Task Board</a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-leads"
            role="tabpanel"
            aria-labelledby="v-pills-leads-tab"
          >
            <p>Leads</p>
            <ul>
              <li>
                <a href="leads.html">Leads</a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-tickets"
            role="tabpanel"
            aria-labelledby="v-pills-tickets-tab"
          >
            <p>Tickets</p>
            <ul>
              <li>
                <a href="tickets.html">Tickets</a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-sales"
            role="tabpanel"
            aria-labelledby="v-pills-sales-tab"
          >
            <p>Sales</p>
            <ul>
              <li>
                <a href="estimates.html">Estimates</a>
              </li>
              <li>
                <a href="invoices.html">Invoices</a>
              </li>
              <li>
                <a href="payments.html">Payments</a>
              </li>
              <li>
                <a href="expenses.html">Expenses</a>
              </li>
              <li>
                <a href="provident-fund.html">Provident Fund</a>
              </li>
              <li>
                <a href="taxes.html">Taxes</a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-accounting"
            role="tabpanel"
            aria-labelledby="v-pills-accounting-tab"
          >
            <p>Accounting</p>
            <ul>
              <li>
                <a href="categories.html">Categories</a>
              </li>
              <li>
                <a href="budgets.html">Budgets</a>
              </li>
              <li>
                <a href="budget-expenses.html">Budget Expenses</a>
              </li>
              <li>
                <a href="budget-revenues.html">Budget Revenues</a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-payroll"
            role="tabpanel"
            aria-labelledby="v-pills-payroll-tab"
          >
            <p>Payroll</p>
            <ul>
              <li>
                <a href="salary.html"> Employee Salary </a>
              </li>
              <li>
                <a href="salary-view.html"> Payslip </a>
              </li>
              <li>
                <a href="payroll-items.html"> Payroll Items </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-policies"
            role="tabpanel"
            aria-labelledby="v-pills-policies-tab"
          >
            <p>Policies</p>
            <ul>
              <li>
                <a href="policies.html"> Policies </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-reports"
            role="tabpanel"
            aria-labelledby="v-pills-reports-tab"
          >
            <p>Reports</p>
            <ul>
              <li>
                <a href="expense-reports.html"> Expense Report </a>
              </li>
              <li>
                <a href="invoice-reports.html"> Invoice Report </a>
              </li>
              <li>
                <a href="payments-reports.html"> Payments Report </a>
              </li>
              <li>
                <a href="project-reports.html"> Project Report </a>
              </li>
              <li>
                <a href="task-reports.html"> Task Report </a>
              </li>
              <li>
                <a href="user-reports.html"> User Report </a>
              </li>
              <li>
                <a href="employee-reports.html"> Employee Report </a>
              </li>
              <li>
                <a href="payslip-reports.html"> Payslip Report </a>
              </li>
              <li>
                <a href="attendance-reports.html"> Attendance Report </a>
              </li>
              <li>
                <a href="leave-reports.html"> Leave Report </a>
              </li>
              <li>
                <a href="daily-reports.html"> Daily Report </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-performance"
            role="tabpanel"
            aria-labelledby="v-pills-performance-tab"
          >
            <p>Performance</p>
            <ul>
              <li>
                <a href="performance-indicator.html"> Performance Indicator </a>
              </li>
              <li>
                <a href="performance.html"> Performance Review </a>
              </li>
              <li>
                <a href="performance-appraisal.html"> Performance Appraisal </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-goals"
            role="tabpanel"
            aria-labelledby="v-pills-goals-tab"
          >
            <p>Goals</p>
            <ul>
              <li>
                <a href="goal-tracking.html"> Goal List </a>
              </li>
              <li>
                <a href="goal-type.html"> Goal Type </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-training"
            role="tabpanel"
            aria-labelledby="v-pills-training-tab"
          >
            <p>Training</p>
            <ul>
              <li>
                <a href="training.html"> Training List </a>
              </li>
              <li>
                <a href="trainers.html"> Trainers</a>
              </li>
              <li>
                <a href="training-type.html"> Training Type </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-promotion"
            role="tabpanel"
            aria-labelledby="v-pills-promotion-tab"
          >
            <p>Promotion</p>
            <ul>
              <li>
                <a href="promotion.html"> Promotion </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-resignation"
            role="tabpanel"
            aria-labelledby="v-pills-resignation-tab"
          >
            <p>Resignation</p>
            <ul>
              <li>
                <a href="resignation.html"> Resignation </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-termination"
            role="tabpanel"
            aria-labelledby="v-pills-termination-tab"
          >
            <p>Termination</p>
            <ul>
              <li>
                <a href="termination.html"> Termination </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-assets"
            role="tabpanel"
            aria-labelledby="v-pills-assets-tab"
          >
            <p>Assets</p>
            <ul>
              <li>
                <a href="assets.html"> Assets </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade show active"
            id="v-pills-jobs"
            role="tabpanel"
            aria-labelledby="v-pills-jobs-tab"
          >
            <p>Jobs</p>
            <ul>
              <li>
                <a href="user-dashboard.html" className="active">
                  {" "}
                  User Dasboard{" "}
                </a>
              </li>
              <li>
                <a href="jobs-dashboard.html"> Jobs Dasboard </a>
              </li>
              <li>
                <a href="jobs.html"> Manage Jobs </a>
              </li>
              <li>
                <a href="job-applicants.html"> Applied Jobs </a>
              </li>
              <li>
                <a href="manage-resumes.html"> Manage Resumes </a>
              </li>
              <li>
                <a href="shortlist-candidates.html"> Shortlist Candidates </a>
              </li>
              <li>
                <a href="interview-questions.html"> Interview Questions </a>
              </li>
              <li>
                <a href="offer_approvals.html"> Offer Approvals </a>
              </li>
              <li>
                <a href="experiance-level.html"> Experience Level </a>
              </li>
              <li>
                <a href="candidates.html"> Candidates List </a>
              </li>
              <li>
                <a href="schedule-timing.html"> Schedule timing </a>
              </li>
              <li>
                <a href="apptitude-result.html"> Aptitude Results </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-knowledgebase"
            role="tabpanel"
            aria-labelledby="v-pills-knowledgebase-tab"
          >
            <p>Knowledgebase</p>
            <ul>
              <li>
                <a href="knowledgebase.html"> Knowledgebase </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-activities"
            role="tabpanel"
            aria-labelledby="v-pills-activities-tab"
          >
            <p>Activities</p>
            <ul>
              <li>
                <a href="activities.html"> Activities </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-users"
            role="tabpanel"
            aria-labelledby="v-pills-activities-tab"
          >
            <p>Users</p>
            <ul>
              <li>
                <a href="users.html"> Users </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <p>Settings</p>
            <ul>
              <li>
                <a href="settings.html"> Settings </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <p>Profile</p>
            <ul>
              <li>
                <a href="profile.html"> Employee Profile </a>
              </li>
              <li>
                <a href="client-profile.html"> Client Profile </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-authentication"
            role="tabpanel"
            aria-labelledby="v-pills-authentication-tab"
          >
            <p>Authentication</p>
            <ul>
              <li>
                <a href="index.html"> Login </a>
              </li>
              <li>
                <a href="register.html"> Register </a>
              </li>
              <li>
                <a href="forgot-password.html"> Forgot Password </a>
              </li>
              <li>
                <a href="otp.html"> OTP </a>
              </li>
              <li>
                <a href="lock-screen.html"> Lock Screen </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-errorpages"
            role="tabpanel"
            aria-labelledby="v-pills-errorpages-tab"
          >
            <p>Error Pages</p>
            <ul>
              <li>
                <a href="error-404.html">404 Error </a>
              </li>
              <li>
                <a href="error-500.html">500 Error </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-subscriptions"
            role="tabpanel"
            aria-labelledby="v-pills-subscriptions-tab"
          >
            <p>Subscriptions</p>
            <ul>
              <li>
                <a href="subscriptions.html"> Subscriptions (Admin) </a>
              </li>
              <li>
                <a href="subscriptions-company.html">
                  {" "}
                  Subscriptions (Company){" "}
                </a>
              </li>
              <li>
                <a href="subscribed-companies.html"> Subscribed Companies</a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-pages"
            role="tabpanel"
            aria-labelledby="v-pills-pages-tab"
          >
            <p>Pages</p>
            <ul>
              <li>
                <a href="search.html"> Search </a>
              </li>
              <li>
                <a href="faq.html"> FAQ </a>
              </li>
              <li>
                <a href="terms.html"> Terms </a>
              </li>
              <li>
                <a href="privacy-policy.html"> Privacy Policy </a>
              </li>
              <li>
                <a href="blank-page.html"> Blank Page </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-forms"
            role="tabpanel"
            aria-labelledby="v-pills-forms-tab"
          >
            <p>Forms</p>
            <ul>
              <li>
                <a href="form-basic-inputs.html">Basic Inputs </a>
              </li>
              <li>
                <a href="form-input-groups.html">Input Groups </a>
              </li>
              <li>
                <a href="form-horizontal.html">Horizontal Form </a>
              </li>
              <li>
                <a href="form-vertical.html"> Vertical Form </a>
              </li>
              <li>
                <a href="form-mask.html"> Form Mask </a>
              </li>
              <li>
                <a href="form-validation.html"> Form Validation </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-tables"
            role="tabpanel"
            aria-labelledby="v-pills-tables-tab"
          >
            <p>Tables</p>
            <ul>
              <li>
                <a href="tables-basic.html">Basic Tables </a>
              </li>
              <li>
                <a href="data-tables.html">Data Table </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-documentation"
            role="tabpanel"
            aria-labelledby="v-pills-documentation-tab"
          >
            <p>Documentation</p>
            <ul>
              <li>
                <a href="#">Documentation </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-changelog"
            role="tabpanel"
            aria-labelledby="v-pills-changelog-tab"
          >
            <p>Change Log</p>
            <ul>
              <li>
                <a href="#">
                  <span>Change Log</span>{" "}
                  <span className="badge badge-primary ms-auto">v3.4</span>{" "}
                </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-multilevel"
            role="tabpanel"
            aria-labelledby="v-pills-multilevel-tab"
          >
            <p>Multi Level</p>
            <ul>
              <li className="sub-menu">
                <a href="javascript:void(0);">
                  Level 1 <span className="menu-arrow" />
                </a>
                <ul className="ms-3">
                  <li className="sub-menu">
                    <a href="javascript:void(0);">
                      Level 1 <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">Level 2</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Level 3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);">Level 2</a>
              </li>
              <li>
                <a href="javascript:void(0);">Level 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
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
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_employee"
            >
              <i className="fa-solid fa-plus" /> Add Employee
            </a>
            {/* <div className="view-icons">
              <a href="employees.html" className="grid-view btn btn-link">
                <i className="fa fa-th" />
              </a>
              <a
                href="employees-list.html"
                className="list-view btn btn-link active"
              >
                <i className="fa-solid fa-bars" />
              </a>
            </div> */}
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
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile.html" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-02.jpg"
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
                          src="assets/img/profiles/avatar-09.jpg"
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
                          src="assets/img/profiles/avatar-10.jpg"
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
                          src="assets/img/profiles/avatar-05.jpg"
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
                          src="assets/img/profiles/avatar-11.jpg"
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
                          src="assets/img/profiles/avatar-12.jpg"
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
                          src="assets/img/profiles/avatar-13.jpg"
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
    <div id="add_employee" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Employee</h5>
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
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Employee Name <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                {/* <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Last Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div> */}
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Username <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="email" />
                  </div>
                </div>
                {/* <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Confirm Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div> */}
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                {/* <div className="col-sm-6">
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
                </div> */}
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Phone </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                {/* <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Company</label>
                    <select className="select">
                      <option value="">Global Technologies</option>
                      <option value={1}>Delta Infotech</option>
                    </select>
                  </div>
                </div> */}
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                    <select className="select select2-hidden-accessible">
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
                      User type <span className="text-danger">*</span>
                    </label>
                    <select className="select select select2-hidden-accessible">
                      <option>Select User type</option>
                      <option>Admin</option>
                      <option>Supervisor</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Supervisor <span className="text-danger">*</span>
                    </label>
                    <select className="select select2-hidden-accessible">
                      <option>Select Designation</option>
                      <option>Web Designer</option>
                      <option>Web Developer</option>
                      <option>Android Developer</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* <div className="table-responsive m-t-15">
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
                      <td>Assets</td>
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
              </div> */}
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
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
                      <td>Assets</td>
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