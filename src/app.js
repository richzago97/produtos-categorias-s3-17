import express from "express";
import "dotenv/config";
import categoriesRouter from "./routes/categories.routes";
import productsRouter from "./routes/products.routes";
import { startDatabase } from "./database";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

const PORT = process.env.PORT || 3000

export default app.listen(PORT, () => {
  console.log("Server running");
  startDatabase();
});
