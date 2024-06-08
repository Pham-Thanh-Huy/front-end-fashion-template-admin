
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { linkApi } from '../../../../utils/ApiUrl';
import { checkStatus } from '../../../../utils/CheckStatus';
import Product from '../../../../entity/Product';

const UpdateInventoryProduct = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const productId = param.get("productId");
    const [product, setProduct] = useState<Product>();
    if (!productId) {
        navigate(-1)
    }
    useEffect(() => {
        fetch(linkApi + `/api/product/get/${productId}`)
            .then((res) => {
                if (checkStatus(res) === false) {
                    navigate(-1)
                }
                return res.json();
            })
            .then((data) => {
                if (data.code === 200) {
                    setProduct(data.data)
                }
            })
    }, [])
    return (
        <div className="content-page">
            <div className="content">
                {/* Start Content*/}
                <div className="container-fluid">
                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <h6 style={{ fontSize: '16px' }} className="page-title">Thêm tồn kho cho sản phẩm</h6>
                            </div>
                        </div>
                    </div>

                    <div className='row'>

                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="header-title">Danh sách số lượng tồn kho của sản phẩm với màu và size khác nhau</h4>
                                    <div style={{marginTop : '20px'}}>
                                        <p>Tên sản phẩm: {product?.productName}</p>
                                        <p>Ảnh sản phẩm: <img style={{width : '40px'}} src= {product?.imageList[0].imageUrl}></img></p>
                                    </div>

                                    <div className="table-responsive mt-3"> 
                                        <table style={{ textAlign: 'center' }} className="table table-hover table-centered mb-0">
                                            <thead>
                                                <tr style={{ textAlign: "center" }}>
                                                    <th>Tên size sản phẩm</th>
                                                    <th>Tên màu sản phẩm</th>
                                                    <th>Số lượng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {product?.inventoryList.map((data) => (
                                                    <tr>
                                                        <th>{data.productSize.sizeName}</th>
                                                        <th>{data.productColor.colorName}</th>
                                                        <th>{data.quantity}</th>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateInventoryProduct;

