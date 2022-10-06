import database from "../../database";

const listProductsByIdService = async (id) => {

  try {
    const res = await database.query(
      `SELECT 
      p.name,
      p.price,
      ca.name	category 
  FROM
      products p 
  JOIN 
      categories ca ON p.category_id = ca.id
  WHERE 
      ca.id = $1;`,
      [id]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};
export default listProductsByIdService;
