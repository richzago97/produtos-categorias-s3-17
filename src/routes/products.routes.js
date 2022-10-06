import { Router } from "express";
import {
  createProductsController,
  deleteProductController,
  listProductsByIdController,
  listProductsController,
  retrieveProductController,
  updateProductsController,
} from "../controller/products.controller";
import unrepeatedCategoryNames from "../middlewares/unrepeatedCategoryNames.middleware";
import unrepeatedProductNames from "../middlewares/unrepeatedProductNames.middleware";

const router = Router();

router.get("", listProductsController);
router.get("/:id", retrieveProductController);
router.get("/category/:id", listProductsByIdController);
router.post("", unrepeatedProductNames, createProductsController);
router.patch("/:id", updateProductsController);
router.delete("/:id", deleteProductController);

export default router;
