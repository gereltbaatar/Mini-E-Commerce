import express, { request, response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const PORT = process.env.PORT || 9911;
const server = express();

server.use(bodyParser.json());
server.use(cors());

const sql = neon(`${process.env.BACKEND_URL}`);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

server.get("/singleProduct", async (_, response) => {
  try {
    const { id } = _.query;

    const sqpResponse = await sql`SELECT * FROM products WHERE id = ${id}`;

    response.json(sqpResponse);
  } catch (error) {
    console.error("error inserting products:", error);
    request.status(500).json({ error: "Бүтээгдэхүүн Устгахад алдаа гарлаа" });
  }
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

server.get("/", async (_, response) => {
  const sqpResponse = await sql`SELECT * FROM products`;
  response.json(sqpResponse);
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

server.get("/user", async (_, response) => {
  const sqpResponse = await sql`SELECT * FROM customers`;
  response.json(sqpResponse);
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

server.get("/order_items", async (_, response) => {
  const sqpResponse =
    await sql`SELECT * FROM products JOIN order_items ON (order_items.product_id = products.id)`;
  response.json(sqpResponse);
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// response.send("post huselt irsen")

server.post("/products", async (request, response) => {
  try {
    const { name, description, price, image_url } = request.body;

    const res = await sql`
    INSERT INTO products ( name, description, price, image_url) 
    VALUES (${name}, ${description}, ${price}, ${image_url})
    `;

    response.json({
      message: `'${name}' Нэртэй бараа амжилттай нэмэгдлээ`,
      res,
    });
  } catch (error) {
    console.error("error inserting products:", error);
    request.status(500).json({ error: "Бүтээгдэхүүн нэмэхэд алдаа гарлаа" });
  }
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

server.post("/order_items", async (request, response) => {
  try {
    const { order_id, product_id, price, quantity } = request.body;

    const res = await sql`
    INSERT INTO order_items ( order_id, product_id, price, quantity) 
    VALUES (${order_id}, ${product_id}, ${price}, ${quantity})
    `;

    response.json({
      message: `'${order_id}' амжилттай нэмэгдлээ`,
      res,
    });
  } catch (error) {
    console.error("error inserting products:", error);
    request.status(500).json({ error: "Бүтээгдэхүүн нэмэхэд алдаа гарлаа" });
  }
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

server.delete("/products", async (request, response) => {
  try {
    const { productId } = request.body;

    if (isNaN(productId)) {
      return request.status(400), json({ error: "Invalid ID parameter" });
    }

    const res = await sql`
    DELETE FROM order_items WHERE product_id = ${productId};
`;

    await sql`
    DELETE FROM products WHERE id = ${productId};
`;

    response.json({
      message: `'${productId}' ID-тай бараа амжилттай Устгагдлаа`,
      res,
    });
  } catch (error) {
    console.error("error inserting products:", error);
    request.status(500).json({ error: "Бүтээгдэхүүн Устгахад алдаа гарлаа" });
  }
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

server.delete("/order_items", async (request, response) => {
  try {
    const { id } = request.body;
    console.log("id ireh", id);

    if (isNaN(id)) {
      return request.status(400), json({ error: "Invalid ID parameter" });
    }

    const res = await sql`
    DELETE FROM order_items WHERE id = ${id} 
    `;

    response.json({
      message: `'${id}' ID-тай бараа амжилттай Устгагдлаа`,
      res,
    });
  } catch (error) {
    console.error("error inserting products:", error);
    request.status(500).json({ error: "Бүтээгдэхүүн Устгахад алдаа гарлаа" });
  }
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

server.put("/products", async (request, response) => {
  try {
    const { productId, name, description, price, image_url } = request.body;

    // const editData =

    const res = await sql`
    UPDATE products SET name=${name}, description=${description}, price=${price}, image_url=${image_url}  WHERE id = ${productId} 
    `;

    response.json({
      message: `'${name}' Нэртэй бараа амжилттай шинэчлэгдлээ`,
      res,
    });
  } catch (error) {
    console.error("error inserting products:", error);
    request
      .status(500)
      .json({ error: "Бүтээгдэхүүн шинэчлэгдлээ алдаа гарлаа" });
  }
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
