import createCategoriesService from "../services/categories/createCategories.service";
import deleteCategoriesService from "../services/categories/deleteCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import retrieveCategoriesService from "../services/categories/retrieveCategories.service";
import updateCategoriesService from "../services/categories/updateCategories.service";

const createCategoriesController = async (req, res) => {
  const name = req.body.name;
  try {
    const createdCategories = await createCategoriesService(name);
    const { id } = createdCategories;
    return res.status(201).json({
      message: "Category created",
      category: { name, id },
    });
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const listCategoriesController = async (req, res) => {
  try {
    const categories = await listCategoriesService();

    return res.json(categories);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const retrieveCategorieController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await retrieveCategoriesService(id);
    return res.json(category);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const updateCategoriesController = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  try {
    const updatedUser = await updateCategoriesService(id, body);

    return res.status(200).json({
      message: "Category updated",
      category: updatedUser,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const deleteCategoriesController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCategoriesService(id);
    return res.status(204).send();
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export {
  listCategoriesController,
  createCategoriesController,
  retrieveCategorieController,
  updateCategoriesController,
  deleteCategoriesController,
};
