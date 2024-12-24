import ProductModel from "../models/product.model.js";

class CategoryService {
  constructor() {
    this.productsModel = ProductModel;
  }
  async getCategories() {
    const products = await this.productsModel.aggregate([
      {
        $group: { _id: "$category", totalProducts: { $sum: "$quantity" }, totalSales: { $sum: "$price" } },
      },
    ]);
    return products;
  }
}

export default CategoryService;
