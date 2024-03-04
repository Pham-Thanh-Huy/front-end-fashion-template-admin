import React from 'react';

const ChangePost = () => {
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
            <h4 className="page-title">Sửa bài viết</h4>
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
                    <input style={{marginTop: 20, border: 'none'}} type="submit" defaultValue="Sửa bài viết " className="btn btn-primary" />
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
};

export default ChangePost;