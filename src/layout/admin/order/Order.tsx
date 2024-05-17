import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { linkApi } from "../../../utils/ApiUrl";
import ReactPaginate from "react-paginate";
import Orders from "../../../entity/Order";

const Order = () => {
  const jwt = sessionStorage.getItem("jwtToken");
  const jwtParse = jwt ? jwtDecode(jwt) : null;
  const username = jwtParse?.sub;
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [key, setKey] = useState(0);
  const [orderList, setOrderList] = useState<Orders[]>([]);


  useEffect(() => {
    fetch(linkApi + `/api/order/get/all/pagination?size=${pageSize}`,{
      headers : {
        'Authorization' : `Bearer ${jwt}`
      }
    }).then((res) => res.json())
      .then((data) => { setTotalPage(data.data.totalPages); console.log(data.data.totalPages) })
      .catch((err) => console.log("Lỗi khi tổng trang của đơn hàng: " + err))

    fetch(linkApi + `/api/order/get/all/pagination?page=${currentPage}&size=${pageSize}&sort=orderId,desc`, {
      headers : {
        'Authorization' : `Bearer ${jwt}`
      }
    }).then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setOrderList(data.data.content)
        } else {
            console.log("Gặp lỗi trong quá trình toàn bộ đơn hàng: " + data.message)
        }
      })
      .catch((err) => console.log("Lỗi khi tổng trang của đơn hàng: " + err))
  }, [key])

  function handlePageClick(selectedItem: { selected: number; }): void {
    setCurrentPage(selectedItem.selected);
    setKey(key + 1)
  }

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
                        <thead style={{ textAlign: "center" }}>
                          <tr>
                            <th>Id đơn hàng</th>
                            <th>Tên khách hàng</th>
                            <th>số điện thoại</th>
                            <th>Trạng thái đơn hàng</th>
                            <th>Ngày mua hàng</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: "center" }}>
                          {orderList.map((order) => (
                               <tr>
                               <th scope="row">{order.orderId}</th>
                               <td>
                                   <img
                                     src={order.user.imageUrl}
                                     alt="contact-img"
                                     height={36}
                                     title="contact-img"
                                     className="rounded-circle"
                                   />
                                   <div className="overflow-hidden">
                                     <p className="mb-0 font-weight-medium">
                                       <a href="javascript: void(0);">
                                         {order.user.lastName} {order.user.firstName}
                                       </a>
                                     </p>
                                     <span className="font-13">
                                       {order.user.email}
                                     </span>
                                   </div>
                                 </td>
                               {/* <td>{order.user.}</td> */}
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
                          ))}


                        </tbody>
                      </table>
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel="Sau"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={4}
                        pageCount={totalPage}
                        previousLabel="Trước"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                      />
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
