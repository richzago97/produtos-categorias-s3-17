import database from "../../database";

const updateCategoriesService = async (id, body) => {
  try {
    let query = "UPDATE categories SET ";
    const keys = Object.keys(body);
    const values = Object.values(body);
    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = $${(keys.length += 1)} RETURNING *;`;

    const res = await database.query(query, [...values, id]);

    if (res.rowCount === 0) {
      throw new Error("Category not found");
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
export default updateCategoriesService;
