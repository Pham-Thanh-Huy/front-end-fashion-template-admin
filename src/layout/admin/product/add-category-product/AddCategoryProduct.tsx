import React from "react";

const AddCategoryProduct = () => {
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
                  <h4 className="page-title">Thêm danh mục sản phẩm</h4>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <form
                      className="form-horizontal"
                      action="{{route('admin.add-category-product')}}"
                      method="POST"
                    >
                      <div className="form-group row">
                        <label
                          className="col-lg-2 col-form-label"
                          htmlFor="simpleinput"
                        >
                          Tên danh mục
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="text"
                            className="form-control"
                            id="simpleinput"
                            name="name_category_product"
                            placeholder="Nhập tên danh mục"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-lg-2 col-form-label">
                          Danh mục cha
                        </label>
                        <div className="col-lg-10">
                          <select
                            className="form-control"
                            name="parent_category_product"
                          >
                            <option value={0}>Chọn</option>
                            <option value={0}>
                              Không thuộc danh mục cha nào
                            </option>

                            <option>Sản phẩm</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group row mb-0 text-right">
                        <div className="col-lg-10 offset-lg-2">
                          <input
                            style={{ marginTop: 20, border: "none" }}
                            type="submit"
                            defaultValue="Thêm sản phẩm"
                            className="btn btn-primary"
                          />
                        </div>
                      </div>
                    </form>
                  </div>{" "}
                  {/* end card-box */}
                </div>{" "}
                {/* end card*/}
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title">Danh mục sản phẩm</h4>
                    <br />
                    <div className="table-responsive">
                      <table className="table mb-0" width="100%">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Mã danh mục sản phẩm</th>
                            <th>Danh mục sản phẩm</th>
                            <th>Danh mục cha</th>
                            <th>Ngày tạo danh mục</th>
                            <th>Người tạo danh mục</th>
                            <th>Chức năng</th>
                          </tr>
                        </thead>
                        <tbody>
                        
                          <tr>
                            <th>count</th>
                            <th scope="row">#DM0839</th>
                            <th>Quần</th>
                            {/* kiểm tra danh mục cha nếu không thuộc danh mục cha thì ghi không nếu có danh mục cha thì in ra danh mục cha */}
                            <th>Không</th>
                            <th>30/06/2003</th>
                            <th>Phạm Thành Huy</th>
                            <th>
                              <a style={{ color: "green" }} href="#">
                                Sửa
                              </a>{" "}
                              -{" "}
                              <a style={{ color: "red" }} href="#">
                                Xóa
                              </a>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>{" "}
                  {/* end card-body */}
                </div>
              </div>{" "}
              {/* end col */}
            </div>{" "}
            {/* container-fluid */}
          </div>{" "}
          {/* content */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddCategoryProduct;
