import createProductsService from "../services/products/createProducts.service";
import deleteProductService from "../services/products/deleteProduct.service";
import listProductsService from "../services/products/listProducts.service";
import listProductsByIdService from "../services/products/listProductsByID.service";
import retrieveProductService from "../services/products/retrieveProduct.service";
import updateProductService from "../services/products/updateProduct.service";

const createProductsController = async (req, res) => {
  const { name, price, category_id } = req.body;
  try {
    const createdProducts = await createProductsService(
      name,
      price,
      category_id
    );
    const { id } = createdProducts;

    return res.status(201).json({
      message: "Product created",
      product: { name, price, category_id, id },
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const listProductsController = async (req, res) => {
  try {
    const products = await listProductsService();

    return res.json(products);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const retrieveProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await retrieveProductService(id);

    return res.json(products);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const updateProductsController = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  try {
    const updatedUser = await updateProductService(id, body);

    return res.status(200).json({
      message: "Product updated",
      product: updatedUser,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const listProductsByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await listProductsByIdService(id);

    return res.json(products);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProductService(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export {
  createProductsController,
  listProductsController,
  retrieveProductController,
  updateProductsController,
  listProductsByIdController,
  deleteProductController,
};
