import { Router } from "express";
import {
  createCategoriesController,
  deleteCategoriesController,
  listCategoriesController,
  retrieveCategorieController,
  updateCategoriesController,
} from "../controller/categories.controller";
import unrepeatedCategoryNames from "../middlewares/unrepeatedCategoryNames.middleware";

const router = Router();

router.get("", listCategoriesController);
router.get("/:id", retrieveCategorieController);
router.post("", unrepeatedCategoryNames, createCategoriesController);
router.patch("/:id", updateCategoriesController);
router.delete("/:id", deleteCategoriesController);

export default router;
