import React from "react";

const Order = () => {
  return (
    <div>
      <div className="content-page">
        <div className="content">
          {/* Start Content*/}
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box">
                  <h4 className="page-title">Dashboard</h4>
                </div>
              </div>
            </div>
            {/* end page title */}  
            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body p-0">
                    <div className="p-3 pb-0">
                      <div className="float-right">
                        <i className="mdi mdi-cart text-primary widget-icon" />
                      </div>
                      <h5 className="text-muted font-weight-normal mt-0">
                        Total Sales
                      </h5>
                      <h3 className="mt-2">3,543</h3>
                    </div>
                    <div id="sparkline1" />
                  </div>{" "}
                  {/* end card-body*/}
                </div>{" "}
                {/* end card*/}
              </div>{" "}
              {/* end col*/}
              <div className="col-xl-3 col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body p-0">
                    <div className="p-3 pb-0">
                      <div className="float-right">
                        <i className="mdi mdi-currency-usd text-danger widget-icon" />
                      </div>
                      <h5 className="text-muted font-weight-normal mt-0">
                        Income amounts
                      </h5>
                      <h3 className="mt-2">21,287</h3>
                    </div>
                    <div id="sparkline2" />
                  </div>{" "}
                  {/* end card-body*/}
                </div>{" "}
                {/* end card*/}
              </div>{" "}
              {/* end col*/}
              <div className="col-xl-3 col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body p-0">
                    <div className="p-3 pb-0">
                      <div className="float-right">
                        <i className="mdi mdi-account-multiple text-primary widget-icon" />
                      </div>
                      <h5 className="text-muted font-weight-normal mt-0">
                        Total Users
                      </h5>
                      <h3 className="mt-2">5,387</h3>
                    </div>
                    <div id="sparkline3" />
                  </div>{" "}
                  {/* end card-body*/}
                </div>{" "}
                {/* end card*/}
              </div>{" "}
              {/* end col*/}
              <div className="col-xl-3 col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body p-0">
                    <div className="p-3 pb-0">
                      <div className="float-right">
                        <i className="mdi mdi-eye-outline text-danger widget-icon" />
                      </div>
                      <h5 className="text-muted font-weight-normal mt-0">
                        Total Visits
                      </h5>
                      <h3 className="mt-2">74,315</h3>
                    </div>
                    <div id="sparkline4" />
                  </div>{" "}
                  {/* end card-body*/}
                </div>{" "}
                {/* end card*/}
              </div>{" "}
              {/* end col*/}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title">Recent Customers</h4>
                    <div className="table-responsive mt-3">
                      <table className="table table-hover table-centered mb-0">
                        <thead>
                          <tr>
                            <th>User ID</th>
                            <th>Basic Info</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Created Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">#0121</th>
                            <td>
                              <img
                                src="{{asset('assets-admin\images\users\avatar-4.jpg')}}"
                                alt="contact-img"
                                height={36}
                                title="contact-img"
                                className="rounded-circle float-left mr-2"
                              />
                              <div className="overflow-hidden">
                                <p className="mb-0 font-weight-medium">
                                  <a href="javascript: void(0);">
                                    George Lanes
                                  </a>
                                </p>
                                <span className="font-13">
                                  george@examples.com
                                </span>
                              </div>
                            </td>
                            <td>606-467-7601</td>
                            <td>New York</td>
                            <td>2018/04/28</td>
                            <td>
                              <div className="btn-group dropdown">
                                <a
                                  href="javascript: void(0);"
                                  className="dropdown-toggle arrow-none btn btn-light btn-sm"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-pencil mr-1 text-muted" />
                                    Edit Contact
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-delete mr-1 text-muted" />
                                    Remove
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-email mr-1 text-muted" />
                                    Send Email
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#0120</th>
                            <td>
                              <img
                                src="{{asset('assets-admin\images\users\avatar-4.jpg')}}"
                                alt="contact-img"
                                height={36}
                                title="contact-img"
                                className="rounded-circle float-left mr-2"
                              />
                              <div className="overflow-hidden">
                                <p className="mb-0 font-weight-medium">
                                  <a href="javascript: void(0);">
                                    Morgan Fuller
                                  </a>
                                </p>
                                <span className="font-13">
                                  morgan@examples.com
                                </span>
                              </div>
                            </td>
                            <td>407-748-6878</td>
                            <td>England</td>
                            <td>2018/04/27</td>
                            <td>
                              <div className="btn-group dropdown">
                                <a
                                  href="javascript: void(0);"
                                  className="dropdown-toggle arrow-none btn btn-light btn-sm"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-pencil mr-1 text-muted" />
                                    Edit Contact
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-delete mr-1 text-muted" />
                                    Remove
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-email mr-1 text-muted" />
                                    Send Email
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#0119</th>
                            <td>
                              <img
                                src="{{asset('assets-admin\images\users\avatar-4.jpg')}}"
                                alt="contact-img"
                                height={36}
                                title="contact-img"
                                className="rounded-circle float-left mr-2"
                              />
                              <div className="overflow-hidden">
                                <p className="mb-0 font-weight-medium">
                                  <a href="javascript: void(0);">
                                    Charlie Daly
                                  </a>
                                </p>
                                <span className="font-13">
                                  charlie@examples.com
                                </span>
                              </div>
                            </td>
                            <td>918-766-5946</td>
                            <td>Canada</td>
                            <td>2018/04/27</td>
                            <td>
                              <div className="btn-group dropdown">
                                <a
                                  href="javascript: void(0);"
                                  className="dropdown-toggle arrow-none btn btn-light btn-sm"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-pencil mr-1 text-muted" />
                                    Edit Contact
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-delete mr-1 text-muted" />
                                    Remove
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-email mr-1 text-muted" />
                                    Send Email
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#0118</th>
                            <td>
                              <img
                                src="{{asset('assets-admin\images\users\avatar-4.jpg')}}"
                                alt="contact-img"
                                height={36}
                                title="contact-img"
                                className="rounded-circle float-left mr-2"
                              />
                              <div className="overflow-hidden">
                                <p className="mb-0 font-weight-medium">
                                  <a href="javascript: void(0);">
                                    Skye Saunders
                                  </a>
                                </p>
                                <span className="font-13">
                                  skye@examples.com
                                </span>
                              </div>
                            </td>
                            <td>302-232-1376</td>
                            <td>France</td>
                            <td>2018/04/26</td>
                            <td>
                              <div className="btn-group dropdown">
                                <a
                                  href="javascript: void(0);"
                                  className="dropdown-toggle arrow-none btn btn-light btn-sm"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-pencil mr-1 text-muted" />
                                    Edit Contact
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-delete mr-1 text-muted" />
                                    Remove
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-email mr-1 text-muted" />
                                    Send Email
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#0117</th>
                            <td>
                              <img
                                src="{{asset('assets-admin\images\users\avatar-4.jpg')}}"
                                alt="contact-img"
                                height={36}
                                title="contact-img"
                                className="rounded-circle float-left mr-2"
                              />
                              <div className="overflow-hidden">
                                <p className="mb-0 font-weight-medium">
                                  <a href="javascript: void(0);">
                                    Jodie Townsend
                                  </a>
                                </p>
                                <span className="font-13">
                                  jodie@examples.com
                                </span>
                              </div>
                            </td>
                            <td>251-661-5962</td>
                            <td>Tokyo</td>
                            <td>2017/11/28</td>
                            <td>
                              <div className="btn-group dropdown">
                                <a
                                  href="javascript: void(0);"
                                  className="dropdown-toggle arrow-none btn btn-light btn-sm"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-pencil mr-1 text-muted" />
                                    Edit Contact
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-delete mr-1 text-muted" />
                                    Remove
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-email mr-1 text-muted" />
                                    Send Email
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
            </div>
            {/* end row */}
          </div>{" "}
          {/* container-fluid */}
        </div>{" "}
        {/* content */}
      </div>
    </div>
  );
};

export default Order;
