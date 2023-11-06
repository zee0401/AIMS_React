import axios from 'axios'
import { Field, Form, Formik, useFormik,FormikHelpers } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {

  const navigate = useNavigate()
const initialValues ={
  ename:"",
  useremail:"",
  eid:"",
  phone:"",
  department:"",
  location:"",
  designation:"",
  usertype:"user"
}  



  return (
    <>
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
          <Formik 
          initialValues={initialValues}
          onSubmit={(
            values
          ) => {
          //  console.log(values)
           navigate("/",{replace: true})
           }}
          >
          <Form>
            <div className="row">
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Employee Name <span className="text-danger">*</span>
                  </label>
                  <Field className="form-control" type="text" name="ename"/>
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
                    Username/Email <span className="text-danger">*</span>
                  </label>
                  <Field className="form-control" type="text" name="useremail" />
                </div>
              </div>
              {/* <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="email" />
                </div>
              </div> */}
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
                  <Field type="text" className="form-control" name="eid" />
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
                  <Field className="form-control" type="number" name="phone" />
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
                  <Field  name="department" as="select" className="select select2-search--dropdown sel">
                    {/* <option value="">Select Department</option> */}
                    <option value="Web Development">Web Development</option>
                    <option value="IT Management">IT Management</option>
                    <option value="Marketing">Marketing</option>
                  </Field>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Select Office Location <span className="text-danger">*</span>
                  </label>
                  <Field as="select" name="location" className="select select2-search--dropdown sel">
                    <option value="">Select Location</option>
                    <option value="Praman Proserv">Praman Proserv</option>
                    <option value="Metric View">Metric View</option>
                  </Field>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Designation <span className="text-danger">*</span>
                  </label>
                  <Field as="select" name="designation" className="select select2-search--dropdown sel">
                    <option value="">Select Designation</option>
                    <option value="Web Designer">Web Designer</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="Android Developer">Android Developer</option>
                  </Field>
                </div>
              </div>
              <div className="col-md-12" >
              <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">User Type:</label>
                      <div className="col-lg-9" style={{paddingTop:"6px"}}>
                      <div className="form-check form-check-inline">
                      <Field className="form-check-input" type="radio" name="usertype" value="user" checked/>
                      <label className="form-check-label">
                      User
                      </label>
                      </div>
                      
                      <div className="form-check form-check-inline">
                      <Field className="form-check-input" type="radio" name="usertype"  value="admin"/>
                      <label className="form-check-label" >
                      Admin
                      </label>
                      </div>
                      <div className="form-check form-check-inline">
                      <Field className="form-check-input" type="radio" name="usertype" value="supervisor"/>
                      <label className="form-check-label">
                      Supervisor
                      </label>
                      </div>
                      </div>
                      </div>
              </div>
            </div>
            <div className="submit-section">
              <button type='submit' className="btn btn-primary submit-btn">Submit</button>
            </div>
          </Form>
          </Formik>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default Add