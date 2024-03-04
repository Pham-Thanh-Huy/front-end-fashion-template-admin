import React from 'react';

const ChangeProduct = () => {
    return (
       <React.Fragment>
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
            <h4 className="page-title">Sửa sản phẩm</h4>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form className="form-horizontal" encType="multipart/form-data" action="{{route('admin.add-product')}}" method="POST">
    
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label" htmlFor="simpleinput">Tên sản phẩm</label>
                  <div className="col-lg-10">
                    <input type="text" name="product_name" className="form-control" id="simpleinput" defaultValue="{{old('product_name')}}" />
                  </div>
                </div>
              
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label" htmlFor="example-email">Giá tiền</label>
                  <div className="col-lg-10">
                    <input type="text" defaultValue="{{old('product_price')}}" name="product_price" className="form-control" />
                  </div>
                </div>
              
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label" htmlFor="post-textarea">Mô tả sản phẩm</label>
                  <div className="col-lg-10">
                    <textarea name="product_description" className="form-control" cols={7} id="post-textarea" defaultValue={"{{old('product_description')}}"} />
                  </div>
                </div>
             
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label">Danh mục sản phẩm</label>
                  <div className="col-lg-10">
                    <select className="form-control" name="category_product">
                      <option value = "0">Chọn</option>
             
                      <option value="1">Quần</option>
              
                    </select>
                  </div>
                </div>
            
                <div className="form-group row mb-0">
                  <label className="col-lg-2 col-form-label">Ảnh sản phẩm 1</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" name="product_img" className="custom-file-input" id="inputGroupFile04" />
                        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                      </div>
                    </div>
                    <div id="selectedImage" />
                  </div>
                </div>
                <div className="form-group row mb-0">
                  <label className="col-lg-2 col-form-label">Ảnh sản phẩm 2</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" name="product_img" className="custom-file-input" id="inputGroupFile04" />
                        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                      </div>
                    </div>
                    <div id="selectedImage" />
                  </div>
                </div>
                <div className="form-group row mb-0">
                  <label className="col-lg-2 col-form-label">Ảnh sản phẩm 3</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" name="product_img" className="custom-file-input" id="inputGroupFile04" />
                        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                      </div>
                    </div>
                    <div id="selectedImage" />
                  </div>
                </div>
                <div className="form-group row mb-0">
                  <label className="col-lg-2 col-form-label">Ảnh sản phẩm 4</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" name="product_img" className="custom-file-input" id="inputGroupFile04" />
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
    </div> {/* container-fluid */}
  </div> {/* content */}
</div>

      </React.Fragment>
    );
       </React.Fragment>
    );
};

export default ChangeProduct;