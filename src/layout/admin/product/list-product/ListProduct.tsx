import React from 'react';

const ListProduct = () => {
    return (
       <React.Fragment>
   <div className="content-page">
  <div className="content">
    {/* Start Content*/}
    <div className="container-fluid">
      
      <br /><br />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Danh sách sản phẩm</h4>
              <div className="table-responsive mt-3">
                <table className="table table-hover table-centered mb-0">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Ảnh sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Giá tiền</th>
                      <th>Thông tin người đăng bài</th>
                      <th>Ngày đăng</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody><tr>
                      <th scope="row">{'{'}{'{'}$item -&gt; id{'}'}{'}'}</th>
                      <td>
                        <img style={{marginLeft: 30}} src="{{asset($item -> product_thumb)}}" alt="contact-img" height={36} title="contact-img" className="rounded-circle  mr-2" />
                      </td>
                      <td>
                        {'{'}{'{'}$item -&gt; product_name{'}'}{'}'}
                      </td>
                      <td>
                        {'{'}{'{'} number_format($item-&gt;price, 0, ',', '.') . ' ₫' {'}'}{'}'}
                      </td>
                      <td>
                        <img src="{{asset('assets-admin\images\users\avatar-white.jpg')}}" alt="contact-img" height={36} title="contact-img" className="rounded-circle float-left mr-2" />
                        <div className="overflow-hidden">
                          <p className="mb-0 font-weight-medium"><a href="javascript: void(0);">{'{'}{'{'}$users['name']{'}'}{'}'}</a></p>
                          <span className="font-13">{'{'}{'{'}$users['email']{'}'}{'}'}</span>
                        </div>
                     
                      </td>
                      <td>
                        {'{'}{'{'}$item -&gt; created_at{'}'}{'}'}
                      </td>
                      <td>
                        <div className="btn-group dropdown">
                          <a href="javascript: void(0);" className="dropdown-toggle arrow-none btn btn-light btn-sm" data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-horizontal" /></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#"><i className="mdi mdi-pencil mr-1 text-muted" />Sửa sản phẩm</a>
                            <a className="dropdown-item" href="#"><i className="mdi mdi-delete mr-1 text-muted" />Xóa sản phẩm</a>
                          </div>
                        </div>
                      </td>
                    </tr></tbody>
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

       </React.Fragment>
    );
};

export default ListProduct;