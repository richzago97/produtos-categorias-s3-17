import database from "../../database";

const retrieveProductService = async (id) => {
  try {
    const res = await database.query(`SELECT * FROM products WHERE id = $1`, [
      id,
    ]);
    const product = res.rows[0];

    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (err) {
    throw new Error(err);
  }
};

export default retrieveProductService;
