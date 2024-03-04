import React from 'react';

const AddPost = () => {
    return (
        <React.Fragment>
            <div className="content-page">
  <div className="content">
    {/* Start Content*/}
    <div className="container-fluid">
    
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Thêm bài viết</h4>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form className="form-horizontal" encType="multipart/form-data" action="{{route('admin.add-post')}}" method="POST">
       
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label" htmlFor="simpleinput">Tiêu đề bài viết</label>
                  <div className="col-lg-10">
                    <input type="text" name="post_name" className="form-control" id="simpleinput" defaultValue="{{old('post_name')}}" />
                  </div>
                </div>
               
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label" htmlFor="post-textarea">Chi tiết bài viết</label>
                  <div className="col-lg-10">
                    <textarea name="post_detail" className="form-control ckeditor" id="post_detail" defaultValue={"{{old('post_detail')}}"} />
                  </div>
                </div>
                
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label">Danh mục bài viết</label>
                  <div className="col-lg-10">
                    <select className="form-control" name="category_post">
                      <option value = "0">Chọn</option>
                      @foreach($category_post as $item)
                      <option value="{{$item -> id}}">{'{'}{'{'}$item -&gt; name{'}'}{'}'}</option>
                      @endforeach
                    </select>
                  </div>
                </div>
              
                <div className="form-group row mb-0">
                  <label className="col-lg-2 col-form-label">Ảnh bài viết</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" name="post_img" className="custom-file-input" id="inputGroupFile04" />
                        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                      </div>
                    </div>
                    <div id="selectedImage" />
                  </div>
                </div>
             
                <div className="form-group row mb-0 text-right">
                  <div className="col-lg-10 offset-lg-2">
                    <input style={{marginTop: 20, border: 'none'}} type="submit" defaultValue="Thêm sản phẩm" className="btn btn-primary" />
                  </div>
                </div>
              </form>
            </div> {/* end card-box */}
          </div> {/* end card*/}
        </div>{/* end col */}
      </div>
      {/* end row */}

      <h4>5 Sản phẩm mới được thêm gần đây nhất</h4>
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
    </div> {/* container-fluid */}
  </div> {/* content */}
</div>

        </React.Fragment>
    );
};

export default AddPost;