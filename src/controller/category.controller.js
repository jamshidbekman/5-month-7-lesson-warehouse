import CategoryService from "../service/category.service.js";

class CategoryController {
  constructor() {
    this.categoryService = new CategoryService();
  }
  async getCategoriesController(req, res) {
    try {
      const data = await this.categoryService.getCategories();
      res.statusCode = 200;
      res.send(data);
    } catch (error) {
      res.statusCode = 400;
      res.send({
        message: error.message,
      });
    }
  }
}

export default CategoryController;
