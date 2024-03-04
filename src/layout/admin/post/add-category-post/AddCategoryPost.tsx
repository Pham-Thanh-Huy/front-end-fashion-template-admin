import React from 'react';

const AddCategoryPost = () => {
    return (
       <React.Fragment>
     <div className="content-page">
  <div className="content">
    {/* Start Content*/}
    <div className="container-fluid">
      {/*  //kiểm tra thêm sản phẩm nếu thất bại thì thông báo */}
     
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Thêm danh mục bài viết</h4>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form className="form-horizontal" action="{{route('admin.add-category-post')}}" method="POST">

                <div className="form-group row">
                  <label className="col-lg-2 col-form-label" htmlFor="simpleinput">Tên danh mục</label>
                  <div className="col-lg-10">
                    <input type="text" className="form-control" id="simpleinput" name="name_category_post" defaultValue="{{old('name_category_post')}}" />
                  </div>
                </div>
               
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label">Danh mục cha</label>
                  <div className="col-lg-10">
                    <select className="form-control" name="parent_category_post">
                      <option value = {0}>Chọn</option>
                      <option value={0}>Không thuộc danh mục cha nào</option>
                      <option value="{{$item -> id}}">1</option>
                    </select>
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
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Danh mục sản phẩm</h4><br />
              <div className="table-responsive">
    
                <table className="table mb-0" width="100%">
                  <thead>
                    <tr>
                      <th>Stt</th>
                      <th>ID</th>
                      <th>Danh mục sản phẩm</th>
                      <th>Danh mục cha</th>
                      <th>Ngày tạo danh mục</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* kiểm tra danh mục cha */}{/*?php $count = 0; ?*/} {/* Khởi tạo biến đếm */}{/*?php $count++; ?*/} {/* Tăng biến đếm sau mỗi vòng lặp */}
                    <tr>
                      <th>{'{'}{'{'}$count{'}'}{'}'}</th>
                      <th scope="row">{'{'}{'{'}$item-&gt;id{'}'}{'}'}</th>
                      <th>{'{'}{'{'}$item-&gt;name{'}'}{'}'}</th>
                      {/* kiểm tra danh mục cha nếu không thuộc danh mục cha thì ghi không nếu có danh mục cha thì in ra danh mục cha */}
                      <th>
                       ok
                      </th>
                      <th>{'{'}{'{'}$item-&gt;created_at{'}'}{'}'}</th>
                      <th><a style={{color: 'green'}} href="#">Sửa</a> - <a style={{color: 'red'}} href="#">Xóa</a></th>
                    </tr></tbody>
                </table>
              </div>
            </div> {/* end card-body */}
          </div>
        </div> {/* end col */}
      </div> {/* container-fluid */}
    </div> {/* content */}
  </div>
</div>

       </React.Fragment>
    );
};

export default AddCategoryPost;