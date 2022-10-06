import database from "../database";
const unrepeatedProductNames = async (req, res, next) => {
  const name = req.body.name;
  const selectAll = await database.query("SELECT * FROM products", []);
  const teste = selectAll.rows.find((category) => category.name === name);
  if (teste) {
    return res.status(400).json({
      message: "The category name already exists.",
    });
  }
  return next();
};

export default unrepeatedProductNames;
