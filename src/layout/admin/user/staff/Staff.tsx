import React from 'react';

const Staff = () => {
    return (
        <React.Fragment>
           <div className="content-page">
  <div className="content">
    {/* Start Content*/}
    <div className="container-fluid">
      <br /><br />
      <div>
        <div>
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mb-3">Thêm nhân viên</h4>
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Tên nhân viên</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="form-group ">
                    <label>Quyền của nhân viên</label>
                    <div>
                      <select className="form-control">
                        <option />
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div><br />
                    <button type="submit" className="btn btn-primary">Thêm nhân viên</button>
                  </div></form> {/* end card-body*/}
              </div> {/* end card*/}
            </div>
            {/* end col */}
          </div>
          <div>
            <div className="col-16">
              <div className="card">
                <div className="card-body">
                  <h4 className="header-title">Danh sách nhân viên công ty</h4>
                  <div className="table-responsive mt-3">
                    <table className="table table-hover table-centered mb-0">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Mã nhân viên</th>
                          <th>Tên nhân viên</th>
                          <th>Ảnh</th>
                          <th>Số điện thoại</th>
                          <th>Ngày sinh</th>
                          <th>Địa chỉ</th>
                          <th>Giới tính</th>
                          <th>Chức vụ</th>
                          <th>Chức năng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#0121</th>
                          <td>
                            <img src="{{asset('assets-admin\images\users\avatar-4.jpg')}}" alt="contact-img" height={36} title="contact-img" className="rounded-circle float-left mr-2" />
                            <div className="overflow-hidden">
                              <p className="mb-0 font-weight-medium"><a href="javascript: void(0);">George Lanes</a></p>
                              <span className="font-13">george@examples.com</span>
                            </div>
                          </td>
                          <td>
                            606-467-7601
                          </td>
                          <td>
                            New York
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            <div className="btn-group dropdown">
                              <a href="javascript: void(0);" className="dropdown-toggle arrow-none btn btn-light btn-sm" data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-horizontal" /></a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#"><i className="mdi mdi-pencil mr-1 text-muted" />Edit Contact</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-delete mr-1 text-muted" />Remove</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-email mr-1 text-muted" />Send Email</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#0120</th>
                          <td>
                            <img src="{{asset('assets-admin\images\users\avatar-4.jpg')}}" alt="contact-img" height={36} title="contact-img" className="rounded-circle float-left mr-2" />
                            <div className="overflow-hidden">
                              <p className="mb-0 font-weight-medium"><a href="javascript: void(0);">Morgan Fuller</a></p>
                              <span className="font-13">morgan@examples.com</span>
                            </div>
                          </td>
                          <td>
                            407-748-6878
                          </td>
                          <td>
                            England
                          </td>
                          <td>
                            2018/04/27
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            <div className="btn-group dropdown">
                              <a href="javascript: void(0);" className="dropdown-toggle arrow-none btn btn-light btn-sm" data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-horizontal" /></a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#"><i className="mdi mdi-pencil mr-1 text-muted" />Edit Contact</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-delete mr-1 text-muted" />Remove</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-email mr-1 text-muted" />Send Email</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#0119</th>
                          <td>
                            <img src="{{asset('assets-admin\images\users\avatar-4.jpg')}}" alt="contact-img" height={36} title="contact-img" className="rounded-circle float-left mr-2" />
                            <div className="overflow-hidden">
                              <p className="mb-0 font-weight-medium"><a href="javascript: void(0);">Charlie Daly</a></p>
                              <span className="font-13">charlie@examples.com</span>
                            </div>
                          </td>
                          <td>
                            918-766-5946
                          </td>
                          <td>
                            Canada
                          </td>
                          <td>
                            2018/04/27
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            <div className="btn-group dropdown">
                              <a href="javascript: void(0);" className="dropdown-toggle arrow-none btn btn-light btn-sm" data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-horizontal" /></a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#"><i className="mdi mdi-pencil mr-1 text-muted" />Edit Contact</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-delete mr-1 text-muted" />Remove</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-email mr-1 text-muted" />Send Email</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#0118
                          </th>
                          <td>
                            <img src="{{asset('assets-admin\images\users\avatar-4.jpg')}}" alt="contact-img" height={36} title="contact-img" className="rounded-circle float-left mr-2" />
                            <div className="overflow-hidden">
                              <p className="mb-0 font-weight-medium"><a href="javascript: void(0);">Skye Saunders</a></p>
                              <span className="font-13">skye@examples.com</span>
                            </div>
                          </td>
                          <td>
                            302-232-1376
                          </td>
                          <td>
                            France
                          </td>
                          <td>
                            2018/04/26
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            <div className="btn-group dropdown">
                              <a href="javascript: void(0);" className="dropdown-toggle arrow-none btn btn-light btn-sm" data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-horizontal" /></a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#"><i className="mdi mdi-pencil mr-1 text-muted" />Edit Contact</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-delete mr-1 text-muted" />Remove</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-email mr-1 text-muted" />Send Email</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#0117
                          </th>
                          <td>
                            <img src="{{asset('assets-admin\images\users\avatar-4.jpg')}}" alt="contact-img" height={36} title="contact-img" className="rounded-circle float-left mr-2" />
                            <div className="overflow-hidden">
                              <p className="mb-0 font-weight-medium"><a href="javascript: void(0);">Jodie Townsend</a></p>
                              <span className="font-13">jodie@examples.com</span>
                            </div>
                          </td>
                          <td>
                            251-661-5962
                          </td>
                          <td>
                            Tokyo
                          </td>
                          <td>
                            2017/11/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            2018/04/28
                          </td>
                          <td>
                            <div className="btn-group dropdown">
                              <a href="javascript: void(0);" className="dropdown-toggle arrow-none btn btn-light btn-sm" data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-horizontal" /></a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#"><i className="mdi mdi-pencil mr-1 text-muted" />Edit Contact</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-delete mr-1 text-muted" />Remove</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-email mr-1 text-muted" />Send Email</a>
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
        </div> {/* container-fluid */}
      </div> {/* content */}
    </div>
  </div></div>

        </React.Fragment>
    );
};

export default Staff;