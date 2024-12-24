import { Router } from "express";
import CategoryController from "../controller/category.controller.js";

const CategoryRouter = Router();

const categoryController = new CategoryController();

CategoryRouter.get("/categories", (req, res) => categoryController.getCategoriesController(req, res));

export default CategoryRouter;
