import database from "../../database";

const retrieveCategoriesService = async (id) => {
  try {
    const res = await database.query(`SELECT * FROM categories WHERE id = $1`, [
      id,
    ]);

    const categorie = res.rows[0];

    if (!categorie) {
      throw new Error("Category not found");
    }
    return categorie;
  } catch (err) {
    throw new Error(err);
  }
};
export default retrieveCategoriesService;
