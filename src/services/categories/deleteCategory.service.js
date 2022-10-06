import database from "../../database";

const deleteCategoriesService = async (id) => {
  try {
    const res = await database.query(`DELETE FROM categories WHERE id = $1;`, [
      id,
    ]);
    if (res.rowCount === 0) {
      throw new Error("Product not found");
    }
  } catch (err) {
    throw new Error(err);
  }
};
export default deleteCategoriesService;
