interface Product {
    productId: number;
    listedPrice: number;
    outstanding: boolean;
    productCode: string;
    productDescription: string;
    productDetail: string;
    productName: string;
    productPrice: number;
    createdAt: string;
    imageList: {
      imageUrl: string;
      imageProduct: string;
    }[];
    categoryProduct: {
      categoryId: number;
      categoryName: string;
      parentId: number;
    };
    stock: {
      stockId: number;
      quantity: number;
    };
    user: {
      address: string;
      age: number;
      firstName: string;
      lastName: string;
      email :string;
      userImage: string;
      imageUrl: string;
    };
  }
  
  export default Product;
  